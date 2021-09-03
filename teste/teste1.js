var a = '5'
console.log(typeof a)
console.log(typeof Number(a))
var b = +(a)
console.log(typeof b)

var c = 2.33366666665
console.log(Number.isInteger(c))
var d = c.toFixed(0)
console.log(Number.isInteger(d))
var e = c.toString()
console.log(typeof e)
var f = c.toString(2)
console.log(f)