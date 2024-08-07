let dupArray = [1,1,2,3,4,5,5,6,7,8,9,9,1];

let remDupArray = [...new Set(dupArray)];

console.log(remDupArray);