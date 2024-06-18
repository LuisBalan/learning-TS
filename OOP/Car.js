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
var Car = /** @class */ (function () {
    function Car(latestYear, dollarsPrice) {
        this.latestYear = latestYear;
        this.dollarsPrice = dollarsPrice;
        this.year = latestYear;
        this.price = dollarsPrice;
    }
    Car.prototype.drive = function () {
        console.log('The Car has Started driving');
    };
    ;
    Car.prototype.stop = function () {
        console.log('The car has stopped');
    };
    return Car;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.eat = function () {
        console.log("What's for dinner?");
    };
    ;
    Person.prototype.speak = function () {
        console.log("My name is ".concat(this.name, ", I am ").concat(this.age, " years old"));
    };
    ;
    return Person;
}());
;
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(name, age, occupation) {
        var _this = _super.call(this, name, age) || this;
        _this.occupation = occupation;
        return _this;
    }
    Chef.prototype.speak = function () {
        console.log("I am a ".concat(this.occupation));
    };
    ;
    Chef.prototype.cook = function () {
        console.log('I am cooking');
    };
    ;
    return Chef;
}(Person));
;
var Human = /** @class */ (function () {
    function Human(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    ;
    Human.prototype.speak = function () {
        return 'I am speaking';
    };
    ;
    return Human;
}());
;
var Doctor = /** @class */ (function () {
    function Doctor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    ;
    Doctor.prototype.speak = function () {
        return 'I am a doctor';
    };
    ;
    return Doctor;
}());
;
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.print = function () {
        console.log('I am a class A');
    };
    return A;
}());
;
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.print = function () {
        console.log('I am a class B');
    };
    ;
    return B;
}(A));
;
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.print = function () {
        console.log('I am a class C');
    };
    ;
    return C;
}());
;
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('I am a class D');
    };
    ;
    return D;
}(C));
;
var E = /** @class */ (function () {
    function E(variable) {
        this.variable = variable;
    }
    return E;
}());
;
var F = /** @class */ (function () {
    function F(variable) {
        this._variable = variable;
    }
    ;
    Object.defineProperty(F.prototype, "variable", {
        get: function () {
            return this._variable;
        },
        set: function (value) {
            if (value === '')
                throw new Error('Variable cannot be an empty string');
            this._variable = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return F;
}());
;
var tesla = new Car(2025, '300K');
// const newObject = new A('B')
var Luis = new Person('Luis', 33);
var chefDaniel = new Chef('Daniel', 38, 'Chef');
var Hugo = new Doctor('Hugo', 'Male');
var AObject = new A();
var BObject = new B();
var CObject = new C();
var DObject = new D();
var EObject = new E('value');
var FObject = new F('distinct value');
// FObject.variable = 'A second distict value';
console.log(tesla.latestYear, tesla.price);
// console.log(newObject.variable);
console.log(Luis.name, Luis.age);
console.log('-----------------');
console.log(chefDaniel.name);
console.log(chefDaniel.age);
console.log(chefDaniel.occupation);
console.log(chefDaniel.speak());
console.log(chefDaniel.cook());
console.log(chefDaniel.eat());
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
