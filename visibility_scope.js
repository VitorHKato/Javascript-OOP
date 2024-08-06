// Create a class System to manage a library of books that includes the following functionalities:
// Book Class: Public properties 'title' and 'author', Private property 'isbn' with getter and setter methods to access
// and modify the 'isbn', ensuring it is a 13-characters string, Public method 'getInfo' that returns a string with the
// book's title and author
// Library Class: Private property '_books' which is an array of 'Book' objects. Public method 'addBook' that accepts
// a 'Book' object and adds it to the '_books' array. Public method 'removeBook' that accepts an 'isbn' and removes the
// corresponding book from the '_books' array. Public method 'findBookByTitle' that accepts a title and returns the first
// matching book found. Private method 'listBooks' that prints all books in the library (used internally). Static method
// 'createLibraryWithBooks' that accepts an array of 'Book' objects and returns an instance of 'Library' with those books added.
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this._isbn = isbn
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(value) {
        value.length === 13 ? this._isbn = value : this._isbn;
    }

    getInfo() {
        return `${this.title} - ${this.author}`
    }
}

class Library {
    constructor(books) {
        this._books = books
    }

    addBook(book) {
        this._books.push(book)
    }

    removeBook(isbn) {
        let index = this._books.findIndex(book => book.isbn === isbn)
        this._books.splice(index, 1)
    }

    findBookByTitle(title) {
        return this._books.find(book => book.title === title);
    }

    listBooks() {
        this._books.forEach(book => console.log(book.getInfo()))
    }

    static createLibraryWithBooks(books) {
        return new Library(books)
    }
}

const books = []
b1 = new Book('Programming basics', 'Vitor1')
b1.isbn = 'd4sdf56aasdad'
b2 = new Book('Programming intermediate', 'Vitor2')
b2.isbn = 'd4sdf5hyasdad'
b3 = new Book('Programming advanced', 'Vitor3')
b3.isbn = 'd4sdf5624sdad'
books.push(b1)
books.push(b2)
books.push(b3)

// console.log(b2.getInfo())

const library = new Library(books)
b4 = new Book('Programming advanced', 'Vitor4')
b3.isbn = 'd4sdf5624s9kd'
library.addBook(b4)
library.removeBook('d4sdf56a')
library.listBooks()
console.log(library.findBookByTitle('Programming basics'))

const library2 = Library.createLibraryWithBooks(books)
library2.listBooks()