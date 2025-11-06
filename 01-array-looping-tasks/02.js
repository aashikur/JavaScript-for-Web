// Sort
const num = [1, 2,4,6,10,0,23,5,3,2,6];

// Ascending -> small to big
// Descending -> Larger to small

num.sort(function(a,b){return a - b});
// [...num].sort(function(a,b){return a - b});
console.log(num);


num.sort(function(a,b){return b-a});
console.log(num);