console.log("Hello, world!");
//Type Inferences
var aged = true;
var realAge = 0;
if (aged) {
    realAge = 4;
}
var dogAge = realAge * 7;
console.log(dogAge + " years");
//Type Shapes
var firstName = "muriel!";
console.log(firstName.toUpperCase());
console.log(firstName.length);
//Any
/*
We can declare a variable without initialize. TS will recognize it as any-type variable */
var guess;
guess = "color";
console.log(guess);
guess = 10;
console.log(guess);
//Variable type annotations
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = '71677623223';
}
console.log(phoneNumber);
