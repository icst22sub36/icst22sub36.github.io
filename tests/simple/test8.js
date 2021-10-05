var x   = /^A/m; 
var ret = x.exec("aAaa\nA"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 5)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } 
  var match = ret[0]
  if (match === "A") {
    console.log ("Test Passed")
    process.exit(0)
  } else {
    console.log("Test Failed with match: " + match); 
    process.exit(1)
  }
}