// Exercise 5

// class Student {

//     name!: string;
//     group!: string;

//     constructor( name: string, group: string ) {
//         this.name = name;
//         this.group = group;
//     };
// };

// Exercise 6

class wideStudent {

    name!: string;
    rollNumber: number | undefined;

    constructor ( name: string, rollNumber?: number ) {

        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        };

        this.name = name;
    };
};

// Exercise 7

// class Shape {

//     constructor( public color: string = color ) {}

// };

// class Circle extends Shape {
//     radius: number;
//     constructor( radius:number, color: string ){
//         super(color)
//         this.radius = radius;
//     };
// };

// Exercise 8

 class Student {

    age: number

    constructor(
        public name: string = name,
        age: number
    ) {
        this.age = age < 0 ? 0 : age; 
    };
 };

// Inheritance

// Exercise 9

class Animal {
    constructor(public name: string = name, public species: string) {};
};

class Tiger extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    };

    roar() {
        console.log('The tiger is roaring!')
    };
};

// Exercise 10

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

class Employee extends Person {
     constructor(
        name: string,
        age: number,
        public employeeId: number = employeeId
    ) {
        super(name, age);
     };
};

// Exercise 11

class Shape {

    constructor(public color: string = color ) {};

    draw() {
        console.log(`The ${this.color} shape is being drawn!`);
    };
};

class Circle extends Shape {
    draw() {
      console.log(`The ${this.color} circle is being drawn!`);  
    };
};

// Exercise 12

class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model:string){
        this.make = make;
        this.model = model;
    };
};

class Car extends Vehicle {
    constructor(make: string, model: string) { super(make, model)};
};

class SportsCar extends Car {
    constructor(make: string, model: string){super(make, model)};
};

const luisBalan = new wideStudent('Luis', 33);
console.log(luisBalan.name);
console.log(luisBalan.rollNumber);

const undefiedAgeStudent = new wideStudent('Luis');
console.log(undefiedAgeStudent.name);
console.log(undefiedAgeStudent.rollNumber);

// const redShape = new Shape('red');
// console.log('testing shape class: ',  redShape.color);

// const redCircle = new Circle(2, 'red');
// console.log(redCircle.color);
// console.log(redCircle.radius)

const RStudent = new Student('Richie', 10);
console.log(RStudent.name, RStudent.age);

const balan = new Tiger('balan', 'mexicano');
console.log(balan.name);
console.log(balan.species);
console.log(balan.roar());

const LuisBalan = new Employee('Luis Balan', 33, 190546);
console.log(LuisBalan.age, LuisBalan.name, LuisBalan.employeeId)

const redCircle1 = new Circle('blue');
console.log(redCircle1.color, redCircle1.draw());


const trailer = new Vehicle('Freighliner', 'Int');
const Aveo = new Vehicle('Chevrolet', 'Aveo');
const Porsche = new Vehicle('Porsche', 'Carrera GT');

console.log(trailer.make, trailer.model);
console.log(Aveo.make, Aveo.model);
console.log(Porsche.make, Porsche.model);

