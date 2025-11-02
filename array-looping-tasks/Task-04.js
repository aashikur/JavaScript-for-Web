/*
### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`

*/

const statement = 'I am a hard working person';
const arr = statement.split(' ');

const arr2 = [];

for(let i = 0; i< arr.length; i++){
    arr2.unshift(arr[i]);
}

const arr3 = arr2.join(' ');
console.log(arr3);