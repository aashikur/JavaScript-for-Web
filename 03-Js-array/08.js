// splice()
// The splice() method in JavaScript works as follows:

// The first parameter is the start index.
// The second parameter is the number of elements to remove.
// The remaining parameters are the elements to add at the start index.

const arr = [1,2,3,4,5,6,7,8,9];
const splices = arr.splice(2,2, 'a','b','c','d');

console.log(splices);
console.log(arr);

