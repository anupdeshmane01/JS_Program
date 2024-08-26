const readline = require('readline-sync')

const str = readline.question('Enter value: ')

const output = str.split('').reverse().join('')
console.log(output)
if(output == str){
    console.log('Value is palidrom')

}else{
    console.log("value is not palidrom")
}

