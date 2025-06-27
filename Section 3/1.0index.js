//  Welcome to section 3: Building a Blakjack game
//Lession 1:Let's build a blackjack game 
// 
// Lession 2: Add the firstCard,secondCard,and sum

// 1.create two variable,firstCard and secondCard.
// let firstCard = 2
// let secondCard = 11
// console.log(firstCard, secondCard);

// //  Set their values to random numbers between 2 and 11
// // 
// // 2.create a variable,sum, and set it to the sum of the two cards
// let sum = firstCard + secondCard
// console.log(sum);
// 
// correction time 
// let firstCard = 10
// let secondCard = 7

// let sum = firstCard + secondCard + 6

// // console.log(sum);

// //Lession 3: if...else conditionals
// if(sum < 21){
//     console.log("Do you want to draw a new card? 🙂")
// } else if(sum === 21){
//     console.log("wohoo! You've got a Blackjack! 🥳")
// } else {
//     console.log("You're out of the game! 😭")
// }

// Lession 4: Your first if...else statement
//check if the person is old enough to enter the nightclub (21
// log a suitable message to the console in both cases
// let age = 21
// let age = 20

// if(age < 21){
//     console.log("You are not old enough to enter the nightclub")
// }
// else {
//     console.log("You are welcome")
// }
// Lession 5: if/else...if/else statement
// check if the person is eligible for a birthday card from the King! (100)

// Update the value of age instead of redeclaring
// age = 100
// age = 101
// age = 99

//if less than 100 -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else -> "Not eligible, you have already gotten one"
// if(age < 100){
//     console.log("Not eligible")
// }
// else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }
// else {
//     console.log("Not eligible, you have already gotten one")
// }

// Lession 6:the if...else statement for our game
// let firstCard = 10
// let secondCard = 7

// let sum = firstCard + secondCard + 4

//Write the conditional according to these rules:
// 
// 1.if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// 2.else if exactly 21 -> "wohoo! You've got a Blackjack! 🥳
// 3.else -> "You're out of the game! 😭
// if(sum <= 20){
//     console.log("Do you want to draw a new card? 🙂")
// } else if(sum === 21){
//     console.log("wohoo! You've got a Blackjack! 🥳")
// } else {
//     console.log("You're out of the game! 😭")
// }

// lession 7: Add the hasBackjack variable
// 
// let firstCard = 10
// let secondCard = 11
// let hasBlackjack = false

// let sum = firstCard + secondCard 

// if(sum <= 20){
//     console.log("Do you want to draw a new card? 🙂")
// } else if(sum === 21){
//     console.log("wohoo! You've got a Blackjack! 🥳")
//     hasBlackjack = true
// } else {
//     console.log("You're out of the game! 😭")
// }

// //cash out!
// console.log(hasBlackjack);


//Lession 8: Add the isAlive variable
// 
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 3 
// let hasBlackjack = false
// let isAlive = true
//1.Create a variable called isAlive and assign it to true
// 
// let isAlive = true
// Remove the duplicate declaration below
// let isAlive = false
//

// 
// 2. Flip it's value to false in the appropriate code black


// if(sum <= 20){
//     console.log("Do you want to draw a new card? 🙂")
// } else if(sum === 21){
//     console.log("wohoo! You've got a Blackjack! 🥳")
//     hasBlackjack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false // Flip the value to false
// }

// //cash out!
// console.log(isAlive);
// 
// 
// Lession 9: let's practice boolean conditions
// 
// console.log(4===3); // false
// console.log(5 > 2); // true
// console.log(12 > 12); // false
// console.log(3 < 0); // false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); // false

// Lession 10: Add the message variable
// // 
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// // 
// // 1. Declare a variable called message and assign its value to an empty string
// // 
// let message = ""
// // 
// // 2.Reassign the message variable to the String we're logging out

// if(sum <= 20){
//     // console.log("Do you want to draw a new card? 🙂")
//     message = "Do you want to draw a new card? 🙂"
// } else if(sum === 21){
  
