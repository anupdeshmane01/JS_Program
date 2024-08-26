const readline = require('readline-sync')

num1 = parseInt(readline.question('Enter Any nuber '))
num2 = parseInt(readline.question('Enter Any 2nd nuber '))
 
add =  num1 + num2;
sub = num1 - num2;
mult = num1 * num2;
div = num1 / num2;
console.log('Addition of given two number is = ', add)
console.log('substraction of given two number is = ', sub)
console.log('multiplication of given two number is = ', mult)
console.log('Division of given two number is = ', div)