const readLine = require('readline-sync')

let num1 = parseFloat(readLine.question('plz enter first num: '))
let num2 = parseFloat(readLine.question('plz enter 2nd num: '))

let add = (num1 + num2)
let sub = num1 - num2
let mul = num1 * num2
let div = num1 / num2


console.log(add)
console.log(sub)
console.log(mul)
console.log(div)