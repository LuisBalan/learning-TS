abstract class GeometricShape {

    constructor( public name: string, public lenghts: number[]){};

    abstract getArea(): number;

    abstract getPerimeter(): number;

};

class NewCircle extends GeometricShape {

    radius = this.lenghts[0];

    getArea(): number {
        return Math.PI * (this.radius**2);
    };

    getPerimeter(): number {
        return 2*Math.PI*this.radius; 
    }
    
};

class NewRectangle extends GeometricShape {
    width = this.lenghts[0];
    height = this.lenghts[1];

    getArea(): number {
        return this.width*this.height;
    }

    getPerimeter(): number {
        return 2*this.width + 2*this.height;
    }
};

class Triangle extends GeometricShape {
    firstSide = this.lenghts[0];
    secondSide = this.lenghts[1];
    thirdSide = this.lenghts[2];
    base = this.lenghts[0];
    height = this.lenghts[1];

    getArea(): number {
        return 0.5*this.base*this.height;
    }

    getPerimeter(): number {
        return this.lenghts.slice(0, 3).reduce((accum, value) => accum + value, 0)
    }
};

class GeneralStudent {
    private name: string;
    protected studentId: number;
    
    constructor(name: string, studentId: number){
        this.name = name;
        this.studentId = studentId;
    };

    displayInfo(): void {
        console.log(`The student ${this.name} has ID ${this.studentId}`)
    };
};

class HighSchoolStudent extends GeneralStudent {
    degree: number;

    constructor(name: string, studentId: number, degree: number){
        super(name, studentId);
        this.degree = degree;
    };

    displayInfo(): void {
        console.log(`The high school student has ID ${this.studentId}`);
    };
};

class BankAccount {

    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    };

    deposit(amount: number) {
        if ( amount > 0) {
            this.balance += amount;
            console.log(`Deposit: ${amount}\nNew Balance: ${this.balance}`)
        } else {
            console.log('Error: Invalid amount.')
        };
    };

    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}\nNew Balance: ${this.balance}`);
        } else {
            console.log('Error: Invalid amount.')
        }
    };
};

class Car {
    protected make: string;
    protected model: string;

    constructor(make: string, model: string){
        this.make = make;
        this.model = model;
    };

    getCarInfo(): string {
        return `Make: ${this.make}\nModel: ${this.model}`
    };

};

class Porsche extends Car {};
class Nissan extends Car {
    getCarInfo(): string {
        return `This Nissan car information:\nMake: ${this.make}\nModel: ${this.model}`
    }
};

class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    };

    introduce(): string{
        return `Hello I'm ${this.name} and I'm ${this.age} years old`
    };
};

class Dog extends Animal{
    introduce(): string {
        return `Hello I'm the dog ${this.name}`
    }
};

const blueCircle = new NewCircle('blue circle', [1]);
console.log(blueCircle.getArea());
console.log(blueCircle.getPerimeter());
console.log('----- rectangle -----');
const yellowRectangle = new NewRectangle('yellow rectangle', [10, 20]);
console.log(yellowRectangle.getArea());
console.log(yellowRectangle.getPerimeter());
console.log('---- triangle ----');
const greenTriangle = new Triangle('green triangle', [3, 4, 5]);
console.log(greenTriangle.name);
console.log(greenTriangle.getArea());
console.log(greenTriangle.getPerimeter())
console.log('----- Access Modifiers -----');
const alejandra = new GeneralStudent('ale', 161815);
const luis = new HighSchoolStudent('luis', 123123, 6);
// console.log(luis.name);
console.log(luis.displayInfo());
console.log(alejandra.displayInfo());
console.log('---- Bank Account ----');
const basicAccount = new BankAccount('102345');
basicAccount.deposit(500);
console.log('---- Cars ----');
const CarreraGT = new Porsche('Porsche', 'Carrera GT');
console.log(CarreraGT.getCarInfo());
const versa = new Nissan('Nissan', 'Versa');
console.log(versa.getCarInfo());
console.log('---- Animal Class ----');
const fido = new Dog('Fido', 3);
console.log(fido.introduce());