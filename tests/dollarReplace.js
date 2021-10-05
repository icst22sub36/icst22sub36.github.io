import { dollarNewString } from '../src/runtime/StringLib'

var string = "abcde"
var res = /(b)/g.exec(string)

var s = "$1,$2"
var re = /(\$(\d))/g
var e = re.exec(s)

console.log(`\nTest 0: \n${dollarNewString("abc", res, string)}`)
console.log(`\nTest 1: \n${dollarNewString("x$$y", res, string)}`)
console.log(`\nTest 2: \n${dollarNewString("x$&y", res, string)}`)
console.log(`\nTest 3: \n${dollarNewString("x$'y", res, string)}`)
console.log(`\nTest 4: \n${dollarNewString("x$`y", res, string)}`)
console.log(`\nTest 5: \n${dollarNewString("x$1y", res, string)}`)

console.log(`\nTest 6: \n${dollarNewString("x$1y$`z", res, string)}`)


console.log(`\nSpec test: \n${dollarNewString("$$1-$1$2", e, s)}`)
var e = re.exec(s)
console.log(`\nSpec test: \n${dollarNewString("$$1-$1$2", e, s)}`)
