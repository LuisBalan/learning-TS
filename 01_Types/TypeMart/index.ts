import products from './products';

const productName: String = 'shirt';
let shipping: Number;
let taxPercent: Number;
let taxTotal: Number;
let total: Number;
const shippingAddress: String = "609 Buenavista Street";

//let product;

const matchedProduct = products.filter((product) => {
    if(product.name === productName){
        return product
    }
});

let product = matchedProduct[0];

if(product.preOrder === 'true'){
    console.log("We will notify you when your product ships!")
};

if(Number(product.price) >= 25){
    shipping = 0;
    console.log('We\'ll provide free shipping for your product!')
}else{
    shipping = 5;
    console.log('We\'ll charge a cost of $5 for shipping!')
};

if(shippingAddress.match('New York')){
    taxPercent = 0.1;
}else{
    taxPercent = 0.05;
};

taxTotal = Number(product.price) * Number(taxPercent);
total = Number(product.price) + Number(taxTotal) + Number(shipping);
console.log(`Product: ${product.name}\nShipping Address: ${shippingAddress}\nPrice: ${product.price}\nTotal Tax: ${taxTotal}\nShipping: ${shipping}\nTotal: ${total}`);