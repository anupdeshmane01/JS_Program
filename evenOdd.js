readline = require('readline-sync')

const value = parseFloat(readline.question('Please enter any number: '))

if ((value % 2) == 0) {

    console.log('number is even')

} else {
    console.log('number is odd')
}

