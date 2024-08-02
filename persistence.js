/* Persistence */
// Create a class 'Contact' with the attributes 'name', 'phone' and 'email'. Add methods to get and set these attributes.
// Then, create a class 'ContactManager' that has a method 'saveContactsToFile()' to save all contacts to a JSON file,
// and a method 'loadContactsFromFile()' to load contacts from a JSON file and add them to the 'ContactManager's list
// of contacts
class Contact {
    constructor(name, phone, email) {
        this._name = name
        this._phone = phone
        this._email = email
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

class ContactManager {
    constructor() {
        this._fs = require('fs')
    }

    saveContactsToFile(contacts) {
        this._fs.writeFileSync('data.json', JSON.stringify(contacts, null, 2), 'utf8')
        console.log('Data saved to data.json')
    }

    loadContactsFromFile() {
        const jsonData = this._fs.readFileSync('data.json', 'utf8')
        return JSON.parse(jsonData)
    }
}

c1 = new Contact('Vitor', '99999999', 'vitor@gmail.com')
c2 = new Contact('Pedro', '98765432', 'pedro@gmail.com')
c3 = new Contact('Maria', '23456782', 'maria@gmail.com')

const contactsList = [];
contactsList.push(c1)
contactsList.push(c2)
contactsList.push(c3)


const contactManager = new ContactManager()
contactManager.saveContactsToFile(contactsList)

const jsonData = [] = contactManager.loadContactsFromFile()
console.log(jsonData)