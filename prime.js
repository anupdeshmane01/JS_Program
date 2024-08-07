readline = require('readline-sync');

const value = parseFloat(readline.question('Enter any number '))
const output = value
if(value % 2!=1){
    console.log(`${value} Given number is prime`)
}else if(value % 2===0){
    console.log(`${value} Given number is even`)
}else{
    console.log('Number is odd')
}