readline = require('readline-sync')

const value = parseFloat(readline.question('Enter any number: '))

console.log('Given number is', value)

let output = value*value;

console.log(`Square of given number ${value} is : `, output)




