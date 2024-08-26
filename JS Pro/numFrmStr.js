let a = "aabbccddegge112233445675"
let num2 = a.replace(/[^0-9]/g,"")
console.log(num2)
let num4 = num2.split('').map(Number)
console.log(num4)
let num3 = [... new Set(num4)]
console.log(num3)

let sum = num3.reduce((a,b)=>a+b,0)
console.log(sum)