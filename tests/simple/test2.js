var x = /bab/; 
var ret = x.exec("cbab"); 
if ((ret === null)) { 
  console.log ("Test Failed with null")
} else { 
  if ((ret.index !== 1)) {
    console.log("Test Failed with index: " + ret.index); 
  } else { 
    console.log ("Test Passed")
  }
}