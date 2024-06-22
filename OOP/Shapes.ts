abstract class GeometricShape {

    constructor( public name: string, public lenghts: number[]){};

    abstract getArea(): number;

    abstract getPerimeter(): number;

};

class NewCircle extends GeometricShape {

    radius = this.lenghts[0];

    getArea(): number {
        return Math.PI * (this.radius**2);
    };

    getPerimeter(): number {
        return 2*Math.PI*this.radius; 
    }
    
};

class NewRectangle extends GeometricShape {
    width = this.lenghts[0];
    height = this.lenghts[1];

    getArea(): number {
        return this.width*this.height;
    }

    getPerimeter(): number {
        return 2*this.width + 2*this.height;
    }
};

class Triangle extends GeometricShape {
    firstSide = this.lenghts[0];
    secondSide = this.lenghts[1];
    thirdSide = this.lenghts[2];
    base = this.lenghts[0];
    height = this.lenghts[1];

    getArea(): number {
        return 0.5*this.base*this.height;
    }

    getPerimeter(): number {
        return this.lenghts.slice(0, 3).reduce((accum, value) => accum + value, 0)
    }
};

const blueCircle = new NewCircle('blue circle', [1]);
console.log(blueCircle.getArea());
console.log(blueCircle.getPerimeter());
console.log('----- rectangle -----');
const yellowRectangle = new NewRectangle('yellow rectangle', [10, 20]);
console.log(yellowRectangle.getArea());
console.log(yellowRectangle.getPerimeter());
console.log('---- triangle ----');
const greenTriangle = new Triangle('green triangle', [3, 4, 5]);
console.log(greenTriangle.name);
console.log(greenTriangle.getArea());
console.log(greenTriangle.getPerimeter())