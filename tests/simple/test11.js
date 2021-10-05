var x   = /!\[[\S\s]*\]\([\S\s]*\)/; 
var ret = x.exec("![blah](bleh )"); 
if (ret === null) { 
  console.log ("Test Failed")
  process.exit(1)
} else { 
  if ((ret.index !== 0)) {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  } 
  if (ret.index === 0) {
    console.log ("Test Passed")
    process.exit(0)
  } else {
    console.log("Test Failed with index: " + ret.index); 
    process.exit(1)
  }
}

