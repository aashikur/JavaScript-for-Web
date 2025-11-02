/*
### 4. Checking if it's an Array
**Instructions:**
1. Create different variables, each containing either an array or a non-array value.
2. Now use isArray to check if each variable is an array.
3. Print a message to the console indicating whether each variable is an array or not.

*/

// function that will Console the TEXT
function myAns(x) {let ans;if(x)  ans = "This is Array"; else  ans = "Not an Array"; console.log(ans);}


    const a = 34;
    const b = 'a';
    const c = "ashik";
    const d = [3, 4, 5];


    // Testing if isArray() or Not
    myAns(Array.isArray(a));
    myAns(Array.isArray(b));
    myAns(Array.isArray(c));
    myAns(Array.isArray(d));