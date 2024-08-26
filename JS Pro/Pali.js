const readline = require("readline-sync");

const str = readline.question("Enter your name: ");
console.log(str);
const output = str.split("").reverse().join("");

if (output == str) {
  console.log("Given string is palidrome");
} else {
  console.log("Given string is not-palidrome");
}
