// Exercise 1
var result;
function getType(result) {
    if (typeof result === 'string') {
        console.log("Type: string");
    }
    else if (typeof result === 'number') {
        console.log("Type: number");
    }
    else if (typeof result === 'boolean') {
        console.log("Type: boolean");
    }
    else {
        console.log('Unknown type');
    }
    ;
}
;
// Exercise 2
function combine(firstParam, secondParam) {
    if (typeof firstParam === 'number' && typeof secondParam === 'number') {
        return firstParam + secondParam;
    }
    else if (typeof firstParam === 'boolean' && typeof secondParam === 'boolean') {
        return firstParam || secondParam;
    }
    else if (typeof firstParam === 'boolean' && typeof secondParam === 'number') {
        return secondParam;
    }
    else if (typeof firstParam === 'number' && typeof secondParam === 'boolean') {
        return firstParam;
    }
    else {
        return 0;
    }
    ;
}
;
;
;
var bus = { make: 'Volvo', model: 'XC60', payloadCapacity: 30 };
var march = { make: 'Nissan', model: 'March2020', payloadCapacity: 5 };
console.log(bus);
console.log(march);
