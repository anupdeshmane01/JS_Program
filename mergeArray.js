let arr = [1, 5, 2, 3, 3, 3, 4, 5]
let arr2 = [1, 4, 5, 5, 4, 6, 6, 7]

let arr3 = [...arr, ...arr2]

console.log(arr3)


let output = [...new Set(arr3)]

output.sort((a, b) => a > b);

// console.log(output)