readline = require('readline-sync')

let yearOfBirth = parseFloat(readline.question('Enter Your Year of birth: '));
let monthOfBirth = parseFloat(readline.question('Enter Your month of birth: '));
let dayOfBirth = parseFloat(readline.question('Enter Your day of birth: '));

let output = 2024 - yearOfBirth;



console.log('Your age as per current year is: ', output + "year")