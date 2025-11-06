// 

const mobile = {
    brand: 'pixel',
    price : 50000,
    color: 'black',
    isNew: true
}

// finding property in Object
 for (const prop in mobile){
    console.log(mobile[prop]);
 }

// deleting a property from the object
delete mobile.isNew;

console.log(mobile);