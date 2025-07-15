                //Section 4: practice Timw
                //Lession 1: objects and Functions

// create a person object that contains three keys: name, age and county.
// use yourself as an example to set the values for name, age, and county

// let person = {
//     name: "John",
//     age: 35,
//     county: "Norway"
// }

// create a function, logData(), that uses the person object to create a 
// string in the following format:
// "per is 35 years old and lives in norway"

// function logData() {
//     return person.name + " is " + person.age + " years old and lives in " + person.county
// }
 
// console.log(logData());



// call the logData() function to verify that it works
// 
// 

        // Lession 2: if else
        // 

// let age = 15

// less than 6 years old -> free
// 6 to 17 years old      -> child discount
// 18 to 26 years old     -> student discount
// 27 to 66 years old     -> full price
// over 66 years old      -> senior citizen discount

// create a conditional statement (if/else/else if ) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age < 6) {
//     console.log("Free");
//     } else if (age >= 6 && age <= 17) {
//     console.log("Child")
//     } else if (age >= 18 && age <= 26) {
//     console.log("Student")
//     } else if (age >= 27 && age <= 66) {
//     console.log("Full price")
//     } else {
//     console.log("Senior citizen")
//     }

//     console.log(age);

    //age
//                     // Lesson 3: Loops and Arrays
// let largeCountries = ["china","India","USA","Indonsia","Pakistan"]

/* Use a loop to log the following to the console:

The 5 largeest countries in the world:
- China
- India
- United States
- indinesia
- Pakistan
*/
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

            // Lesson 4: Push, pop, unshift, shift challenge


// let LargeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // you need to help me fixup the largeCuntries array so that 
// // China and Parkistan are added back into their respective places

// // use push() & pop() and their connterparts unshift() & shift()
// //  Google how to use unshift() and shift()


// // Remove "Tuvalu" from the start
// LargeCountries.shift()
// // Remove "Monaco" from the end
// LargeCountries.pop()
// // Add "China" to the start
// LargeCountries.unshift("China")
// // Add "Pakistan" to the end
// LargeCountries.push("Pakistan")

// console.log(LargeCountries)
// // Output: ["China", "India", "USA", "Indonesia", "Pakistan"]
// // 
// //              Lesson 5: Logical Operators
//   let dayOfMonth = 13
//   let weekday = "Friday"

//   // if it is Friday the 13th, log out this spooky face:
// //   use the logical "AND operator" ->&&

// if (weekday === "Friday" && dayOfMonth === 13) {
//   console.log("u 1F631 "); // This is a spooky face emoji
// }
        //                  Lesson 6: Rock papers scissors
//         // 
//         let hands = ["rock","paper","scissors"]
// // create a function that returns a random items froms the array
//  function getRandomItem(arr ) {
//     let randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
 
//  }

//  console.log(getRandomItem(hands));
//  console.log(getRandomItem(hands));
 

        //  lesson 7: Sorting fruits
        // 
let fruit = ["","","","",""]
let appleShelf = DocumentFragment.getElementById("appleShelf")
let orangeShelf = DocumentFragment.getElementById("orangeShelf")


// create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. use a for loop,
// a conditional statement, and the textContent property.


function sortFruits() {
    for (let i = 0; i < fruit.length; i++) { if (fruit[i] === "🍎"){
         appleShelf.textContent += "🍎"
    } else if (fruit[i] === "🍎🍊"){
         orangeShelf.textContent += "🍊"
}
}
}
sortFruits()