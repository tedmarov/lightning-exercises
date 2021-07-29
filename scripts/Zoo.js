/*
    1. Define a variable called zooAnimals and its value is an array of strings, each string being an 
    animal you would find at a zoo. Name at least 5.
*/

const zooAnimals = ["tiger", "gorilla", "elephant", "koala", "wolf"]

/* 
    2. Iterate through the zooAnimals array using the .forEach() method, and print each one to the console.
    :sparkles:EXTRA FUN:sparkles:: for funsies make your console.log look like this: console.log(`%c {the animal you're printing}`, 'color: blue');
*/

zooAnimals.forEach(animal => {
    console.log(`%c ${animal}`, 'color: lightblue')
})

/*
    3. Using .map(), iterate over the zooAnimal array and convert each animal string to an animal object. 
    Each object should have a property of 'name' (and its value is the animal's name), 
    and a property of 'id' and its value is a number that gets incremented with each animal.
    (TIP: you'll need another variable for that last part, but where to put it? :thinking_face:)
*/


/*
4. Since .map() returns a brand new array, store what you did in section 3 in a variable called 'completedZoo'
*/


let num = 0
const completedZoo = zooAnimals.map(animal => {
    let animalObject = {
        name: animal,
        id: ++num
    }
    return animalObject
})

/*
    5. Iterate through the new array using .forEach() and print each animal object to the console.
*/

completedZoo.forEach(animal => {
    console.log(`%c ${animal.id}: ${animal.name}`, 'color: lightblue')
})