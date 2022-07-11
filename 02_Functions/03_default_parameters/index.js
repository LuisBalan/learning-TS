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
