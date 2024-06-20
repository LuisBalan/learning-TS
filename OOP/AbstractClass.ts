abstract class AbstractPerson {

    name: string;

    constructor(name: string) {
        this.name = name;
    };

    display(): void {
        console.log(this.name);
    };

    abstract find(string): AbstractPerson;

};

class newEmployee extends AbstractPerson {
    empCode: number;

    constructor(name: string, code: number){
        super(name);
        this.empCode = code;
    };

    find(name:string): AbstractPerson {
        return new newEmployee(name, 1);
    };
};

abstract class AbstractShape {

    color: string;

    constructor(color: string) { this.color = color};

    abstract getPerimeter(): number;

};

class Rectangle extends AbstractShape {
    width: number;
    length: number;

    constructor(color: string, width: number, length: number) {
        super(color);

        this.width = width;
        this.length = length;
    };

    getPerimeter(): number {
        const perimeter = 2*this.width + 2*this.length;
        return perimeter;
    }
};


class newCircle extends AbstractShape {
    radius: number;

    constructor( color: string, radius: number){
        super(color);
        this.radius = radius;
    };

    getPerimeter(): number {
        const perimeter = Math.PI * (this.radius**2);
        return perimeter;
    }
};

// Exercise 14

abstract class AbstractAnimal {
    name: string;

    constructor(name: string){this.name = name};

    abstract makeSound(): string 
};

class newTiger extends AbstractAnimal {
    constructor(name: string){
        super(name)
    };

    makeSound(): string {
        return `The tiger ${this.name} make grrrr!`
    };
};

class newLion extends AbstractAnimal {
    constructor(name: string) {
        super(name);
    };

    makeSound(): string {
        return `The lion ${this.name} makes grrrrrrrr louder!`
    }
};

// Exercise 15

abstract class AbstractEmployee {
    name: string;
    employeeId: string;

    constructor(name: string, employeeId: string) {
        this.name = name;
        this.employeeId = employeeId;
    };

    abstract calculateSalary(): number;
};

class FullTimeEmployee extends AbstractEmployee {
    name: string;
    constructor(name: string, employeeId: string) {
        super(name, employeeId);
    };

    calculateSalary(): number {
        return 6800;
        
    };
};

class PartTimeEmployee extends AbstractEmployee {
    constructor(name: string, employeeId: string){
        super(name, employeeId)
    };
    calculateSalary(): number {
        return 3400;
    }
};

let emp: AbstractPerson = new newEmployee("Luis", 190254);
emp.display();

let emp2: AbstractPerson = emp.find("José");
emp2.display();

let redSmallRectangle = new Rectangle('red',1, 2);
console.log(redSmallRectangle.getPerimeter())

const myYelloCircle = new newCircle('yellow', 2);
console.log(myYelloCircle.color);
console.log(myYelloCircle.radius);
console.log(myYelloCircle.getPerimeter());

const tonio = new newTiger('Tonio');
const mufasa = new newLion('mufasa');

console.log(tonio.name, tonio.makeSound());
console.log(mufasa.name, mufasa.makeSound());