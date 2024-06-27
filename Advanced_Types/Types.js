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
console.log('--- Exercise 4---\n--- Type Guards ---');
// function printType(arg: number | boolean): void {
//     const typeOfArg: string = typeof arg;
//     switch(typeOfArg) {
//         case 'number':
//             console.log(`Type of ${arg}: number`);
//             break;
//         case 'boolean':
//             console.log(`Type of ${arg}: boolean`);
//             break;
//         default:
//             console.log('Neither number or boolean');
//     };
// };
function printType(arg) {
    return typeof arg;
}
;
console.log(printType(8));
console.log(printType(false));
console.log(printType(true));
// Exercise 5
function isOdd(arg) {
    var isOddNotification;
    if ((typeof arg === 'number' && arg % 2 === 0) || typeof arg !== 'number') {
        // isOddNotification =  false;
        // return isOddNotification
        isOddNotification = false;
    }
    else if (typeof arg === 'number' && arg % 2 !== 0) {
        // isOddNotification = true;
        // return isOddNotification
        isOddNotification = true;
    }
    ;
    return isOddNotification;
}
;
console.log(isOdd(4));
console.log(isOdd(123411));
console.log('ocho: ', isFinite(8));
console.log('infinity: ', isFinite(+Infinity));
console.log('-infinity: ', isFinite(-Infinity));
console.log('Nan: ', isFinite(NaN));
// Exercise 6
var mixedArray = [1, 2, 3, 'one', 'two', 'three', true, false];
var numberArray = mixedArray.filter(function (item) { return typeof item === 'number'; });
var stringArray = mixedArray.filter(function (item) { return typeof item === 'string'; });
var booleanArray = mixedArray.filter(function (item) { return typeof item === 'boolean'; });
console.log('--- Type Assertions ---');
console.log('number array: ', numberArray);
console.log('string array: ', stringArray);
console.log('boolean array: ', booleanArray);
// Exercise 7
var stringVar = 'I am a string';
var castedVar = stringVar;
console.log(typeof stringVar);
console.log(typeof castedVar);
// Exercise 8
function getLength(arg) {
    if (typeof arg === 'string') {
        return arg.length;
    }
    else {
        return arg.map(function (item) { return item.length; }).reduce(function (accum, current) { return accum + current; }, 0);
    }
}
;
var testString = 'abcdefghijklmn';
var stringsArryTest = ['abc', 'def', 'ghi', 'jkl', 'mno'];
console.log('string length: ', getLength(testString));
console.log('strings array length: ', getLength(stringsArryTest));
