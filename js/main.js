let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let sumbit = document.getElementById('submit');

console.log(title,price,taxes,ads,discount,total,count,category,sumbit)


//get total
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)- +discount.value
        total.innerHTML = result;
        total.style.background = "#040"
    }
}
// create product
//save local storage
//clear input
// read
//count
// delete
// update
// search
// clean data
