console.log("Welcome to the main module")

// import { mathOps } from "./Operations.js"

// const result = mathOps(8, 2, "addition")

// console.log(result)

// const doozy = ['beaut', 'beauty', 'bees-knees', 'cats-meow', 'corker', 'crackerjack', 'daisy', 'dandy', 'dilly', 'dream', 'honey', 'hot-stuff', 'humdinger', 'hummer', 'jim-dandy', 'knockout', 'lollapalooza', 'lulu', 'nifty', 'peach', 'pip', 'pippin', 'ripper', 'ripsnorter', 'snorter', 'sockdolager', 'standout', 'sweetheart']

// const random = Math.floor(Math.random() * doozy.length);

// console.log(`Today is going to be a ${doozy[random]} day`)

// import { makeSandwich } from "./Kitchen.js"

// const firstSandwich =  makeSandwich("sofritas", "non dairy cheddar", "extra many veggies", "low carb bread")

// console.log(firstSandwich)

// const secondSandwich = makeSandwich("steak", "cotija", "none", "sliced bread")

// console.log(secondSandwich)

// import { colorArray, ColorList } from "./Rainbow.js"

// ColorList(colorArray)

// import { StarshipList } from "./Starships.js"

// StarshipList()

// import "./Dollywood.js"

function explicit() {
    return 'a'
   }
  function implicit() {
    'a'
   }
// This function must have a return statement. Not implicit.

const implicit2 = () => 'thing'
const explicit2 = () => {
   return 'thing'
 }
// Single line vs multi-line

let filtered1 = [12, 5, 8, 130, 44].filter(value => {
    //return a condition 
return value >= 10})
console.log(filtered1)


let filtered2 = [12, 5, 8, 130, 44].filter(value => value >= 10)
console.log(filtered2)


function isBigEnough(value) {
return value >= 10
}

let filtered3 = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered3)


// const sayHello1 = who => {
//     const greeting = 'Hello '
//     const message = greeting + who
//     return message
//   //Concatenate the above string with the who and put it in a variable
//   // Return that variable
//     }
//   const hi = sayHello1('hi')
//   console.log(hi)


//   const sayHello2 = who => `hello ${who}`
//   //Concatenate the above string with the who and put it in a variable
//   // Return that variable
//   const hiAgain = sayHello2('hi')
//   console.log(hiAgain)