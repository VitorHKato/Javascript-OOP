/* Method overloading */
// Create a 'Calculator' class with a 'sum' method that: Accepts two numbers and returns their sum, accepts three numbers
// and returns their sum, accepts an array os numbers and returns the sum of all elements (*obs not supported in js)
class Calculator {

    sum(...args) {
        if (args.length === 2) {
            return args[0] + args[1]
        } else if (args.length === 3) {
            return args[0] + args[1] + args[2]
        } else if (Array.isArray(args[0])) {
            return args[0].reduce((sum, value) => sum + value, 0)
        }
    }
}

calculator = new Calculator()
console.log(calculator.sum(4, 8))
console.log(calculator.sum(4, 8, 3))
console.log(calculator.sum([4, 8, 3, 2]))

// Create a base class 'Shape' with a method 'calculateArea' that returns 0. Create two subclasses 'Circle' and 'Rectangle'
// that inherit from 'Shape' and override the 'calculateArea' method to calculate the area of a circle and a rectangle,
// respectively. Demonstrate the creation of 'Circle' and 'Rectangle' objects and the calling of the 'calculateArea' method
class Shape {
    calculateArea() {
        return 0
    }
}

class Circle extends Shape {
    #radius
    constructor(radius) {
        super();
        this.#radius = radius
    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        this._radius = value;
    }

    calculateArea() {
        return Math.pow(this.radius, 2) * Math.PI
    }
}

class Rectangle extends Shape {
    #height
    #width

    constructor(height, width) {
        super();
        this.#height = height
        this.#width = width
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        this.#height = value;
    }

    get width() {
        return this.#width;
    }

    set width(value) {
        this.#width = value;
    }

    calculateArea() {
        return this.height * this.width
    }
}

rect = new Rectangle(8, 6)
circle = new Circle(5)

console.log(rect.calculateArea())
console.log(circle.calculateArea())


/* Substitution principle */
// Create a base class 'Shape' with a method 'area'. Create two subclasses 'Square' and 'Rectangle'. The 'Square' class
// should have a 'side' attribute, and the 'Rectangle' class should have 'width' and 'height' attributes. The 'area'
// method in both subclasses should return the correct area according to the shape. Demonstrate how a 'Square' or
// 'Rectangle' object can be used wherever a 'Shape' object is expected, without altering the correct behavior of the program
class Shape {
    area() {

    }
}

class Square extends Shape {
    #side

    constructor(side) {
        super();
        this.#side = side
    }

    get side() {
        return this.#side;
    }

    set side(value) {
        this.#side = value;
    }

    area() {
        return Math.pow(this.side, 2)
    }
}

class Rectangle extends Shape {
    #width
    #height

    constructor(width, height) {
        super();
        this.#width = width
        this.#height = height
    }

    get width() {
        return this.#width;
    }

    set width(value) {
        this.#width = value;
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        this.#height = value;
    }

    area() {
        return this.width * this.height
    }
}

rect1 = new Rectangle(2, 4)
rect2 = new Rectangle(5, 6)
sq1 = new Square(5)
sq2 = new Square(4)

const shapeArr = []
shapeArr.push(rect1)
shapeArr.push(rect2)
shapeArr.push(sq1)
shapeArr.push(sq2)

shapeArr.forEach(value => console.log(value.area()))


/* Dynamic Binding */
// Create a base class 'Vehicle' with a 'move' method that returns a string 'The vehicle is moving'. Create two subclasses
// 'Car' and 'Bicycle' that override that 'move' method to return 'The car is driving' and 'The bicycle is pedaling',
// respectively. Additionally, add a new 'stop' method to the 'Vehicle' class that returns 'The vehicle stopped'. Override
// the 'stop method in both 'Car' and 'Bicycle' to return 'The car stopped' and 'The bicycle stopped'. Create a function
// that accepts an array of 'Vehicle' objects and calls the 'move' and 'stop' methods on each, demonstrating the dynamic
// binding behavior with the extended behavior.
class Vehicle {
    move() {
        return 'The vehicle is moving.'
    }

    stop() {
        return 'The vehicle stopped.'
    }
}

class Car extends Vehicle {
    move() {
        return 'The car is driving.'
    }

    stop() {
        return 'The car stopped.'
    }
}

class Bicycle extends Vehicle {
    move() {
        return 'The bicycle is pedaling.'
    }

    stop() {
        return 'The bicycle stopped.'
    }
}

const vehicles = []
let vehicle = new Vehicle(),
    car = new Car(),
    bicycle = new Bicycle()
vehicles.push(vehicle)
vehicles.push(car)
vehicles.push(bicycle)

callsVehicles(vehicles)
function callsVehicles(vehicles) {
    vehicles.forEach(value => console.log('Move: ' + value.move() + ', Stop: ' + value.stop()))
}