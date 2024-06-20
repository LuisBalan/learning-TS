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
var AbstractPerson = /** @class */ (function () {
    function AbstractPerson(name) {
        this.name = name;
    }
    ;
    AbstractPerson.prototype.display = function () {
        console.log(this.name);
    };
    ;
    return AbstractPerson;
}());
;
var newEmployee = /** @class */ (function (_super) {
    __extends(newEmployee, _super);
    function newEmployee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    ;
    newEmployee.prototype.find = function (name) {
        return new newEmployee(name, 1);
    };
    ;
    return newEmployee;
}(AbstractPerson));
;
var AbstractShape = /** @class */ (function () {
    function AbstractShape(color) {
        this.color = color;
    }
    ;
    return AbstractShape;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, length) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    ;
    Rectangle.prototype.getPerimeter = function () {
        var perimeter = 2 * this.width + 2 * this.length;
        return perimeter;
    };
    return Rectangle;
}(AbstractShape));
;
var newCircle = /** @class */ (function (_super) {
    __extends(newCircle, _super);
    function newCircle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    ;
    newCircle.prototype.getPerimeter = function () {
        var perimeter = Math.PI * (Math.pow(this.radius, 2));
        return perimeter;
    };
    return newCircle;
}(AbstractShape));
;
// Exercise 14
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal(name) {
        this.name = name;
    }
    ;
    return AbstractAnimal;
}());
;
var newTiger = /** @class */ (function (_super) {
    __extends(newTiger, _super);
    function newTiger(name) {
        return _super.call(this, name) || this;
    }
    ;
    newTiger.prototype.makeSound = function () {
        return "The tiger ".concat(this.name, " make grrrr!");
    };
    ;
    return newTiger;
}(AbstractAnimal));
;
var newLion = /** @class */ (function (_super) {
    __extends(newLion, _super);
    function newLion(name) {
        return _super.call(this, name) || this;
    }
    ;
    newLion.prototype.makeSound = function () {
        return "The lion ".concat(this.name, " makes grrrrrrrr louder!");
    };
    return newLion;
}(AbstractAnimal));
;
var emp = new newEmployee("Luis", 190254);
emp.display();
var emp2 = emp.find("José");
emp2.display();
var redSmallRectangle = new Rectangle('red', 1, 2);
console.log(redSmallRectangle.getPerimeter());
var myYelloCircle = new newCircle('yellow', 2);
console.log(myYelloCircle.color);
console.log(myYelloCircle.radius);
console.log(myYelloCircle.getPerimeter());
var tonio = new newTiger('Tonio');
var mufasa = new newLion('mufasa');
console.log(tonio.name, tonio.makeSound());
console.log(mufasa.name, mufasa.makeSound());
