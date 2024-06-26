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

