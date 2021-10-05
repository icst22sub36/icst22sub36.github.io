var x = "abc" 
var y   = new RegExp(x)
var ret = y.exec("cxabc"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 2)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else { 
    console.log ("Test Passed")
    process.exit(0)
  }
}