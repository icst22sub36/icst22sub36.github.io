var x   = new RegExp(); 
var y   = new RegExp(x)
var ret = x.exec("cxzbb"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 0)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else { 
    console.log ("Test Passed")
    process.exit(0)
  }
}