//     message = "wohoo! You've got a Blackjack! 🥳"
//     hasBlackjack = true
// } else {
   
//     message = "You're out of the game! 😭"
//     isAlive = false // Flip the value to false
// }


// // log it out!//
//  console.log(message);


 //Lession 11: Link to stylesheet to css
//  Lession 12: Add basic  styling
//  Lession 13: Make the start button work
// 
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""

// // 
// // 2.Create a startGame() function. Move the conditional 
// // below (line 196-205) inside the body of the function
// // 
// function startGame() {
// if(sum <= 20){
//     message = "Do you want to draw a new card? 🙂"
// } else if(sum === 21){
//     message = "wohoo! You've got a Blackjack! 🥳"
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! 😭"
//     isAlive = false 
// }

// //2. Dispaly the message -el paragraph in a variable called messageEl.textContent
// // 

//  console.log(message);

// }


//Lession 14: Display the message
// 
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""

// // 
// // 1.store the message-el paragraph in a variable called messageEl
// let messageEl = document.getElementById("message-el");
// // 
// // 
// function startGame() {
// if(sum <= 20){
//     message = "Do you want to draw a new card? "
// } else if(sum === 21){
//     message = "wohoo! You've got a Blackjack! "
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! "
//     isAlive = false 
// }
// //2. Dispaly the message -el paragraph in a variable called messageEl.textContent
// let messageEl = document.getElementById("message-el");
// messageEl.textContent = message;

// //  console.log(message);

// }



// Lession 15: Display the sum
// 
// 
// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el");
// // 2.Store the sum paragraph in a variable called sumEL
// // let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

// function startGame() {
//     sumEl.textContent = "Sum: " + sum; // Display the initial
// if(sum <= 20){
//     message = "Do you want to draw a new card? "
// } else if(sum === 21){
//     message = "wohoo! You've got a Blackjack! "
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! "
//     isAlive = false 
// }

// //3. Render the sum on the page using this format -> "Sum: 14"
// let messageEl = document.getElementById("message-el");
// messageEl.textContent = message;

// sumEl.textContent = "Sum: " + sum;
//  console.log(sumEl.textContent);
//  console.log(message);

// }



// Lession 16: Display the Card
// 
// 
// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el");
// // 2.Store the sum paragraph in a variable called sumEL
// // let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
// // 3.Store the cards paragraph in a variable called cardsEl
// let cardsEl = document.querySelector("#cards-el");


// function startGame() {
//     sumEl.textContent = "Sum: " + sum; // Display the initial
//     cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
//  // Display the initial cards
// if(sum <= 20){
//     message = "Do you want to draw a new card? "

// } else if(sum === 21){
//     message = "wohoo! You've got a Blackjack! "
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! "
//     isAlive = false 
// }
// //3. Render the Cards on the page using this format -> "Cards: 10 4"
// let messageEl = document.getElementById("message-el");
// messageEl.textContent = message;

// sumEl.textContent = "Sum: " + sum;

// // 
// }

// Lession 17: New Card button
// 
// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard] // array- ordered list of items
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el");
// // 2.
// let sumEl = document.querySelector("#sum-el");
// // 3.
// let cardsEl = document.querySelector("#cards-el");


// function startGame() {
//     sumEl.textContent = "Sum: " + sum; // Display the initial
//     cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
//  // Display the initial cards
// if(sum <= 20){
//     message = "Do you want to draw a new card? "

// } else if(sum === 21){
//     message = "wohoo! You've got a Blackjack! "
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! "
//     isAlive = false 
// }
// //3. 
// let messageEl = document.getElementById("message-el");
// messageEl.textContent = message;

// sumEl.textContent = "Sum: " + sum;
// }


// Lession 18: Add to the sum when newCard is clicked

// function newCard() {

