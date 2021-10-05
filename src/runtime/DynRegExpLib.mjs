import { RegExp } from './RegExpLib'
import { internalToString, ast2str } from './utils'
import { topCompile } from '../RegExpCompiler/RegExpCompiler';
import { getNegativeLookAheadAssertionTester, getLookAheadAssertionTester, getBigBAssertionTester, getBabyBAssertionTester, getDollarAssertionTester, getHatAssertionTester, repeatMatcher, backReferenceMatcher, characterSetMatcher, copyCaptures, getGroupMatcher } from './RegExpRuntime'

var N = (function () {
  var native = true; 
  
  function getNative () { return native }

  function turnOnNative () { 
    console.log("turning on native")
    native = true 
  }

  function turnOffNative () { 
    console.log("turning off native")
    native = false 
  }
  
  return { getNative, turnOnNative, turnOffNative }

})(); 


function dynamicRegExpCreation(pattern, flags) { 
  turnOnNative(); 
  if (pattern instanceof RegExp) {
    if (flags === undefined) {
      return pattern;
    } else { 
      pattern = pattern.source
      flags   = internalToString(flags); 
      //throw new TypeError ("When the pattern is a regular expression, flags must be undefined");
    }
  } else {
    flags   = (flags === undefined) ? "" : internalToString(flags); 
    pattern = (pattern === undefined) ? "" : internalToString(pattern);
  }
  
  console.log(`Inside dynamicRegExpCreation with ${pattern} and ${flags}`);
  pattern = pattern.replace(/([^\\])\//g, "$1\\\/");
  var ret = topCompile("/"+pattern+"/"+flags); 
  // Create a new regular expression   
  var matcher_str = "(" + ast2str(ret.matcher) + ")"; 
  turnOffNative(); 
  return new RegExp (matcher_str, { nCaps: ret.nCaps, pattern: pattern, flags: ret.flags}); 
}

var turnOnNative  = N.turnOnNative; 
var turnOffNative = N.turnOffNative; 
var getNative     = N.getNative; 

export { dynamicRegExpCreation, turnOffNative, turnOnNative, getNative  }