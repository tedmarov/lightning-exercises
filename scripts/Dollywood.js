// using a for...of loop, iterate the following:

const welcomeMessage = "Welcome to Dollywood!"
welcomeMessage.split("").forEach(letter => {
    console.log(letter)
})

// for (const letter of welcomeMessage) {
//     console.log(letter)
// }

/* output each letter individually and consecutively to the console like this:
    W
    e
    l
    c
    o
    m
    e
    ... etc.
*/
// const rollerCoasters = ["Wild Eagle", "Tennessee Tornado", "Firechaser Express", "Mystery Mine", "Lightning Rod", "Thunderhead", "Dragonflier"]

// for (const ride of rollerCoasters) {
//     console.log(ride)
// }

// output each string in the array to the console
/* For example:
    Wild Eagle
    Tennessee Tornado
    Firechaser Express ...etc.
*/
const ride = {
    name: "Wild Eagle",
    type: "roller coaster",
    location: "Dollywood",
    state: "Tennessee"
}

// output each key/value pair in a single line to the console
/* For example:

name: Wild Eagle
type: roller coaster
location: Dollywood
state: Tennessee
// for (const [key, value]) of Object.entries(ride)) {
//     console.log(`${key}: ${value}`);
// }

//For in loop
// for(const name in ride) {
//     console.log(`${name}: ${ride[name]}`)
// }

*/
// Next, do the same for all of the above using the .forEach() - array method
// ! BONUS show the index position of the array and the rollercoaster in the rollercoasters array using  .forEach() and for...of
/* For example:
    Index 0: Wild Eagle
    Index 1: Tennessee Tornado ...etc.
*/
// !! DOUBLE BONUS - render each iteration to the DOM