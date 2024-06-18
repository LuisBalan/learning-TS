// Exercise 1 and 2:
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
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    ;
    Bus.prototype.start = function () {
        console.log('But starting operation!');
    };
    ;
    return Bus;
}());
;
// Exercise 3:
var USV = /** @class */ (function (_super) {
    __extends(USV, _super);
    function USV(make, model, year, isOffRoadDriving) {
        var _this = _super.call(this, make, model, year) || this;
        _this.isOffRoadDriving = isOffRoadDriving;
        return _this;
    }
    ;
    USV.prototype.changeOffRoadCapability = function () {
        this.isOffRoadDriving = !this.isOffRoadDriving;
        var offRoadMessage = this.isOffRoadDriving ? 'This is Off Road vehicle!' : 'This vehicle is not Off Road!';
        console.log(offRoadMessage);
    };
    ;
    return USV;
}(Bus));
;
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    Vehicle.prototype.start = function () {
        console.log('Vehicle starting the roading!');
    };
    ;
    Vehicle.prototype.printProperties = function () {
        console.log("\n            A vehicle of brand ".concat(jetta.make, ", model ").concat(jetta.model, ",\n            released in ").concat(jetta.year, ".\n            The engine is of type ").concat(jetta.engine.fuelType, " with a power of ").concat(jetta.engine.horsepower, "hp."));
    };
    ;
    return Vehicle;
}());
;
var Engine = /** @class */ (function () {
    function Engine(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
    ;
    return Engine;
}());
;
var VWEngine = new Engine(400, 'diesel');
var jetta = new Vehicle('Volkswagen', 'Jetta', 2020, VWEngine);
// methods print properties:
console.log(jetta.printProperties());
