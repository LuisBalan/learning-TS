function printOperations(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('Both arguments must be numbers!');
    }

    console.log(a + b, a / b);
}

printOperations(6, 6);

function exclaim(name, count){
    for(let i = 0; i < count; i += 1){
        console.log(`${name}!`);
    }
}

exclaim('Muriel', 6);