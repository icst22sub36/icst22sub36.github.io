import { isWordChar, isLineTerminator } from "./src/runtime/CharMatching";
import { contains } from "./src/runtime/CharSet";
import { newCtx, ctx2str, multiline, ignoreCase } from "./src/runtime/CompCtx";
import { captures, endIndex, nCaps, state as makeState, str as stateString } from "./src/runtime/State";
import { stringMap } from "./src/runtime/utils";
import { isFailure, makeFailure, makeSuccess } from "./src/runtime/Failure";
import {
    emptyMatcher,
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
    getLookaheadAssertion,
} from "./src/runtime/RegExpRuntime";
import { RegExp } from "./src/runtime/RegExpLib";
import { dynamicRegExpCreation, turnOffNative } from "./src/runtime/DynRegExpLib";
import * as StringLib from "./src/runtime/StringLib";

turnOffNative();

var x = new RegExp(
    function (state_8, cont_8) {
        var m_10 = function (state_0, cont_0) {
            var t_0 = getHatAssertionTester({
                flags: {
                    m: false,
                    i: false,
                    g: false,
                },
                parens: {
                    parenIndex: 0,
                    parenCount: 0,
                },
                nCaps: 0,
            });
            var r_0 = t_0(state_0);
            if (r_0 === false) {
                return makeFailure();
            }
            return cont_0(state_0);
        };
        var m_11 = function (state_7, cont_7) {
            var m_8 = characterSetMatcher(
                {
                    positive: { 97: true },
                    negative: null,
                },
                false,
                {
                    flags: {
                        m: false,
                        i: false,
                        g: false,
                    },
                    parens: {
                        parenIndex: 0,
                        parenCount: 0,
                    },
                    nCaps: 0,
                }
            );
            var m_9 = function (state_6, cont_6) {
                var m_6 = characterSetMatcher(
                    {
                        positive: { 97: true },
                        negative: null,
                    },
                    false,
                    {
                        flags: {
                            m: false,
                            i: false,
                            g: false,
                        },
                        parens: {
                            parenIndex: 0,
                            parenCount: 0,
                        },
                        nCaps: 0,
                    }
                );
                var m_7 = function (state_5, cont_5) {
                    var m_4 = characterSetMatcher(
                        {
                            positive: { 98: true },
                            negative: null,
                        },
                        false,
                        {
                            flags: {
                                m: false,
                                i: false,
                                g: false,
                            },
                            parens: {
                                parenIndex: 0,
                                parenCount: 0,
                            },
                            nCaps: 0,
                        }
                    );
                    var m_5 = function (state_4, cont_4) {
                        var m_2 = characterSetMatcher(
                            {
                                positive: { 98: true },
                                negative: null,
                            },
                            false,
                            {
                                flags: {
                                    m: false,
                                    i: false,
                                    g: false,
                                },
                                parens: {
                                    parenIndex: 0,
                                    parenCount: 0,
                                },
                                nCaps: 0,
                            }
                        );
                        var m_3 = function (state_3, cont_3) {
                            var m_0 = function (state_1, cont_1) {
                                var t_1 = getDollarAssertionTester({
                                    flags: {
                                        m: false,
                                        i: false,
                                        g: false,
                                    },
                                    parens: {
                                        parenIndex: 0,
                                        parenCount: 0,
                                    },
                                    nCaps: 0,
                                });
                                var r_1 = t_1(state_1);
                                if (r_1 === false) {
                                    return makeFailure();
                                }
                                return cont_1(state_1);
                            };
                            var m_1 = function (state_2, cont_2) {
                                return cont_2(state_2);
                            };
                            var cont_d_0 = function (state_y_0) {
                                return m_1(state_y_0, cont_3);
                            };
                            return m_0(state_3, cont_d_0);
                        };
                        var cont_d_1 = function (state_y_1) {
                            return m_3(state_y_1, cont_4);
                        };
                        return m_2(state_4, cont_d_1);
                    };
                    var cont_d_2 = function (state_y_2) {
                        return m_5(state_y_2, cont_5);
                    };
                    return m_4(state_5, cont_d_2);
                };
                var cont_d_3 = function (state_y_3) {
                    return m_7(state_y_3, cont_6);
                };
                return m_6(state_6, cont_d_3);
            };
            var cont_d_4 = function (state_y_4) {
                return m_9(state_y_4, cont_7);
            };
            return m_8(state_7, cont_d_4);
        };
        var cont_d_5 = function (state_y_5) {
            return m_11(state_y_5, cont_8);
        };
        return m_10(state_8, cont_d_5);
    },
    1,
    "^aabb$",
    {
        flags: {
            m: false,
            i: false,
            g: false,
        },
        parens: {
            parenIndex: 0,
            parenCount: 0,
        },
        nCaps: 0,
    }
);
var ret = x.exec("aabb");
console.log(ret);
