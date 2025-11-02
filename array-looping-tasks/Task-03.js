/*

### Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

**Input:**
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`
*/


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let newName = numbers.join("");
// console.log(newName);

let conCat = '';
for(const i of numbers){
    conCat += i;
}
console.log(conCat);