var x   = /A\sB/; 
var ret = x.exec("A B"); 
console.log(`ret:\n${JSON.stringify(ret)}`);
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 0)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } else {
    var match = ret[0]; 
    if (match !== "A B") { 
      console.log("Test Failed with match: " + match); 
      process.exit(1)
    } else { 
      console.log ("Test Passed")
      process.exit(0)
    }
  } 
}