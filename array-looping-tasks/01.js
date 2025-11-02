const num = [1,2,4,5,6];

// reverse = num.reverse();
// console.log( reverse);`
  
const arr_rev = [];

for(let i = 0; i<num.length; i++){
    arr_rev.unshift(num[i]);
}

arr_rev.push(33);
console.log(arr_rev);