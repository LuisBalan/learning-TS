// Exercise 1

let result: string | number | boolean;

function getType(result: string | number | boolean ) {
    if (typeof result === 'string') {
        console.log(`Type: string`);
    } else if (typeof result === 'number') {
        console.log(`Type: number`);
    } else if (typeof result === 'boolean') {
        console.log(`Type: boolean`);
    } else {
        console.log('Unknown type');
    };
};

// Exercise 2

function combine ( firstParam: number | boolean , secondParam: number | boolean): number | boolean {
    if (typeof firstParam === 'number' && typeof secondParam === 'number') {
        return firstParam + secondParam;
    } else if ( typeof firstParam === 'boolean' && typeof secondParam === 'boolean') {
        return firstParam ||  secondParam;
    } else if (typeof firstParam === 'boolean' && typeof secondParam === 'number') {
        return secondParam;
    } else if (typeof firstParam === 'number' && typeof secondParam === 'boolean') {
        return firstParam;
    } else {
        return 0;
    };
};

// Exercise 3

interface Car {
    make: string,
    model: string
};

interface Bus extends Car {
    payloadCapacity: number
};

type Vehicle = Car | Bus;

const bus: Bus = {make: 'Volvo', model: 'XC60', payloadCapacity: 30};
const march: Vehicle = {make: 'Nissan', model: 'March2020', payloadCapacity: 5};
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

function printType(arg: number | boolean): string {
    return typeof arg;
};

console.log(printType(8));
console.log(printType(false));
console.log(printType(true));

// Exercise 5
function isOdd(arg: number ): boolean {
    let isOddNotification!: boolean;
    if ((typeof arg === 'number' && arg%2 === 0) || typeof arg !== 'number') {
        // isOddNotification =  false;
        // return isOddNotification
        isOddNotification = false;
    } else if (typeof arg === 'number' && arg%2 !== 0) {
        // isOddNotification = true;
        // return isOddNotification
        isOddNotification = true;
    };

    return isOddNotification;
};

console.log(isOdd(4));
console.log(isOdd(123411));
console.log('ocho: ', isFinite(8))
console.log('infinity: ', isFinite(+Infinity));
console.log('-infinity: ', isFinite(-Infinity))
console.log('Nan: ', isFinite(NaN))

// Exercise 6

const mixedArray: (string | number | boolean)[]  = [1, 2, 3, 'one', 'two', 'three', true, false];

const numberArray: number[] = mixedArray.filter((item): item is number => typeof item === 'number');
const stringArray: string[] = mixedArray.filter((item): item is string => typeof item === 'string');
const booleanArray: boolean[] = mixedArray.filter((item): item is boolean => typeof item === 'boolean');
console.log('--- Type Assertions ---');
console.log('number array: ', numberArray);
console.log('string array: ', stringArray);
console.log('boolean array: ', booleanArray);

// Exercise 7

const stringVar: any = 'I am a string';
const castedVar: string = stringVar as string;
console.log(typeof stringVar);
console.log(typeof castedVar);

// Exercise 8

function getLength( arg: (string | string[])): number {
    if (typeof arg === 'string'){
        return (arg as string).length;
    } else {
        return (arg as string[]).map(item => item.length).reduce((accum, current) => accum + current , 0);
    }
};

const testString: string = 'abcdefghijklmn';
const stringsArryTest: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno'];
console.log('string length: ', getLength(testString));
console.log('strings array length: ', getLength(stringsArryTest));

// Exercise 9

function returnAValue<T>(arg: T): T {
    return arg;
};

console.log('--- Generics ---');
console.log(returnAValue('test string'));
console.log(returnAValue(['one', 'two', 'three']));
console.log(returnAValue(12345));
console.log(returnAValue(false && false));
console.log(returnAValue({1: 'one', 2: 'two'}));

// Exercise 10

function swapArray<T>(arg: T[], firstIndex: number, secondIndex: number) {
        if ((firstIndex >= 0 && firstIndex < arg.length) && (secondIndex >= 0 && secondIndex < arg.length)){
            const firstItem = arg[firstIndex];
            const secondItem = arg[secondIndex];
            arg.splice(firstIndex, 1, secondItem)
            arg.splice(secondIndex, 1, firstItem)

            return arg;
        } else {
            throw new Error('Invalid indices')
        };
};

console.log('--- Swap Array ---');
console.log(swapArray([1, 2, 3, 4, 5, 8, 7], 6, 2));
// console.log(swapArray([1, 2, 3, 4, 5], 1, 3));
console.log(swapArray(["one", "two", "three", "four", "five", "six"], 1000, 2000));

type Properties = 'propA' | 'propB';
type MyMappedType = {
    [P in Properties]: boolean;
};


type Transaction = {
    date: string,
    description: string,
    ammount: number,
    typeOfTransaction: string,
};

type Optional<T> = {
    [K in keyof T]?: T[K]
};

// const withdraw: Transaction = {
//     date: '11-02-2024',
//     description: 'For car sale',
//     ammount: 3000,
//     typeOfTransaction: 'withdraw'
// };

// type OptionalTransaction = Optional;

// const optionalWithdraw: OptionalTransaction = {

// }
