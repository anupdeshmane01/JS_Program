const readLine = require('readline-sync')

const num = parseFloat(readLine.question("Enter any number"))

if(num % 2 ==0){
    console.log("Even")
}else{
    console.log("Odd")
}