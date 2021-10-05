
import { isWordChar, isLineTerminator } from './src/runtime/CharMatching'
import { contains } from './src/runtime/CharSet'
import { newCtx, ctx2str, multiline, ignoreCase } from './src/runtime/CompCtx' 
import { captures, endIndex, nCaps, state as makeState, str as stateString } from './src/runtime/State'
import { stringMap } from './src/runtime/utils'
import { isFailure, makeFailure, makeSuccess } from './src/runtime/Failure'
import { emptyMatcher, getNegativeLookAheadAssertionTester, getLookAheadAssertionTester, getBigBAssertionTester, getBabyBAssertionTester, getDollarAssertionTester, getHatAssertionTester, repeatMatcher, backReferenceMatcher, characterSetMatcher, copyCaptures, getGroupMatcher, getLookaheadAssertion } from './src/runtime/RegExpRuntime'
import { RegExp } from './src/runtime/RegExpLib'
import { dynamicRegExpCreation, turnOffNative } from './src/runtime/DynRegExpLib'
import * as StringLib from './src/runtime/StringLib'

turnOffNative();


var b = new RegExp(function (state_31, cont_31) {
	var m_48 = getGroupMatcher(function (state_10, cont_10) {
		var m_14 = getGroupMatcher(function (state_5, cont_5) {
			var m_6 = repeatMatcher(characterSetMatcher({
				'positive': {
					'9': true,
					'10': true,
					'11': true,
					'12': true,
					'13': true,
					'32': true,
					'34': true,
					'40': true,
					'41': true,
					'44': true,
					'46': true,
					'58': true,
					'59': true,
					'60': true,
					'62': true,
					'64': true,
					'91': true,
					'92': true,
					'93': true,
					'160': true,
					'8232': true,
					'8233': true,
					'65279': true,
					'undefined': true
				},
				'negative': null
			}, true, {
				'flags': {
					'm': false,
					'i': false,
					'g': false
				},
				'parens': {
					'parenIndex': 2,
					'parenCount': 2
				},
				'nCaps': 8
			}, {
				source: '[^<>()[]\\.,;:s@"]',
				start: '3',
				end: '24'
			}), 0, Infinity, true, 2, 2);
			var m_7 = function (state_4, cont_4) {
				var m_4 = repeatMatcher(getGroupMatcher(function (state_2, cont_2) {
					var m_2 = characterSetMatcher({
						'positive': { '46': true },
						'negative': null
					}, false, {
						'flags': {
							'm': false,
							'i': false,
							'g': false
						},
						'parens': {
							'parenIndex': 3,
							'parenCount': 3
						},
						'nCaps': 8
					}, {
						source: '.',
						start: '26',
						end: '28'
					});
					var m_3 = function (state_1, cont_1) {
						var m_0 = characterSetMatcher({
							'positive': {
								'9': true,
								'10': true,
								'11': true,
								'12': true,
								'13': true,
								'32': true,
								'34': true,
								'40': true,
								'41': true,
								'44': true,
								'46': true,
								'58': true,
								'59': true,
								'60': true,
								'62': true,
								'64': true,
								'91': true,
								'92': true,
								'93': true,
								'160': true,
								'8232': true,
								'8233': true,
								'65279': true,
								'undefined': true
							},
							'negative': null
						}, true, {
							'flags': {
								'm': false,
								'i': false,
								'g': false
							},
							'parens': {
								'parenIndex': 3,
								'parenCount': 3
							},
							'nCaps': 8
						}, {
							source: '[^<>()[]\\.,;:s@"]',
							start: '28',
							end: '49'
						});
						var m_1 = function (state_0, cont_0) {
							return cont_0(state_0);
						};
						var cont_d_0 = function (state_y_0) {
							return m_1(state_y_0, cont_1);
						};
						return m_0(state_1, cont_d_0);
					};
					var cont_d_1 = function (state_y_1) {
						return m_3(state_y_1, cont_2);
					};
					return m_2(state_2, cont_d_1);
				}, 3), 0, Infinity, true, 3, 2);
				var m_5 = function (state_3, cont_3) {
					return cont_3(state_3);
				};
				var cont_d_2 = function (state_y_2) {
					return m_5(state_y_2, cont_4);
				};
				return m_4(state_4, cont_d_2);
			};
			var cont_d_3 = function (state_y_3) {
				return m_7(state_y_3, cont_5);
			};
			return m_6(state_5, cont_d_3);
		}, 2);
		var m_15 = getGroupMatcher(function (state_9, cont_9) {
			var m_12 = characterSetMatcher({
				'positive': { '34': true },
				'negative': null
			}, false, {
				'flags': {
					'm': false,
					'i': false,
					'g': false
				},
				'parens': {
					'parenIndex': 4,
					'parenCount': 2
				},
				'nCaps': 8
			}, {
				source: '"',
				start: '54',
				end: '56'
			});
			var m_13 = function (state_8, cont_8) {
				var m_10 = repeatMatcher(characterSetMatcher({
					'positive': {},
					'negative': {
						'10': true,
						'13': true,
						'8232': true,
						'8233': true
					}
				}, false, {
					'flags': {
						'm': false,
						'i': false,
						'g': false
					},
					'parens': {
						'parenIndex': 4,
						'parenCount': 2
					},
					'nCaps': 8
				}, {
					source: '.',
					start: '56',
					end: '57'
				}), 1, Infinity, true, 4, 2);
				var m_11 = function (state_7, cont_7) {
					var m_8 = characterSetMatcher({
						'positive': { '34': true },
						'negative': null
					}, false, {
						'flags': {
							'm': false,
							'i': false,
							'g': false
						},
						'parens': {
							'parenIndex': 4,
							'parenCount': 2
						},
						'nCaps': 8
					}, {
						source: '"',
						start: '58',
						end: '60'
					});
					var m_9 = function (state_6, cont_6) {
						return cont_6(state_6);
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
			};
			var cont_d_6 = function (state_y_6) {
				return m_13(state_y_6, cont_9);
			};
			return m_12(state_9, cont_d_6);
		}, 4);
		var r_0 = m_14(state_10, cont_10);
		if (!isFailure(r_0)) {
			return r_0;
		} else {
			return m_15(state_10, cont_10);
		}
	}, 1);
	var m_49 = function (state_30, cont_30) {
		var m_46 = characterSetMatcher({
			'positive': { '64': true },
			'negative': null
		}, false, {
			'flags': {
				'm': false,
				'i': false,
				'g': false
			},
			'parens': {
				'parenIndex': 4,
				'parenCount': 0
			},
			'nCaps': 8
		}, {
			source: '@',
			start: '62',
			end: '63'
		});
		var m_47 = function (state_29, cont_29) {
			var m_44 = getGroupMatcher(function (state_27, cont_27) {
				var m_42 = getGroupMatcher(function (state_20, cont_20) {
					var m_32 = characterSetMatcher({
						'positive': { '91': true },
						'negative': null
					}, false, {
						'flags': {
							'm': false,
							'i': false,
							'g': false
						},
						'parens': {
							'parenIndex': 6,
							'parenCount': 2
						},
						'nCaps': 8
					}, {
						source: '[',
						start: '65',
						end: '67'
					});
					var m_33 = function (state_19, cont_19) {
						var m_30 = repeatMatcher(characterSetMatcher({
							'positive': {
								'48': true,
								'49': true,
								'50': true,
								'51': true,
								'52': true,
								'53': true,
								'54': true,
								'55': true,
								'56': true,
								'57': true
							},
							'negative': null
						}, false, {
							'flags': {
								'm': false,
								'i': false,
								'g': false
							},
							'parens': {
								'parenIndex': 6,
								'parenCount': 2
							},
							'nCaps': 8
						}, {
							source: '[0-9]',
							start: '67',
							end: '72'
						}), 1, 3, true, 6, 2);
						var m_31 = function (state_18, cont_18) {
							var m_28 = characterSetMatcher({
								'positive': { '46': true },
								'negative': null
							}, false, {
								'flags': {
									'm': false,
									'i': false,
									'g': false
								},
								'parens': {
									'parenIndex': 6,
									'parenCount': 2
								},
								'nCaps': 8
							}, {
								source: '.',
								start: '77',
								end: '79'
							});
							var m_29 = function (state_17, cont_17) {
								var m_26 = repeatMatcher(characterSetMatcher({
									'positive': {
										'48': true,
										'49': true,
										'50': true,
										'51': true,
										'52': true,
										'53': true,
										'54': true,
										'55': true,
										'56': true,
										'57': true
									},
									'negative': null
								}, false, {
									'flags': {
										'm': false,
										'i': false,
										'g': false
									},
									'parens': {
										'parenIndex': 6,
										'parenCount': 2
									},
									'nCaps': 8
								}, {
									source: '[0-9]',
									start: '79',
									end: '84'
								}), 1, 3, true, 6, 2);
								var m_27 = function (state_16, cont_16) {
									var m_24 = characterSetMatcher({
										'positive': { '46': true },
										'negative': null
									}, false, {
										'flags': {
											'm': false,
											'i': false,
											'g': false
										},
										'parens': {
											'parenIndex': 6,
											'parenCount': 2
										},
										'nCaps': 8
									}, {
										source: '.',
										start: '89',
										end: '91'
									});
									var m_25 = function (state_15, cont_15) {
										var m_22 = repeatMatcher(characterSetMatcher({
											'positive': {
												'48': true,
												'49': true,
												'50': true,
												'51': true,
												'52': true,
												'53': true,
												'54': true,
												'55': true,
												'56': true,
												'57': true
											},
											'negative': null
										}, false, {
											'flags': {
												'm': false,
												'i': false,
												'g': false
											},
											'parens': {
												'parenIndex': 6,
												'parenCount': 2
											},
											'nCaps': 8
										}, {
											source: '[0-9]',
											start: '91',
											end: '96'
										}), 1, 3, true, 6, 2);
										var m_23 = function (state_14, cont_14) {
											var m_20 = characterSetMatcher({
												'positive': { '46': true },
												'negative': null
											}, false, {
												'flags': {
													'm': false,
													'i': false,
													'g': false
												},
												'parens': {
													'parenIndex': 6,
													'parenCount': 2
												},
												'nCaps': 8
											}, {
												source: '.',
												start: '101',
												end: '103'
											});
											var m_21 = function (state_13, cont_13) {
												var m_18 = repeatMatcher(characterSetMatcher({
													'positive': {
														'48': true,
														'49': true,
														'50': true,
														'51': true,
														'52': true,
														'53': true,
														'54': true,
														'55': true,
														'56': true,
														'57': true
													},
													'negative': null
												}, false, {
													'flags': {
														'm': false,
														'i': false,
														'g': false
													},
													'parens': {
														'parenIndex': 6,
														'parenCount': 2
													},
													'nCaps': 8
												}, {
													source: '[0-9]',
													start: '103',
													end: '108'
												}), 1, 3, true, 6, 2);
												var m_19 = function (state_12, cont_12) {
													var m_16 = characterSetMatcher({
														'positive': { '93': true },
														'negative': null
													}, false, {
														'flags': {
															'm': false,
															'i': false,
															'g': false
														},
														'parens': {
															'parenIndex': 6,
															'parenCount': 2
														},
														'nCaps': 8
													}, {
														source: ']',
														start: '113',
														end: '115'
													});
													var m_17 = function (state_11, cont_11) {
														return cont_11(state_11);
													};
													var cont_d_7 = function (state_y_7) {
														return m_17(state_y_7, cont_12);
													};
													return m_16(state_12, cont_d_7);
												};
												var cont_d_8 = function (state_y_8) {
													return m_19(state_y_8, cont_13);
												};
												return m_18(state_13, cont_d_8);
											};
											var cont_d_9 = function (state_y_9) {
												return m_21(state_y_9, cont_14);
											};
											return m_20(state_14, cont_d_9);
										};
										var cont_d_10 = function (state_y_10) {
											return m_23(state_y_10, cont_15);
										};
										return m_22(state_15, cont_d_10);
									};
									var cont_d_11 = function (state_y_11) {
										return m_25(state_y_11, cont_16);
									};
									return m_24(state_16, cont_d_11);
								};
								var cont_d_12 = function (state_y_12) {
									return m_27(state_y_12, cont_17);
								};
								return m_26(state_17, cont_d_12);
							};
							var cont_d_13 = function (state_y_13) {
								return m_29(state_y_13, cont_18);
							};
							return m_28(state_18, cont_d_13);
						};
						var cont_d_14 = function (state_y_14) {
							return m_31(state_y_14, cont_19);
						};
						return m_30(state_19, cont_d_14);
					};
					var cont_d_15 = function (state_y_15) {
						return m_33(state_y_15, cont_20);
					};
					return m_32(state_20, cont_d_15);
				}, 6);
				var m_43 = getGroupMatcher(function (state_26, cont_26) {
					var m_40 = repeatMatcher(getGroupMatcher(function (state_23, cont_23) {
						var m_36 = repeatMatcher(characterSetMatcher({
							'positive': {
								'45': true,
								'48': true,
								'49': true,
								'50': true,
								'51': true,
								'52': true,
								'53': true,
								'54': true,
								'55': true,
								'56': true,
								'57': true,
								'65': true,
								'66': true,
								'67': true,
								'68': true,
								'69': true,
								'70': true,
								'71': true,
								'72': true,
								'73': true,
								'74': true,
								'75': true,
								'76': true,
								'77': true,
								'78': true,
								'79': true,
								'80': true,
								'81': true,
								'82': true,
								'83': true,
								'84': true,
								'85': true,
								'86': true,
								'87': true,
								'88': true,
								'89': true,
								'90': true,
								'97': true,
								'98': true,
								'99': true,
								'100': true,
								'101': true,
								'102': true,
								'103': true,
								'104': true,
								'105': true,
								'106': true,
								'107': true,
								'108': true,
								'109': true,
								'110': true,
								'111': true,
								'112': true,
								'113': true,
								'114': true,
								'115': true,
								'116': true,
								'117': true,
								'118': true,
								'119': true,
								'120': true,
								'121': true,
								'122': true
							},
							'negative': null
						}, false, {
							'flags': {
								'm': false,
								'i': false,
								'g': false
							},
							'parens': {
								'parenIndex': 8,
								'parenCount': 3
							},
							'nCaps': 8
						}, {
							source: '[a-zA-Z-0-9]',
							start: '119',
							end: '132'
						}), 1, Infinity, true, 8, 3);
						var m_37 = function (state_22, cont_22) {
							var m_34 = characterSetMatcher({
								'positive': { '46': true },
								'negative': null
							}, false, {
								'flags': {
									'm': false,
									'i': false,
									'g': false
								},
								'parens': {
									'parenIndex': 8,
									'parenCount': 3
								},
								'nCaps': 8
							}, {
								source: '.',
								start: '133',
								end: '135'
							});
							var m_35 = function (state_21, cont_21) {
								return cont_21(state_21);
							};
							var cont_d_16 = function (state_y_16) {
								return m_35(state_y_16, cont_22);
							};
							return m_34(state_22, cont_d_16);
						};
						var cont_d_17 = function (state_y_17) {
							return m_37(state_y_17, cont_23);
						};
						return m_36(state_23, cont_d_17);
					}, 8), 1, Infinity, true, 8, 2);
					var m_41 = function (state_25, cont_25) {
						var m_38 = repeatMatcher(characterSetMatcher({
							'positive': {
								'65': true,
								'66': true,
								'67': true,
								'68': true,
								'69': true,
								'70': true,
								'71': true,
								'72': true,
								'73': true,
								'74': true,
								'75': true,
								'76': true,
								'77': true,
								'78': true,
								'79': true,
								'80': true,
								'81': true,
								'82': true,
								'83': true,
								'84': true,
								'85': true,
								'86': true,
								'87': true,
								'88': true,
								'89': true,
								'90': true,
								'97': true,
								'98': true,
								'99': true,
								'100': true,
								'101': true,
								'102': true,
								'103': true,
								'104': true,
								'105': true,
								'106': true,
								'107': true,
								'108': true,
								'109': true,
								'110': true,
								'111': true,
								'112': true,
								'113': true,
								'114': true,
								'115': true,
								'116': true,
								'117': true,
								'118': true,
								'119': true,
								'120': true,
								'121': true,
								'122': true
							},
							'negative': null
						}, false, {
							'flags': {
								'm': false,
								'i': false,
								'g': false
							},
							'parens': {
								'parenIndex': 8,
								'parenCount': 2
							},
							'nCaps': 8
						}, {
							source: '[a-zA-Z]',
							start: '137',
							end: '145'
						}), 2, Infinity, true, 8, 2);
						var m_39 = function (state_24, cont_24) {
							return cont_24(state_24);
						};
						var cont_d_18 = function (state_y_18) {
							return m_39(state_y_18, cont_25);
						};
						return m_38(state_25, cont_d_18);
					};
					var cont_d_19 = function (state_y_19) {
						return m_41(state_y_19, cont_26);
					};
					return m_40(state_26, cont_d_19);
				}, 7);
				var r_1 = m_42(state_27, cont_27);
				if (!isFailure(r_1)) {
					return r_1;
				} else {
					return m_43(state_27, cont_27);
				}
			}, 5);
			var m_45 = function (state_28, cont_28) {
				return cont_28(state_28);
			};
			var cont_d_20 = function (state_y_20) {
				return m_45(state_y_20, cont_29);
			};
			return m_44(state_29, cont_d_20);
		};
		var cont_d_21 = function (state_y_21) {
			return m_47(state_y_21, cont_30);
		};
		return m_46(state_30, cont_d_21);
	};
	var cont_d_22 = function (state_y_22) {
		return m_49(state_y_22, cont_31);
	};
	return m_48(state_31, cont_d_22);
}, 9, '(([^<>()[\\]\\\\.,;:\\s@\\"]*(\\.[^<>()[\\]\\\\.,;:\\s@\\"])*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))', {
	'flags': {
		'm': false,
		'i': false,
		'g': false
	},
	'parens': {
		'parenIndex': 8,
		'parenCount': 0
	},
	'nCaps': 8
});
console.log(b.exec('luis.ab@hotmail.com'));