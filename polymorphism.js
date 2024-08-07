// Create a base class 'Animal' with a method 'makeSound'. Create two subclasses 'Dog' and 'Cat' that inherit from
// 'Animal' and implement the 'makeSound' method with appropriate sounds (e.g., 'Bark' and 'Meow'). Create a function
// that accepts an 'Animal' object and calls its 'makeSound' method. Demonstrate the use of the function with 'Dog'
// and 'Cat' objects.
class Animal {

    makeSound() {}
}

class Dog extends Animal {

    makeSound() {
        console.log('Bark')
    }
}

class Cat extends Animal {

    makeSound() {
        console.log('Meow')
    }
}

function makeAnimalSounds(animals) {
    animals.forEach(animal => animal.makeSound())
}
const animals = []
const dog = new Dog()
const cat = new Cat()
animals.push(dog)
animals.push(cat)

makeAnimalSounds(animals)