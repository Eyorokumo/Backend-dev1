//     Section 5: Building a chrome Extension
//       Lesson 2: Add button and input tag

    // Lesson 4: Make the input button work with onclick

// log out "Button clicked !" when the user clicks the "SAVE INPUT" button

// let saveBtn = document.getElementById("save-btn");
// 
//fuction saveLead() {
// console.log("Button cliked!")}
// 
// // Lession 5: Refactor to addEventListener

// let saveBtn = document.getElementById("save-btn");

// saveBtn.addEventListener("click", function() {
//     console.log("Button clicked!");
// });

// Lesson 6: Write your first addEventListener

//           Lesson 7: Your turn to refactor,
// 6,7 are repeatation to get you understand addEventlistener okay
// 

// Lesson 8: Create the myLeads array and inputEl 

//crate two variables:
// myLeads-> should be assigned to an empty array
// inputEl-> should be assigned to the text input
// // 
// let myLeads = []

// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")


// //
function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads);

   
};

// inputEl.value = ""

//     Lesson 9: When to say let and const


//if possible, use const, if not, use let.
// 
// which varibles below should be changed from let to const?
// 
// The customer wants to order some stuff. Here are the details: 
// const basePrice = 520 
// const discount = 120 
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whoops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days";

// // calculating the full price
// const fullprice = basePrice-discount-shippingCost
// //
// // Finally, notifying the customer

// console.log("Total const: " + fullprice + ". it will arrive in " + shippingTime )


// Lesson 10:push to the myLeads array
// 
let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// push the value "www.awesomelead.com" to myArray when the input button is clicked
inputBtn.addEventListener("click",() => {
    myLeads.push("www.awesomelead.com");

    const inputValue = inputEl.value.trim(); 
    if (inputValue !== "") {
     myLeads.push(inputValue);
     inputEl.value = "";
    }
    console.log(myLeads);

});

//Lesson 11:  Push the value from the input field                           
