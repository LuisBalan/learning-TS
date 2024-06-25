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