import { isWordChar, isLineTerminator } from "./CharMatching";
import { contains } from "./CharSet";
import { captures, endIndex, nCaps, str as stateString, state as makeState } from "./State";
import { stringMap, boolXor } from "./utils";
import { multiline, ignoreCase } from "./CompCtx";
import { isFailure, makeFailure, makeSuccess, resultState } from "./Failure";

import assert from "assert";

function canonicaliseString(str, ctx) {
    return stringMap(canonicalise, str, [ctx]);
}

function emptyMatcher(state, cont) {
    return cont(state);
}

function canonicalise(c, ctx) {
    if (!ignoreCase(ctx)) {
        return c;
    }

    var u = c.toUpperCase();
    if (u.length !== 1) {
        return c;
    }
    var u_cp = u.codePointAt();
    var c_cp = c.codePointAt();

    if (c_cp >= 128 && u_cp < 128) {
        return c;
    } else {
        return u;
    }
}

function copyCaptures(caps) {
    var ret = [];
    for (var i = 0; i < caps.length; i++) {
        ret[i] = caps[i];
    }
    return ret;
}

function characterSetMatcher(char_set, invert, ctx, loc) {
    return function (state, cont) {
        var e = endIndex(state);
        var str = stateString(state);

        if (e === str.length) {
            return makeFailure();
        }
        var cc = canonicalise(str.charAt(e), ctx);
        if (invert) {
            if (contains(char_set, cc)) {
                return makeFailure();
            }
        } else {
            if (!contains(char_set, cc)) {
                return makeFailure();
            }
        }
        var state_y = makeState(str, nCaps(state), e + 1, captures(state), loc);
        return cont(state_y);
    };
}

function backReferenceMatcher(n, ctx) {
    assert(typeof n === "number");
    return function (state, cont) {
        if (n === 0 || n > nCaps(state)) {
            throw new Error(`SyntaxError: Backreference ${n} not defined. nCaps(state): ${nCaps(state)}`);
        }

        var cap = captures(state);
        var s = cap[n];
        if (s === undefined) {
            return cont(state);
        }

        var e = endIndex(state);
        var len = s.length;
        var f = e + len;
        var str = stateString(state);
        if (f > str.length) {
            return makeFailure();
        }

        var s1 = canonicaliseString(s, ctx);
        var s2 = canonicaliseString(str.substring(e, f), ctx);
        if (s1 !== s2) {
            return makeFailure();
        }

        var state_y = makeState(str, nCaps(state), f, cap);
        return cont(state_y);
    };
}

function repeatMatcher(m, min, max, greedy, parenIndex, parenCount) {
    return function (state, cont) {
        if (max === 0) {
            return cont(state);
        }

        var cont_d = function (state_y) {
            if (min === 0 && endIndex(state_y) === endIndex(state)) {
                return makeFailure();
            }
            var min2 = min === 0 ? 0 : min - 1;
            var max2 = max === Infinity ? Infinity : max - 1;
            let f = repeatMatcher(m, min2, max2, greedy, parenIndex, parenCount);
            return f(state_y, cont);
        };

        var caps = copyCaptures(captures(state));
        for (var i = parenIndex + 1; i <= parenIndex + parenCount; i++) {
            caps[i] = undefined;
        }

        var e = endIndex(state);
        var state_xr = makeState(stateString(state), nCaps(state), e, caps);
        if (min > 0) {
            return m(state_xr, cont_d);
        }

        if (!greedy) {
            var z = cont(state);
            if (!isFailure(z)) {
                return z;
            } else {
                return m(state_xr, cont_d);
            }
        } else {
            var z = m(state_xr, cont_d);
            if (!isFailure(z)) {
                return z;
            } else {
                return cont(state);
            }
        }
    };
}

function getHatAssertionTester(ctx) {
    return function (state) {
        var e = endIndex(state);
        if (e === 0) {
            return true;
        }
        if (multiline(ctx) === false) {
            return false;
        }
        if (isLineTerminator(stateString(state)[e - 1])) {
            return true;
        }

        return false;
    };
}

function getDollarAssertionTester(ctx) {
    return function (state) {
        var e = endIndex(state);
        var input_length = stateString(state).length;
        if (e === input_length) {
            return true;
        }
        if (multiline(ctx) === false) {
            return false;
        }
        if (isLineTerminator(stateString(state)[e])) {
            return true;
        }
        return false;
    };
}

function getBabyBAssertionTester() {
    return function (state) {
        var e = endIndex(state);
        var a = isWordChar(stateString(state), e - 1);
        var b = isWordChar(stateString(state), e);
        return (a && !b) || (!a && b);
    };
}

function getBigBAssertionTester() {
    return function (state) {
        var e = endIndex(state);
        var a = isWordChar(stateString(state), e - 1);
        var b = isWordChar(stateString(state), e);
        return !((a && !b) || (!a && b));
    };
}

function getLookAheadAssertionTester(m) {
    return function (state, cont) {
        var cont_d = function (state_y) {
            return makeSuccess(state_y);
        };

        var r = m(state, cont_d);
        if (isFailure(r)) {
            return makeFailure();
        }

        var state_y = resultState(r);
        var caps = captures(state_y);
        var xe = endIndex(state);
        var state_z = makeState(stateString(state), nCaps(state), xe, caps);
        return cont(state_z);
    };
}

function getNegativeLookAheadAssertionTester(m) {
    return function (state, cont) {
        var cont_d = function (state_y) {
            return makeSuccess(state_y);
        };

        var r = m(state, cont_d);
        if (!isFailure(r)) {
            return makeFailure();
        }

        return cont(state);
    };
}

function getGroupMatcher(m, parenIndex) {
    return function (state, cont) {
        var cont_d = function (state_y) {
            var str = stateString(state);
            var n_caps = nCaps(state);
            var cap = copyCaptures(captures(state_y));
            var xe = endIndex(state);
            var ye = endIndex(state_y);
            var s = str.substring(xe, ye);
            console.log(`Finished matching a group. parenIndex: ${parenIndex}, ncaps: ${n_caps}, matched string: ${s}, cap:\n${JSON.stringify(cap)}`);
            cap[parenIndex] = s;
            var z = makeState(str, n_caps, ye, cap);
            return cont(z);
        };
        return m(state, cont_d);
    };
}

function getLookaheadAssertion(m, negative) {
    return function (state, cont) {
        var cont_d = function (state_y) {
            return makeSuccess(state_y);
        };

        var r = m(state, cont_d);
        if (boolXor(negative, isFailure(r))) {
            // fail
            return makeFailure();
        } else {
            // cont
            var state_z;
            if (negative) {
                state_z = state;
            } else {
                var state_y = resultState(r);
                var caps = captures(state_y);
                var xe = endIndex(state);
                state_z = makeState(stateString(state), nCaps(state), xe, caps);
            }
            return cont(state_z);
        }
    };
}

function string2matcher(s) {
    return eval(s);
}

export {
    canonicalise,
    getNegativeLookAheadAssertionTester,
    getLookAheadAssertionTester,
    getBigBAssertionTester,
    getBabyBAssertionTester,
    getDollarAssertionTester,
    getHatAssertionTester,
    repeatMatcher,
    backReferenceMatcher,
    characterSetMatcher,
    copyCaptures,
    getGroupMatcher,
    string2matcher,
    emptyMatcher,
    getLookaheadAssertion,
};
