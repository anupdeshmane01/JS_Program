const str = "5632145632585585465aewrhghjgahgas54556465453"

const act = str.replace(/[^a-z]/g,"")
console.log(act)
const str2 =  str.replace(/[^0-9]/g,"")
console.log(str2)

const num = str2.split('').map(Number)
console.log(num)

const num2 = [... new Set(num)]
console.log(num2)

const sum = num2.reduce((a,b)=> b+a)
console.log(sum)