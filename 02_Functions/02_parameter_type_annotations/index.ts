function triple(value: number){
    return Number(value) * 3;
};

function greetTripled(greeting: string, value: number){
    console.log(`${greeting}, ${triple(value)}!`)
};

greetTripled('Hiya', 5);