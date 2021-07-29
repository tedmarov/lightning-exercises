// 1. In your index.html, add a <div> with the class attribute of "rainbow"
// 2. Define an array called "colorArray", with a color of the rainbow at each index (use all the colors of the rainbow)

export const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// 3. Define a function called "ColorList". It will take one parameter: an array of colors.

export const ColorList = (colorArray) => {

// 4. The first thing that the ColorList function should do is grab a reference to the DOM element with the class of "rainbow"

const colorTarget = document.querySelector(".rainbow")

// 5. The second thing the ColorList function will do is set the innerHTML of the "rainbow" element to a string that has an unordered list element in it (<ul> </ul>)
// 6. INSIDE of the <ul> element in the innerHTML string, use .map() to loop over each item in the array of colors that's defined as the parameter to the ColorList function. Inside of the .map(), each color should be turned into a <li> element.
// 7. Invoke the ColorList function and pass in an array of colors!

colorTarget.innerHTML = `
<h2>COOLORS</h2>
<ul>
    ${colorArray.map(colorObject => `<li>${colorObject}</li>`).join("")}
</ul>
`
}
