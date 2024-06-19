// Exercise 5
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Student {
//     name!: string;
//     group!: string;
//     constructor( name: string, group: string ) {
//         this.name = name;
//         this.group = group;
//     };
// };
// Exercise 6
var wideStudent = /** @class */ (function () {
    function wideStudent(name, rollNumber) {
        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        }
        ;
        this.name = name;
    }
    ;
    return wideStudent;
}());
;
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
var Student = /** @class */ (function () {
    function Student(name, age) {
        if (name === void 0) { name = name; }
        this.name = name;
        this.age = age < 0 ? 0 : age;
    }
    ;
    return Student;
}());
;
// Inheritance
// Exercise 9
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        if (name === void 0) { name = name; }
        this.name = name;
        this.species = species;
    }
    ;
    return Animal;
}());
;
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, species) {
        return _super.call(this, name, species) || this;
    }
    ;
    Tiger.prototype.roar = function () {
        console.log('The tiger is roaring!');
    };
    ;
    return Tiger;
}(Animal));
;
// Exercise 10
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    return Person;
}());
;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId) {
        if (employeeId === void 0) { employeeId = employeeId; }
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    ;
    return Employee;
}(Person));
;
// Exercise 11
var Shape = /** @class */ (function () {
    function Shape(color) {
        if (color === void 0) { color = color; }
        this.color = color;
    }
    ;
    Shape.prototype.draw = function () {
        console.log("The ".concat(this.color, " shape is being drawn!"));
    };
    ;
    return Shape;
}());
;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log("The ".concat(this.color, " circle is being drawn!"));
    };
    ;
    return Circle;
}(Shape));
;
// Exercise 12
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    ;
    return Vehicle;
}());
;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model) || this;
    }
    ;
    return Car;
}(Vehicle));
;
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(make, model) {
        return _super.call(this, make, model) || this;
    }
    ;
    return SportsCar;
}(Car));
;
var luisBalan = new wideStudent('Luis', 33);
console.log(luisBalan.name);
console.log(luisBalan.rollNumber);
var undefiedAgeStudent = new wideStudent('Luis');
console.log(undefiedAgeStudent.name);
console.log(undefiedAgeStudent.rollNumber);
// const redShape = new Shape('red');
// console.log('testing shape class: ',  redShape.color);
// const redCircle = new Circle(2, 'red');
// console.log(redCircle.color);
// console.log(redCircle.radius)
var RStudent = new Student('Richie', 10);
console.log(RStudent.name, RStudent.age);
var balan = new Tiger('balan', 'mexicano');
console.log(balan.name);
console.log(balan.species);
console.log(balan.roar());
var LuisBalan = new Employee('Luis Balan', 33, 190546);
console.log(LuisBalan.age, LuisBalan.name, LuisBalan.employeeId);
var redCircle1 = new Circle('blue');
console.log(redCircle1.color, redCircle1.draw());
var trailer = new Vehicle('Freighliner', 'Int');
var Aveo = new Vehicle('Chevrolet', 'Aveo');
var Porsche = new Vehicle('Porsche', 'Carrera GT');
console.log(trailer.make, trailer.model);
console.log(Aveo.make, Aveo.model);
console.log(Porsche.make, Porsche.model);
