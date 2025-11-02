const phone = [
    {id: 1, brand: 'Apple iPhone 12', price: 999},
    {id: 2, brand: 'Samsung Galaxy S21', price: 799},
    {id: 3, brand: 'Google Pixel 5', price: 699},
    {id: 4, brand: 'OnePlus 8T', price: 749},
    {id: 5, brand: 'apple Dell Inspiron Laptop', price: 1800}
];

const search = 'Apple';
for(const items of phone){
    console.log(items.brand.toLowerCase().includes(search.toLowerCase()));
}