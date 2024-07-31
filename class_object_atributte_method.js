/* Classes and Objects */
// Create a class 'Person' with the attributes 'name', 'age', and 'address'. Then, create two objects of this class
// and print the details of each person.
class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`)
    }

}
p1 = new Person('Vitor', 28, '27 Street.')
p2 = new Person('Vitor2', 78, '89 Street 2.')

p1.printDetails()
p2.printDetails()

// Create a class 'Product' with the attributes 'id', 'name', 'price' and 'quantity'. Add a method 'getTotalValue()' that
// returns the total value of the stock (price * quantity). Create some 'Product' objects and use the 'getTotalValue()'
// method
class Product {
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalValue() {
        return (this.price * this.quantity).toFixed(2)
    }
}

p1 = new Product(1, 'Cabinet', 240.10, 2)
p2 = new Product(2, 'Towels', 3.99, 10)

console.log(p1.getTotalValue())
console.log(p2.getTotalValue())


/* Attributes */
// Create a class 'Student' with the attributes 'name', 'studentId', and 'grades' (an array os numbers). Add a method
// 'getAverageGrade()' that calculates and returns the average of the grades
class Student {
    constructor(name, studentId, grades) {
        this.name = name
        this.studentId = studentId
        this.grades = grades
    }

    getAverageGrade() {
        return (this.grades.reduce((acc, value) => acc + value, 0) / this.grades.length)
    }
}

s1 = new Student('Vitor', 1, [6.5, 5, 7, 8.9])
s2 = new Student('Vitor2', 2, [3.9, 10, 9.2, 5.9])
s3 = new Student('Vitor2', 2, [4, 6, 8])

console.log(s1.getAverageGrade())
console.log(s2.getAverageGrade())
console.log(s3.getAverageGrade())

// Create a class 'Car' with the attributes 'make', 'model' 'year', 'mileage' and 'fuelLevel'. Add methods to adjust
// the mileage and fuel level. Ensure that the fuel level is never negative
class Car {
    constructor(make, model, year, mileage, fuelLevel) {
        this.make = make
        this.model = model
        this.year = year
        this.mileage = mileage
        this.fuelLevel = fuelLevel

        this.maxFuelLevel = 55
    }

    increaseMileage(km) {
        this.mileage += km
    }

    increaseFuelLevel(fuel) {
        if (this.fuelLevel + fuel > this.maxFuelLevel) {
            this.fuelLevel = this.maxFuelLevel
        } else {
            this.fuelLevel += fuel
        }
    }

    decreaseFuelLevel(fuel) {
        if (this.fuelLevel - fuel >= 0) {
            this.fuelLevel -= fuel
        } else {
            this.fuelLevel = 0
        }
    }

    printDetails() {
        console.log(`Mileage: ${this.mileage}, Fuel level: ${this.fuelLevel}`)
    }

}

c1 = new Car('Chevrolet', 'Celta', 2001, 216000, 30)
c1.increaseMileage(120)
c1.increaseFuelLevel(20)
c1.decreaseFuelLevel(20)

c1.printDetails()


/* Methods */
// Create a class 'Calculator' with methods 'add', 'subtract', 'multiply' and 'divide' that perform basic mathematical
// operations. Test the methods by creating a 'Calculator' objects and calling each method with different values
class Calculator {
    add(v1, v2) {
        return v1 + v2
    }

    subtract(v1, v2) {
        return v1 - v2
    }

    multiply(v1, v2) {
        return v1 * v2
    }

    divide(v1, v2) {
        return v1 / v2
    }
}

c = new Calculator()
console.log(c.add(10, 10))
console.log(c.add(2, 8))
console.log(c.subtract(10, 10))
console.log(c.subtract(2, 8))
console.log(c.multiply(10, 10))
console.log(c.multiply(2, 8))
console.log(c.divide(10, 10))
console.log(c.divide(2, 8))

// Create a class Rectangle with the attributes 'width' and 'height'. Add methods 'getArea()' and 'getPerimeter()' that
// return the area and perimeter of the rectangle, respectively
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    getPerimeter() {
        return 2 * (this.width + this.height)
    }

    printDetails() {
        console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`)
    }
}

r1 = new Rectangle(15, 10)
r2 = new Rectangle(6, 4)
r1.printDetails()
r2.printDetails()


// Create a class 'ShoppingCart' with an array of 'Product' objects. Add methods 'addProducts(product', 'removeProduct(productId)',
// and 'getTotalCost()'. Create a 'ShoppingCart' object, add some products, and calculate the total cost.

class ShoppingCart {
    constructor() {
        this.product = []
    }

    get productList() {
        return this.product
    }

    addProduct(product) {
        this.product.push(product)
    }

    removeProduct(product) {
        this.product.pop(product)
    }

    getTotalCost() {
        return this.product.reduce((acc, product) => acc + product.price * product.quantity, 0)
    }

}

p1 = new Product(1, 'towel', 3.99, 12)
p2 = new Product(2, 'tire', 199.99, 4)
p3 = new Product(3, 'couch', 80, 2)

s = new ShoppingCart()
s.addProduct(p1)
s.addProduct(p2)
s.addProduct(p3)
s.removeProduct(p3)

console.log(s.productList)
console.log(s.getTotalCost())