//var arr = /a(a)/.exec('aa')

var s1 = "bc"; 
var x = "12bc21".replace(s1, "BC"); 
if (x !== "12BC21") {
    throw new Error ("Doom and terror: " + x)
} 

var s2 = "bc"; 
var x = "12bc21".replace(s1, "BC$&"); 
if (x !== "12BCbc21") {
    throw new Error ("Doom and terror: " + x)
} 

var re1 = /bc/g; 
var x = "12bc21".replace(re1, "BC"); 
if (x !== "12BC21") {
    throw new Error ("Doom and terror: " + x)
} 

var re2 = /(b*)c/g; 
var x = "12bbbc21".replace(re2, "$1$1"); 
if (x !== "12bbbbbb21") {
    throw new Error ("Doom and terror: " + x)
} 

var re2 = /(b*)c/; 
var x = "12bbbc21".replace(re2, "$1$1"); 
if (x !== "12bbbbbb21") {
    throw new Error ("Doom and terror: " + x)
} 