//     let card = Math.floor(Math.random() * 11) + 1;
//     sum += card;
//     cardsEl.textContent += ", " + card;
//     sumEl.textContent = "sum: " + sum;

//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21){
//         message = "Wohoo! you've got a Blackjack!";
//         hasBlackjack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false
//     }

//     messageEl.textContent = message;
// }

// Lession 19:Rename the startgame function
// 
// correction
// isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("Cards-el")
// .
// create a new function called startGame() that calls renderGame()

// function startGame() {
// renderGame()
// }

// function renderGame(){
// cardsEl.textContent = "cards: " + firstCard + " " + secondCard
// sumEl.textContent = "sum: " + sum
// if (sum <= 20) {
// message = "Do you want to draw a new Card?"
// }else if (sum === 21) {
// message = "you've got Blackjack!"
// }
// }

// Lession 20: Solving our cards problem with an array

// function startGame() {
// renderGame()
// }

// function renderGame(){
//     //render out firstCard and secondCard
// cardsEl.textContent = "cards: " + cards[0] + " " + cards[1] //arrary are called zero indexed
// //  render out all the cards we have
// sumEl.textContent = "sum: " + sum
// if (sum <= 20) {
// message = "Do you want to draw a new Card?"
// }else if (sum === 21) {
// message = "you've got Blackjack!"
// }
// }

// Lession 21: Intro to Arrays
// Array is a data structure that can hold multiple values
// let myArray = [1, 2, 3, 4, 5]
// 
// let featuredPosts = [ 
//  "check out my Netflix clone",
//  "Here's the code for my project",
//  " i've just relaunched my portfolio"
//   ]
//   console.log(featuredPosts.length); // 3
// 
//  create an array that lists your i.e experience,eduction, skills, and projects,
// The itesms of the array should be strings
// let mylinkinportfolio = [
// "Experience: 1 years in backend development",
// "Education: BSc in Computer Science",
// "Skills: JavaScript, Python, React",
// "Projects: Portfolio website, E-commerce app"
// ]

// Lession 22: Array indexes
// 
// let experience = [ "CEO at Scrimba", "Frontend developer at Xeneta", "people counter for Norstat" ]
// console.log(experience[0]); // CEO at Scrimba
// console.log(experience[1]); // Frontend developer at Xeneta
// console.log(experience[2]); // people counter for Norstat
// 
// Lession 23: Arraays with multiple data types
// 
// Array - ordered list of items - composite / complex data type

// let myArray = [1, 2, "string", true, null, undefined, { key: "value" }, [1, 2, 3]];
// 
// Create an array that describes yourself.use the three primitives data types you've learned about
// 

// It should contain your name (string),your age (number).and whether you like pizza (boolean)
// 
// let myProfile = ["John Doe", 25, true];

// console.log(myProfile[0,1,2]); // John Doe
// 
// Lession 24: Adding and removing items from arrays
// let myArray = [1, 2, 3, 4, 5];
// 
// let cards = [7, 4]
// cards.push(6)
// console.log(cards); 
// 
// push the newMessage to the messages array, and then log the array 

// let messages = ["Hey, how's it going?", "I'm great, thank you ! how about you?", "All good. Been working on my portfolio lately."
// ];

// let newMeassage = "Same here! "

// // push(newMeassage)

// messages.push(newMeassage);

// // console.log(messages);  
// // how can you remove the last message from the messages array?
// messages.pop(messages[3])

// console.log(messages); // 

// Lession 25: Creating the cards array
// 
// 
let firstCard = 10
let secondCard = 4
// 1.create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard] // array- ordered list of items
let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
// 
// 
// 
function startGame() {
renderGame()
}

function renderGame(){
    //2.Refer to the Cards array when rendering  out the cards
cardsEl.textContent = "cards: " + firstCard + " " + secondCard
sumEl.textContent = "sum: " + sum
if (sum <= 20) {
message = "Do you want to draw a new Card?"
}else if (sum === 21) {
message = "you've got Blackjack!"
}
 }