/* Inheritance */
// Create a base class Person with a constructor that initializes the 'name' property and a method 'greet' that prints
// 'Hello, my name is 'name''. Create a subclass 'Student' that inherits from 'Person' and has an additional 'enrollment'
// property. The 'Student' class should have a method 'study' that prints 'Student 'name' is studying.'
class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    greet() {
        console.log(`Hello, my name is ${this._name}`)
    }
}

class Student extends Person {
    constructor(name, enrollment) {
        super(name);
        this._enrollment = enrollment
    }

    get enrollment() {
        return this._enrollment;
    }

    set enrollment(value) {
        this._enrollment = value;
    }

    study() {
        console.log(`Student ${this._name} is studying.`)
    }
}

student = new Student('Vitor', '12345')
student.greet()
student.study()

// Create a base class 'Shape' with a method 'area' that returns 0. Create a subclass 'Rectangle' that inherits from
// 'Shape' and adds the properties 'width' and 'height'. Override the 'area' method to return the area of the rectangle
class Shape {
    area() {
        return 0
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this._width = width
        this._height = height
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    area() {
        return this._width * this._height
    }

}

rectangle = new Rectangle(10, 4)
console.log(rectangle.area())


/* Mixin */
// Create two mixins: 'CanRun' with a method 'run' that prints 'Running fast!', and 'CanJump' with a method 'jump' that
// prints 'Jumping high!'. Create a class 'Athlete' that uses both mixins and has an additional method 'train' that
// prints 'Athlete is training.'
const canRun = {
    run() {
        console.log('Running fast!')
    }
}

const canJump = {
    jump() {
        console.log('Jumping high!')
    }
}

class Athlete {
    train() {
        console.log('Athlete is training.')
    }
}

Object.assign(Athlete.prototype, canJump, canRun)
const athlete = new Athlete()
athlete.run()
athlete.jump()
athlete.train()
