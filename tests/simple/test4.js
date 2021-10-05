var x   = /(b|a)*b/; 
var ret = x.exec("cxzwbubba"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 4)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else { 
    console.log ("Test Passed")
    process.exit(0)
  }
}