var x   = /(\w\d)+ABC\1/; 
var ret = x.exec("ah2ABCh2a;dslfsad;fasdf"); 
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
    if (match !== "h2ABCh2") { 
      console.log("Test Failed with match: " + match); 
      process.exit(1)
    } else { 
      var cap1 = ret[1]; 
      if (cap1 !== "h2") { 
        console.log("Test Failed with wrong capture: " + cap1); 
        process.exit(1)
      } else {
        console.log ("Test Passed")
        process.exit(0)
      }
    }
  } 
}
