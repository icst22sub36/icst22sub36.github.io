var x   = /\u0001/; 
var ret = x.exec("A\u0001"); 
console.log(`ret:\n${JSON.stringify(ret)}`);
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 1)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else {
    var match = ret[0]; 
    if (match !== "\u0001") { 
      console.log("Test Failed with match: " + match); 
      process.exit(1)
    } else { 
      console.log ("Test Passed")
      process.exit(0)
    }
  } 
}