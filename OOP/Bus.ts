// Exercise 1 and 2:

class Bus {
    make!: string;
    model!: string;
    year!: number;

    constructor(make: string, model: string, year: number ) {
        this.make = make;
        this.model = model;
        this.year = year;
    };

    start() {
        console.log('But starting operation!');
    };

};


// Exercise 3:
class USV extends Bus {

    isOffRoadDriving!: boolean;

    constructor ( make: string, model: string, year: number,  isOffRoadDriving: boolean) {
        super(make, model, year);
        this.isOffRoadDriving = isOffRoadDriving
    };


    changeOffRoadCapability() {
        this.isOffRoadDriving = !this.isOffRoadDriving;
        const offRoadMessage = this.isOffRoadDriving ? 'This is Off Road vehicle!' : 'This vehicle is not Off Road!';
        console.log(offRoadMessage);
    };
};


class Vehicle {

    make!: string;
    model!: string;
    year!: number;
    engine!: Engine;

    constructor( make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    start() {
        console.log('Vehicle starting the roading!');
    };

    printProperties() {
        console.log(`
            A vehicle of brand ${jetta.make}, model ${jetta.model},
            released in ${jetta.year}.
            The engine is of type ${ jetta.engine.fuelType} with a power of ${jetta.engine.horsepower}hp.`)
    };
};

class Engine {
    horsepower!: number;
    fuelType!: string;

    constructor(horsepower: number, fuelType: string) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    };
};


const VWEngine = new Engine(400, 'diesel');
const jetta = new Vehicle('Volkswagen', 'Jetta', 2020, VWEngine);

// methods print properties:

console.log(jetta.printProperties());