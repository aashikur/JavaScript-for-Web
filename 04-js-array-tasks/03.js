/*
### 3. Checking Array Membership with ‘includes’

**Instructions:**
1. Create an array of books containing different book.
2. Use the includes method to check if the array contains a javascript book.
3. Print a message to the console indicating whether the element is present in the array or not.
*/

const books = ['php', 'html', 'javascript','tailwind'];

// check if 'javascript' and 'wordpress' book is available or not
console.log("Javascript : " + books.includes('javascript'));

// check if wordpress book 
    if(books.includes('wordpress'))
        console.log("Wordpress is Here.");
    else
        console.log("Wordpress is Not Here.");


