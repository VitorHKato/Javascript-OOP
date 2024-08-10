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

## Visibility and Scope
- Create a system to manage a library of books that includes the following functionalities:
Book Class: Public properties title and author. Private property isbn with getter and setter methods to access and 
modify the isbn, ensuring it is a 13-character string. Public method getInfo that returns a string with the book's 
title and author.
- Library Class: Private property _books which is an array of Book objects. Public method addBook that accepts a Book 
object and adds it to the _books array. Public method removeBook that accepts an isbn and removes the corresponding book 
from the _books array. Public method findBookByTitle that accepts a title and returns the first matching book found.
Private method listBooks that prints all books in the library (used internally). Static method createLibraryWithBooks 
that accepts an array of Book objects and returns an instance of Library with those books added. 

## Polymorphism
- Create a base class 'Animal' with a method 'makeSound'. Create two subclasses 'Dog' and 'Cat' that inherit from
'Animal' and implement the 'makeSound' method with appropriate sounds (e.g., 'Bark' and 'Meow'). Create a function
that accepts an 'Animal' object and calls its 'makeSound' method. Demonstrate the use of the function with 'Dog'
and 'Cat' objects.

## Method overload, Substitution Principle and Dynamic Binding
- Create a Calculator class with a sum method that: Accepts two numbers and returns their sum. Accepts three numbers and 
returns their sum. Accepts an array of numbers and returns the sum of all elements.
- Create a base class Shape with a calculateArea method that returns 0. Create two subclasses Circle and Rectangle that 
inherit from Shape and override the calculateArea method to calculate the area of a circle and a rectangle, respectively. 
Demonstrate the creation of Circle and Rectangle objects and the call to the calculateArea method.
- Create a base class Shape with an area method. Create two subclasses Square and Rectangle. The Square class should have
a side attribute, and the Rectangle class should have width and height attributes. The area method in both subclasses 
should return the correct area according to the shape. Demonstrate how an object of type Square or Rectangle can be used 
wherever a Shape object is expected, without altering the correct behavior of the program.
- Create a base class Vehicle with a move method that returns a string "The vehicle is moving". Create two subclasses Car
and Bicycle that override the move method to return "The car is driving" and "The bicycle is pedaling", respectively. 
Additionally, add a new method stop to the Vehicle class that returns "The vehicle has stopped". Override the stop method 
in both Car and Bicycle to return "The car has stopped" and "The bicycle has stopped". Create a function that accepts an 
array of Vehicle objects and calls the move and stop methods of each one, demonstrating the behavior of dynamic binding
with the extended behavior.

## Abstract and Nested classes
- Create an abstract base class Employee with a calculateSalary method. Create two subclasses HourlyEmployee and 
SalariedEmployee. The HourlyEmployee class should have an attribute hoursWorked and a calculateSalary method that returns 
the salary based on hours worked. The SalariedEmployee class should have an attribute monthlySalary, and the 
calculateSalary method should return the monthly salary. Demonstrate how objects of the HourlyEmployee and 
SalariedEmployee classes can be used.
- Create a Computer class with a nested Processor class. The Processor class should have attributes such as frequency and 
model, and a method that prints the processor's specifications. Create a Computer object and, from it, create a Processor 
object, demonstrating how to access the nested class.
- Create a School class that has a nested Classroom class. The Classroom class should have attributes such as name and 
numberOfStudents, and a method that returns a description of the classroom. Instantiate a School object, create a 
classroom, and call the method of the Classroom class to display the description.