// /**
//  * Checks if a number is a palindrome.
//  * @param {number} num - The number to check.
//  * @returns {boolean} - True if the number is a palindrome, false otherwise.
//  */
function isPalindromeNumber(num) {
    // Convert the number to a string
    
    const str = num.toString();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
  }
  // Example usage
const number = 12321;
console.log(`${number} is a palindrome: ${isPalindromeNumber(number)}`); // true

const anotherNumber = 1234545;
console.log(`${anotherNumber} is a palindrome: ${isPalindromeNumber(anotherNumber)}`); 