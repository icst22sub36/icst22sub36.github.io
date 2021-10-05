// TODO: check this syntax is supported
function state(str, n_caps, e, caps, loc) {
    return {
        str,
        n_caps,
        end_index: e,
        captures: caps,
        loc: loc,
    };
}

function str(s) {
    return s.str;
}

function nCaps(s) {
    return s.n_caps;
}

function endIndex(s) {
    return s.end_index;
}

function captures(s) {
    return s.captures;
}

export { state, str, nCaps, endIndex, captures };
