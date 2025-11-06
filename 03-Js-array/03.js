// Adding Extra Elemnt by array
const num = [1,2,3,4];
console.log(num);

num.push(99);
num.push(88);
console.log(num);


// Remove Last element - Pop

num.pop();
console.log(num);


// Removing All Element - return null
const name = ['Ashik','ovi']
name.pop();
console.log(name);

name.pop();
name.pop();
name.pop();
console.log(name);


//checking if array is empty  
if(name.length === 0)
    console.log("Empty");