class Car {
    model: string;
    year: number;
    price: string

    constructor ( public latestYear: number, public dollarsPrice: string ) {
        this.year = latestYear;
        this.price = dollarsPrice;
    }

    drive() {
        console.log('The Car has Started driving')
    };

    stop() {
        console.log('The car has stopped');
    }
}

class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`What's for dinner?`)
    };

    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`)
    };
};

class Chef extends Person {
    occupation: string;
     constructor( name: string, age: number, occupation: string ) {
        super(name, age);
        this.occupation = occupation;
     }

     speak(): void {
        console.log(`I am a ${this.occupation}`);
     };

     cook(): void {
        console.log('I am cooking');
     };
};

class Human {
    name: string;
    gender: string;

    constructor(name: string, gender: string){
        this.name = name;
        this.gender = gender;
    };

    speak() {
        return 'I am speaking';
    };
};

class Doctor implements Human {
    name: string;
    gender: string;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    };

    speak() {
        return 'I am a doctor';
    };
};

class A {
    print() {
        console.log('I am a class A');
    }
};

class B extends A {
    print() {
        console.log('I am a class B');
    };
};

class C {
    print () {
        console.log('I am a class C');
    };
};

class D extends C {
    print () {
        super.print();
        console.log('I am a class D');
    };
};

class E {
    constructor(public variable: string) {}
};

class F {
    private _variable: string;

    constructor (variable: string ) {
        this._variable = variable;
    };

    get variable(): string {
        return this._variable;
    };

    set variable(value: string) {
        if (value === '') throw new Error('Variable cannot be an empty string');
        this._variable = value;
    };
};

const tesla = new Car( 2025, '300K');
// const newObject = new A('B')
const Luis = new Person('Luis', 33);
const chefDaniel = new Chef('Daniel', 38, 'Chef')
const Hugo = new Doctor('Hugo', 'Male');
const AObject = new A();
const BObject = new B();
const CObject = new C()
const DObject = new D();
const EObject = new E('value');
const FObject = new F('distinct value');
// FObject.variable = 'A second distict value';

console.log(tesla.latestYear, tesla.price);
// console.log(newObject.variable);
console.log(Luis.name, Luis.age);
console.log('-----------------')
console.log(chefDaniel.name);
console.log(chefDaniel.age);
console.log(chefDaniel.occupation);
console.log(chefDaniel.speak());
console.log(chefDaniel.cook());
console.log(chefDaniel.eat())
console.log('-------- doctor --------');
console.log(Hugo.name);
console.log(Hugo.gender);
console.log(Hugo.speak());
console.log('------------------------');
console.log(AObject.print());
console.log(BObject.print());
console.log(CObject.print());
console.log(DObject.print());
console.log(EObject.variable);
console.log('--------------------------');
console.log(FObject.variable);
