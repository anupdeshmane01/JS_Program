// let arr = [1, 5, 2, 3, 3, 3, 4, 5, 1, 4, 5, 5, 4, 6, 6, 7];
// // let arr2= arr

// let arr2 = [... new Set(arr)].sort((a, b)=> a - b)
// console.log('Asc', arr2)

let arr = [1, 5, 2, 3, 3, 3, 4, 5, 1, 4, 5, 5, 4, 6, 6, 7];
let arrAsc = [...new Set(arr)].sort((a, b) => a - b);
console.log('Ascending:', arrAsc);

let arrDesc = [...new Set(arr)].sort((a, b) => b - a);
console.log('Descending:', arrDesc);


