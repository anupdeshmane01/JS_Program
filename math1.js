const i = Math.floor((Math.random()*(9999 - 1000 +1 )+999))
console.log(i)

const char = "abcdefghijklmnopqrstuvwxyz";
const length = 10
let result = "";
for (let i = 0; i <= length; i++) {
  result += char.charAt(Math.floor(Math.random() * char.length));

}
console.log(result)
