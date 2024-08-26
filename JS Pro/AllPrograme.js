// console.log('Hello')    first programme to print Hello World



// ************** Addition of 2 number using key word & variable***********************

// let a = 20   // let is keyword and a is variable storing 20 value
// let b = 30
// let c = a+b
// console.log(c)





// ************** calculator programe user manually enter numbers*****************

// const readline = require('readline-sync')

// const num1 = parseFloat(readline.question('Enter First number: '))
// const num2 = parseFloat(readline.question('Enter Second number: '))

// const add = num1 +num2
// console.log('Addition of given two number is: ', add)

// const sub = num1 - num2
// console.log('Substraction of given two number is: ', sub)

// const mul = num1 * num2
// console.log('Multiplication of given two number is: ', mul)

// const div = num1 / num2
// console.log('Division of given two number is: ', div)

// const per = num1 % num2
// console.log('Percentage of given two number: ', per)




//***************************** Exam result ***************************

// const readline = require('readline-sync')

// const subject = {
// 'Marathi':parseFloat(readline.question('Enter Marathi subject mark: '))
// }
// const sub1 = parseFloat(readline.question('Enter Marathi subject mark: '))
// const sub2 = parseFloat(readline.question('Enter English subject mark: '))
// const sub3 = parseFloat(readline.question('Enter Hindi subject mark: '))
// const sub4 = parseFloat(readline.question('Enter Science subject mark: '))
// const sub5 = parseFloat(readline.question('Enter History subject mark: '))
// const sub6 = parseFloat(readline.question('Enter Math subject mark: '))

//                                                      // Check each subject mark and print if the student failed
// if (sub1 < 35) {
//     console.log('You failed in Marathi with a mark of:', sub1);
// }

// if (sub2 < 35) {
//     console.log('You failed in English with a mark of:', sub2);
// }

// if (sub3 < 35) {
//     console.log('You failed in Hindi with a mark of:', sub3);
// }

// if (sub4 < 35) {
//     console.log('You failed in Science with a mark of:', sub4);
// }

// if (sub5 < 35) {
//     console.log('You failed in History with a mark of:', sub5);
// }

// if (sub6 < 35) {
//     console.log('You failed in Math with a mark of:', sub6);
// }

// const totalmark = sub1+sub2+sub3+sub4+sub5+sub6
// console.log('Total Mark = ',totalmark)

// const per = (totalmark/600)*100
// console.log('Percentage of result : ', per)





//************************ even odd number ****************************

// const readLine = require('readline-sync')

// const  number = parseFloat(readLine.question('Enter any number: '))

// if (number % 2 == 0){
//     console.log('Given number is Even')
// }else{
//     console.log("Given number is Odd ")
// }




// ********************************* reverse string by given string **************************

const str = "Hello"
const output = str.split('').reverse().join('')
console.log(output)       


// ********************************* reverse string by user input **************************

const readline = require('readline-sync')

const str2 = parseFloat(readline.question('Enter any word minimum 5 character: '))
.toString()

const out = str2.toString().split('').reverse().join('')
console.log(out)
