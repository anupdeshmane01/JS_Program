readline = require('readline-sync');

const num = readline.question('Enter any number: ')

let output = num.toString().split('').reverse().join('')

console.log('Reverse of givem number is '+ output)