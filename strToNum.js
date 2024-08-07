let str = '33mjhhjf73d666fkgjhjhg888';

let num1 = [...new Set(str)]

let num = num1.filter((char =>'0123456789'.includes(char)))


let arr = num.map(Number)

console.log(arr)

const sum = arr.reduce((acc,num)=> acc+num)

console.log(sum)


