                //Section 4: practice Timw
                //Lession 1: objects and Functions

// create a person object that contains three keys: name, age and county.
// use yourself as an example to set the values for name, age, and county

let person = {
    name: "John",
    age: 35,
    county: "Norway"
}

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

let age = 15

// less than 6 years old -> free
// 6 to 17 years old      -> child discount
// 18 to 26 years old     -> student discount
// 27 to 66 years old     -> full price
// over 66 years old      -> senior citizen discount

// create a conditional statement (if/else/else if ) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("Free");
    } else if (age >= 6 && age <= 17) {
    console.log("Child")
    } else if (age >= 18 && age <= 26) {
    console.log("Student")
    } else if (age >= 27 && age <= 66) {
    console.log("Full price")
    } else {
    console.log("Senior citizen")
    }

    console.log(age);

    //age