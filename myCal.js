readline = require ('readline-sync')

const num1 = parseFloat(readline.question('Enter first num: '))
const num2 = parseFloat(readline.question('Enter second num: '))

let add = num1 + num2;
let sub = num1- num2;
let mul = num1*num2;
let div = num1 / num2;

console.log(add)
console.log(sub)
console.log(mul)
console.log(div)