class Dog {
constructor(name, breed, age, color){

    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    Dog.#numberOfDogs++;
    //Dog.numberOfDogs++;
}
static #numberOfDogs = 0; // use # to make it private and read only, not changeable nor accessible from outside the calss

static resetDogCount() {
    Dog.#numberOfDogs = 0;
}

// static set numberOfDogs(newValue){ // must have a parameter whether you use it or not.
//     return Dog.#numberOfDogs++;
// }

bark() {
    //console.log(`Woof! Woof! I am ${this.name}.`);
    throw new BarkError(this.name, this.breed)
}

}

let brockie = new Dog('Brockie', 'German Shepherd', '3', 'Brown')

//console.log(brockie.bark());

// create unique BarkError class by inheriting from Error class
class BarkError extends Error {
    constructor(dogName, dogBreed){
        // you must use super() to use the classes properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark.`);

    }
}

// let newError = new Error()
try {
    brockie.bark();
} catch (error) {
    //throw new BarkError(brockie.name, brockie.breed)
    if (BarkError){
        console.log("Bark Error occured.");
    }
}
Dog.numberOfDogs = 10;
console.log(Dog.numberOfDogs);
