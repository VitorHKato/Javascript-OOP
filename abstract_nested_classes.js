/* Abstract Classes */
// Create an abstract base class 'Employee' with a 'calculateSalary' method. Create two subclasses 'HourlyEmployee' and
// 'SalariedEmployee'. The 'HourlyEmployee' class should have an attribute 'hoursWorked' and a 'calculateSalary' method
// that returns the salary based on hours worked. The 'SalariedEmployee' class should have an attribute 'monthlySalary',
// and the 'calculateSalary' method should return the monthly salary. Demonstrate how objects of the 'HourlyEmployee'
// and 'SalariedEmployee' classes can be used.
class Employee {
    constructor() {
        if (this.constructor === Employee)
            throw new Error('Cannot instantiate abstract class Employee')
    }
    calculateSalary() {

    }
}

class HourlyEmployee extends Employee {
    #hoursWorked
    #payPerHour

    constructor(hoursWorked) {
        super();
        this.#hoursWorked = hoursWorked
        this.#payPerHour = 20
    }

    get hoursWorked() {
        return this.#hoursWorked;
    }

    set hoursWorked(value) {
        this.#hoursWorked = value;
    }

    get payPerHour() {
        return this.#payPerHour;
    }

    set payPerHour(value) {
        this.#payPerHour = value;
    }

    calculateSalary() {
        return this.hoursWorked * this.payPerHour
    }
}

class SalariedEmployee extends Employee {
    #monthlySalary

    constructor(monthlySalary) {
        super();
        this.#monthlySalary = monthlySalary
    }

    get monthlySalary() {
        return this.#monthlySalary;
    }

    set monthlySalary(value) {
        this.#monthlySalary = value;
    }

    calculateSalary() {
        return this.monthlySalary
    }
}

emp1 = new HourlyEmployee(160)
emp2 = new SalariedEmployee(5000)
// emp3 = new Employee()

console.log(emp1.calculateSalary(), emp2.calculateSalary())


/* Nested Classes */
// Create a 'Computer' class with a nested 'Processor' class. The 'Processor' class should have attributes such as 'frequency'
// and 'model', and a method that prints the processor's specifications. Create a 'Computer' object and, from it, create
// a 'Processor' object, demonstrating how to access the nested class. (*obs not supported in js)
class Computer {
    #processor
    constructor() {
        this.#processor = new Processor(2200, 'AMD Ryzen 9 7900X')
    }

    get processor() {
        return this.#processor;
    }

    set processor(value) {
        this.#processor = value;
    }
}

class Processor {
    #frequency
    #model
    constructor(frequency, model) {
        this.#frequency = frequency
        this.#model = model
    }

    get frequency() {
        return this.#frequency;
    }

    set frequency(value) {
        this.#frequency = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        this.#model = value;
    }

    printSpecifications() {
        console.log(`Model: ${this.model}, frequency: ${this.frequency}`)
    }
}

const computer = new Computer()
computer.processor.printSpecifications()

// Create a 'School' class that has a nested 'Classroom' class. The 'Classroom' class should have attributes such as 'name'
// and 'numberOfStudents', and a method that returns a description of the classroom. Instantiate a 'School' object,
// create a classroom, and call the method of the 'Classroom' class to display the description.
class School {
    #classroom

    constructor() {
        this.#classroom = new Classroom('A2', 44)
    }

    get classroom() {
        return this.#classroom;
    }

    set classroom(value) {
        this.#classroom = value;
    }
}

class Classroom {
    #name
    #numberOfStudents

    constructor(name, numberOfStudents) {
        this.#name = name
        this.#numberOfStudents = numberOfStudents
        this._name = name;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get numberOfStudents() {
        return this.#numberOfStudents;
    }

    set numberOfStudents(value) {
        this.#numberOfStudents = value;
    }

    printDescription() {
        console.log(`Class ${this.name} has ${this.numberOfStudents} students.`)
    }
}

const school = new School()
school.classroom.printDescription()