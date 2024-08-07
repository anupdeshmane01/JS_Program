let arr = [1, 5, 2, 3, 3, 3, 4, 5, 1, 4, 5, 5, 4, 6, 6, 7]

let arr2= arr.sort((a,b)=> a + b)
arr2 = [... new Set(arr)]

console.log(arr2)
