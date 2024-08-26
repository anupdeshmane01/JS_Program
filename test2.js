let str = "zz14yy55rrte15"
let out = [...new Set(str)]
let num = out.filter((char=>'0123456789'.includes(char)))
let num1 = num.map(Number)
let sum = num1.reduce((a,b)=>a+b)
console.log(num1)
console.log(sum)

if(sum===10){
    console.log("Archit")
}else{
    console.log('Arnav')
}