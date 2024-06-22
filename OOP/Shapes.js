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
