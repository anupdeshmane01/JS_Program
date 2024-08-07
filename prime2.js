const readline = require ('readline-sync')

num = parseFloat(readline.question('Enter number between 1 to 100- '))

if (num % 2=== 0){
console.log("number is prime")
}else{
    console.log("number is not prime")
}