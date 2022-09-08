function sum(num1: number, num2: number, showResult: boolean, phrase: string){
    console.log(typeof num1)
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw Error('Incorrect input!')
    // }

    const result = num1 + num2;
    console.log(typeof result);
    console.log(typeof phrase);
    let output = phrase + result;
    console.log(typeof output)
    if(showResult){
        console.log(output);
    }
    return result
}

let number1: number;
number1 = 5
const number2: number = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

const finalResult = sum(number1, number2, printResult, resultPhrase);
console.log(finalResult)