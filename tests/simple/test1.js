var x = /bab/; 
if (x.exec("cd") !== null) { 
  console.log ("Test Failed")
} else { 
  console.log ("Test Passed")
}