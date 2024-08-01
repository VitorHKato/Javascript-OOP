/* Object Lifecycle Management: Constructors and Destructors */
// Create a class 'User' that has the attributes 'username', 'email', and 'password'. Add a constructor to initialize
// these attributes when a 'User' object is created. Then, add a method 'deleteAccount()' that simulates the destruction
// of the object by printing a message indicating that the account has been deleted.
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    // Javascript doesn't have explicitly destructor method, uses garbage collector to non-reachable objects
    deleteAccount() {
        this.username = null
        this.email = null
        this.password = null

        console.log('Object destroyed.')
    }
}

u = new User('Vitor', 'vitor@gmail.com', '123456')
console.log(`${u.username}`)
u.deleteAccount()
console.log(`${u.username}`)


/* Object References */
// Create a class 'Book' with the attributes 'title', 'author', and 'isbn'. Add methods to get and set these attributes.
// Then, create a class 'Library' that maintains a list of 'Book' objects. Add methods to add and remove books from the
// library. Finally, create a method that finds a book by its ISBN and returns a references to the corresponding 'Book' object
class Book {
    constructor(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }

    get title() {
        return this._title
    }
    set title(title) {
        this._title = title;
    }

    get author() {
        return this._author
    }

    set author(author) {
        this._author = author
    }

    get isbn() {
        return this._isbn
    }

    set isbn(isbn) {
        this._isbn = isbn
    }

}

class Library {
    constructor() {
        this._books = []
    }

    addBook(book) {
        this._books.push(book)
    }

    removeBook(book) {
        let index = this._books.findIndex(value => value.isbn === book.isbn)
        this._books.splice(index, 1)
    }

    printBooks() {
        console.log(this._books)
    }

    findBook(isbn) {
        return this._books.filter(book => book.isbn === isbn)
    }

}
b1 = new Book('fundamentals js', 'Vitor Abc', 'sda3jdsa65')
b2 = new Book('js for beginners', 'Pedro asdi12h', 'nvsd84eqw1fc')
b3 = new Book('advanced react js', 'Maria hndfg', 'plsamo6asd4')

l = new Library()
l.addBook(b1)
l.addBook(b2)
l.addBook(b3)
l.removeBook(b3)

console.log(l.printBooks())
console.log(l.findBook('nvsd84eqw1fc'))


/* Relationships between objects */
// Create a class 'Employee' with the attributes 'name' and 'position'. Then, create a class 'Department' that has an
// attribute 'name' and a list of 'Employee' objects. Add methods to add and remove employees from the department.
// Finally, create a method that returns a list of names of all employees in a given department.
class Employee {
    constructor(id, name, position) {
        this._id = id
        this._name = name
        this._position = position
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    printDetails() {
        console.log(`${this._id}: ${this._name}, ${this._position}`)
    }
}

class Department {
    constructor(name, employees) {
        this._name = name
        this._employees = employees
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get employees() {
        return this._employees;
    }

    set employees(value) {
        this._employees = value;
    }

    addEmployee(employee) {
        this._employees.push(employee)
    }

    removeEmployee(id) {
        let emp = this._employees.findIndex(employee => employee.id === id)
        this._employees.splice(emp, 1)
    }

    listAllEmployees() {
        this._employees.map(emp => emp.printDetails())
    }
}
e1 = new Employee(1, 'Vitor', 'Developer backend')
e2 = new Employee(2, 'Pedro', 'Developer frontend')
e3 = new Employee(3, 'Maria', 'Manager')
let empList = []
empList.push(e1)
empList.push(e2)
d = new Department('business', empList)
d.addEmployee(e3)
d.listAllEmployees()
d.removeEmployee(2)
d.listAllEmployees()
