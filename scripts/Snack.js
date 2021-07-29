const jisie = {
    firstName: "Jisie",
    lastName: "David",
    cohort: 44,
    favSnack: "Spicy tapioca chips"
  }
  
  //1. Use bracket notation to console log the the string "Name_of_instructor's favorite snack is name_of_snack"

  console.log(`${jisie["firstName"]}'s favorite snack is + ${jisie["favSnack"]}`)

  const keyFName = "firstName"
  const keyLName = "lastName"
  const keyCohort = "cohort"
  const keySnack = "favSnack"
  

  //2. Create three more objects to represent the other three instructors in the 
  //    cohort (Madi likes goldfish. Bryan usually goes for zebra popcorn. Scott loves hot cheetos.) 
  //    Use the four variables defined above for the keys. (Hint: Object bracket notation)
  const madi = {
      [keyFName]: "Madi",
      [keyLName]: "Peper",
      [keyCohort]:44,
      [keySnack]: "Goldfish"
  }

  const bryan = {
    [keyFName]: "Bryan",
    [keyLName]: "Nilsen",
    [keyCohort]:44,
    [keySnack]: "Zebra popcorn"
  }
  
  const scott = {
    [keyFName]: "Scott",
    [keyLName]: "Silver",
    [keyCohort]:44,
    [keySnack]: "Hot cheetos"
  }

  //3. Using bracket notation and the variables, console log the the string 
  //    "Name_of_instructor's favorite snack is name_of_snack" for the three instructors you just created.

  console.log("Bracket Notation:")

  //Rinse and repeat first iteraton

  //4. Use dot notation to console log the the string "Name_of_instructor's favorite snack is name_of_snack" 
  //      for the instructors.

  console.log("Dot Notation:")

  //Same as Bracket, except Dot

  //5. In Zoom, click on the caret symbol(^) next to your "Start Video" button. Pick 
  //   "Choose video filter" and pick a fun filter! 

