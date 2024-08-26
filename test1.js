for(i=0;i<=5;i++){
    for(j=i;j<=4;j++){
        process.stdout.write("*")
    }
    console.log()
}

let str = "56433ghtvn7898"
let out = [...new Set(str)]
let num = out.filter((r=>'0123456789'.includes(r)))
let num1= num.map(Number)
let sum = num1.reduce((a,b)=>a+b)

console.log(num1)
console.log(sum)