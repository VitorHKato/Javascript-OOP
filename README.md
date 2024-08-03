# Javascript-OOP
## Classes and Objects
- Create a class Person with the attributes name, age, and address. Then, create two objects of this class and print the
details of each person.
- Create a class Product with the attributes id, name, price, and quantity. Add a method getTotalValue() that returns 
the total value of the stock (price * quantity). Create some Product objects and use the getTotalValue() method.

## Attributes
- Create a class Student with the attributes name, studentId, and grades (an array of numbers). Add a method 
getAverageGrade() that calculates and returns the average of the grades.
- Create a class Car with the attributes make, model, year, mileage, and fuelLevel. Add methods to adjust the mileage 
and fuel level. Ensure that the fuel level is never negative.

## Methods
- Create a class Calculator with methods add, subtract, multiply, and divide that perform basic mathematical operations.
Test the methods by creating a Calculator object and calling each method with different values.
- Create a class Rectangle with the attributes width and height. Add methods getArea() and getPerimeter() that return 
the area and perimeter of the rectangle, respectively.


- Create a class ShoppingCart with an array of Product objects. Add methods addProduct(product), removeProduct(productId), 
and getTotalCost(). Create a ShoppingCart object, add some products, and calculate the total cost.

## Object Lifecycle Management: Constructors and Destructors
- Create a class User that has the attributes username, email, and password. Add a constructor to initialize these 
attributes when a User object is created. Then, add a method deleteAccount() that simulates the destruction of the object 
by printing a message indicating that the account has been deleted.

## Object References
- Create a class Book with the attributes title, author, and isbn. Add methods to get and set these attributes. Then, 
create a class Library that maintains a list of Book objects. Add methods to add and remove books from the library. 
Finally, create a method that finds a book by its ISBN and returns a reference to the corresponding Book object.

## Relationships Between Objects
- Create a class Employee with the attributes name and position. Then, create a class Department that has an attribute 
name and a list of Employee objects. Add methods to add and remove employees from the department. Finally, create a 
method that returns a list of names of all employees in a given department.

## Persistence
- Create a class Contact with the attributes name, phone, and email. Add methods to get and set these attributes. Then, 
create a class ContactManager that has a method saveContactsToFile() to save all contacts to a JSON file, and a method 
loadContactsFromFile() to load contacts from a JSON file and add them to the ContactManager's list of contacts.

## Inheritance
- Create a base class Person with a constructor that initializes the name property and a method greet that prints 
"Hello, my name is name". Create a subclass Student that inherits from Person and has an additional property studentId.
The Student class should have a method study that prints "Student name is studying."
- Create a base class Shape with a method area that returns 0. Create a subclass Rectangle that inherits from Shape and
adds properties width and height. Override the area method to return the area of the rectangle.

## Mixin
- Create two mixins: CanRun with a method run that prints "Running fast!", and CanJump with a method jump that prints 
"Jumping high!". Create a class Athlete that uses both mixins and has an additional method train that prints "Athlete is training".