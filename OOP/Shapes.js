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
var GeometricShape = /** @class */ (function () {
    function GeometricShape(name, lenghts) {
        this.name = name;
        this.lenghts = lenghts;
    }
    ;
    return GeometricShape;
}());
;
var NewCircle = /** @class */ (function (_super) {
    __extends(NewCircle, _super);
    function NewCircle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = _this.lenghts[0];
        return _this;
    }
    NewCircle.prototype.getArea = function () {
        return Math.PI * (Math.pow(this.radius, 2));
    };
    ;
    NewCircle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return NewCircle;
}(GeometricShape));
;
var NewRectangle = /** @class */ (function (_super) {
    __extends(NewRectangle, _super);
    function NewRectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = _this.lenghts[0];
        _this.height = _this.lenghts[1];
        return _this;
    }
    NewRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    NewRectangle.prototype.getPerimeter = function () {
        return 2 * this.width + 2 * this.height;
    };
    return NewRectangle;
}(GeometricShape));
;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstSide = _this.lenghts[0];
        _this.secondSide = _this.lenghts[1];
        _this.thirdSide = _this.lenghts[2];
        _this.base = _this.lenghts[0];
        _this.height = _this.lenghts[1];
        return _this;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    Triangle.prototype.getPerimeter = function () {
        return this.lenghts.slice(0, 3).reduce(function (accum, value) { return accum + value; }, 0);
    };
    return Triangle;
}(GeometricShape));
;
var GeneralStudent = /** @class */ (function () {
    function GeneralStudent(name, studentId) {
        this.name = name;
        this.studentId = studentId;
    }
    ;
    GeneralStudent.prototype.displayInfo = function () {
        console.log("The student ".concat(this.name, " has ID ").concat(this.studentId));
    };
    ;
    return GeneralStudent;
}());
;
var HighSchoolStudent = /** @class */ (function (_super) {
    __extends(HighSchoolStudent, _super);
    function HighSchoolStudent(name, studentId, degree) {
        var _this = _super.call(this, name, studentId) || this;
        _this.degree = degree;
        return _this;
    }
    ;
    HighSchoolStudent.prototype.displayInfo = function () {
        console.log("The high school student has ID ".concat(this.studentId));
    };
    ;
    return HighSchoolStudent;
}(GeneralStudent));
;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    ;
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposit: ".concat(amount, "\nNew Balance: ").concat(this.balance));
        }
        else {
            console.log('Error: Invalid amount.');
        }
        ;
    };
    ;
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn: ".concat(amount, "\nNew Balance: ").concat(this.balance));
        }
        else {
            console.log('Error: Invalid amount.');
        }
    };
    ;
    return BankAccount;
}());
;
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    ;
    Car.prototype.getCarInfo = function () {
        return "Make: ".concat(this.make, "\nModel: ").concat(this.model);
    };
    ;
    return Car;
}());
;
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    function Porsche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Porsche;
}(Car));
;
var Nissan = /** @class */ (function (_super) {
    __extends(Nissan, _super);
    function Nissan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nissan.prototype.getCarInfo = function () {
        return "This Nissan car information:\nMake: ".concat(this.make, "\nModel: ").concat(this.model);
    };
    return Nissan;
}(Car));
;
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Animal.prototype.introduce = function () {
        return "Hello I'm ".concat(this.name, " and I'm ").concat(this.age, " years old");
    };
    ;
    return Animal;
}());
;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.introduce = function () {
        return "Hello I'm the dog ".concat(this.name);
    };
    return Dog;
}(Animal));
;
var Counter = /** @class */ (function () {
    function Counter() {
        Counter.count = 0;
    }
    ;
    Counter.increment = function () {
        Counter.count++;
        console.log('counter increased in 1');
    };
    ;
    Counter.getCount = function () {
        return Counter.count;
    };
    ;
    return Counter;
}());
;
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.add = function (var1, var2) {
        return var1 + var2;
    };
    ;
    Operations.substract = function (var1, var2) {
        return var1 - var2;
    };
    ;
    Operations.multiply = function (var1, var2) {
        return var1 * var2;
    };
    ;
    Operations.divide = function (var1, var2) {
        return var1 / var2;
    };
    ;
    return Operations;
}());
;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        return Singleton.Singleton;
    };
    ;
    return Singleton;
}());
;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.formatDate = function (date, format) {
        // date: MM-DD-YYYY
        /**
         * MM-DD-YY
         * DD-MM-YY
         * YY-MM-DD
         * Month D, Yr
         * M-D-YY
         */
        var dateElements = date.split('-');
        var month = dateElements[0];
        var day = dateElements[1];
        var year = dateElements[2];
        var formattedDate = '';
        // format.toString();
        // const formattedDay = day.toString();
        var monthEquivalances = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December'
        };
        var abbreviationsMonths = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        };
        switch (format) {
            case 1:
                formattedDate = "".concat(day, "-").concat(month, "-").concat(year);
                break;
            case 2:
                formattedDate = "4".concat(monthEquivalances[month], ", ").concat(day, " ").concat(year);
                break;
        }
        ;
        return formattedDate;
    };
    ;
    Utility.generateRandomString = function (length, language) {
        var englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
        var spanishAlphabet = 'abcdefghijklmnñopqrstuvwxyz';
        var upperLimit = language === 'en' ? 25 : 26;
        var output = '';
        if (language === 'es') {
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * upperLimit);
                output = output + englishAlphabet[randomIndex];
            }
            ;
        }
        else {
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * upperLimit);
                output = output + spanishAlphabet[randomIndex];
            }
            ;
        }
        ;
        return output;
    };
    ;
    Utility.capitalizeString = function (cadena) {
        return cadena.split('').map(function (char) { return char.toUpperCase(); }).join('');
    };
    ;
    return Utility;
}());
;
var blueCircle = new NewCircle('blue circle', [1]);
console.log(blueCircle.getArea());
console.log(blueCircle.getPerimeter());
console.log('----- rectangle -----');
var yellowRectangle = new NewRectangle('yellow rectangle', [10, 20]);
console.log(yellowRectangle.getArea());
console.log(yellowRectangle.getPerimeter());
console.log('---- triangle ----');
var greenTriangle = new Triangle('green triangle', [3, 4, 5]);
console.log(greenTriangle.name);
console.log(greenTriangle.getArea());
console.log(greenTriangle.getPerimeter());
console.log('----- Access Modifiers -----');
var alejandra = new GeneralStudent('ale', 161815);
var luis = new HighSchoolStudent('luis', 123123, 6);
// console.log(luis.name);
console.log(luis.displayInfo());
console.log(alejandra.displayInfo());
console.log('---- Bank Account ----');
var basicAccount = new BankAccount('102345');
basicAccount.deposit(500);
console.log('---- Cars ----');
var CarreraGT = new Porsche('Porsche', 'Carrera GT');
console.log(CarreraGT.getCarInfo());
var versa = new Nissan('Nissan', 'Versa');
console.log(versa.getCarInfo());
console.log('---- Animal Class ----');
var fido = new Dog('Fido', 3);
console.log(fido.introduce());
console.log('----- Counter -----');
var FirstCounter = new Counter();
console.log(Counter.getCount());
console.log(Counter.increment());
console.log(Counter.getCount());
console.log(Counter.increment());
console.log(Counter.getCount());
console.log(Counter.increment());
console.log(Counter.getCount());
console.log(Counter.increment());
console.log(Counter.getCount());
console.log('--- Operations ---');
console.log(Operations.add(1, 2));
console.log(Operations.substract(10, 5));
console.log(Operations.multiply(40, 50));
console.log(Operations.divide(120, 9));
console.log('---- Singleton ----');
var singleton1 = new Singleton;
var singleton2 = new Singleton;
var sigleton3 = new Singleton;
console.log(Singleton.getInstance());
console.log(Utility.formatDate('11-12-1990', 1));
console.log('--- Random String Generator ---');
console.log(Utility.generateRandomString(45, 'es'));
console.log('--- Capitalize ---');
console.log(Utility.capitalizeString('cadena'));
console.log(Utility.capitalizeString('the quick fox'));
console.log(Utility.capitalizeString('ABCDEFG'));
