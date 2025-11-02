/*
### 2. Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
*/

const location = ['malaisia', 'kanada', 'bankok'];

// Adding new Locaiton 
location.push('kasmir');
location.push('surprice-1');
location.push('surprice-2');

console.log(location);

// removing last location
location.pop();
console.log(location);
