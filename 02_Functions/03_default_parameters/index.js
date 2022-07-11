function proclaim(status, repeat) {
    if (status === void 0) { status = "not ready..."; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm " + status);
    }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
function getRandomNumber() {
    return Math.random();
}
var myVar = getRandomNumber();
console.log(myVar);
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
;
makeFruitSalad('banana', 'pineapple');
