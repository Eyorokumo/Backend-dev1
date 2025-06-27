//  document.getElementById("count-el").innerText = 5;

// let count = 0;
// 
//c+k+c for comments

// let firstBatch = 5;
// let SecondBatch = 8;
// let count = firstBatch + SecondBatch;

// console.log(count);

// let myAge = 20;
// console.log(myAge);

// let myAgeInoldYears = myAge * 2;
// console.log(myAgeInoldYears);
// not correct below
// let myAge = 1;
// let dogAge = 7;
// let humanDogRatio = myAge * dogAge;
// console .log(humanDogRatio);

// let count = 5

// //incrementing the count variable
// count =  count + 15; 

// //decrementing the count variable
// count = count - 2;

// console.log(count);

// multiplying the count variable
// count = count * 2;
// short test//
// create a variable, bonuspoints. initialize it as 50. increase it as 100
// Decrease it down to 25,then finally increase it to 70
//console.lo the value after each step 
// explain what is happening in each step
// let bonusPoints = 50;
// bonusPoints += 100; // increase by 100, now bonusPoints is 150
// bonusPoints -= 25; // decrease by 25, now bonusPoints is 125
// bonusPoints += 70; // increase by 70, now bonusPoints is 195
// console.log(bonusPoints); // log the final value, which is 195
// 
// correction


//Section 1:Build a passenger counter app
// lession 7: Adding a button in HTML


//Section 1:Build a passenger counter app
// lession 8: The onclick event listener

// first we need to initialize the count 0
// Listen for the clicks on the increment button
// Increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


// function increment() {
// console.log("The button was clicked");
// }

// Section 1:Build a passenger counter app
// lession 9: using functions to write less code
// 
// 
// setting up the car race

// function countdown() {

// console.log("5");
// console.log("4");
// console.log("3");
// console.log("2");
// console.log("1");
// }
// countdown();
//Go!
// players are running the race
// Race is finished
// 
// Get ready for a new race
//  countdown();
// 
// 
// lession 10: write my our function
//create a function (markupgain)that logs out the number 42 to the console
// call /invoke the function
// function markupGain() {
//     console.log(42);
// }
// markupGain();
//lession 11: write a function that logs the sum
// 

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// //create a function that logs out the sum of all the lap times
// function logLapTime() {
//     // let totalTime = lap1 + lap2 + lap3;
//     // console.log(totalTime);
//     console.log(lap1 + lap2 + lap3);
// }
// // call the function to see the result
// logLapTime();
// lession 12: write a function that increments 
// 
// let lapsCompleted = 0;

// // create a function that increments the lapsCompleted variable with one
// // run it three times
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
// }

// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// lession 13:increase on the on clicks
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked(log it out)
// change the count-el in the HTML to reflect the new count
// let count = 0;
// function increment() {
// count = count + 1;
// console.log(count);
// document.getElementById
// ("count-el").innerText = count;
// }

// lession 14: Display the count
// 
// using camelCase
// let countEl = document.getElementById("count-el"); //pass in argument to getElementById
// console.log(countEl);

// let count = 0;
// function increment() {
//     count = count + 1;
//     console.log(count);
//     countEl.innerText = count; // update the text content of the element
// }

// lession 15: The Document Object Model (DOM)
// 
// /The Dom allows us to manipute the HtML document using Javascript
// The DOM is a programming interface for web documents
// the DOM represents the document as a tree od structured nodes
// examples of  th Dom code:
//document.getElementById("count-el").InnerText = 5;
// 
// 
// Lession 16: Display the count with innerText
// 
// grab the count-el element ,store it in a countEl variable
// let count = 0;

// function increment(){
// count = count  + 1;
// // set countEl's innerText to the count
// document.getElementById("count-el").innerText = count;

// }
// 
//Lession 17: create the save button
// 
// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }
     
// //1. create a function,save(),which logs out the count when it's called
// //  function save() {
// //     console.log("Saved: " + count);
  
// //     //2. create a variable that contains the count in the string format
// //     // let countStr = count + " - ";
// //     // //3. render the countStr in the save-el element
// //     document.getElementById("save-el").
// //     innerText += countStr;
// //     //4. reset the count to 0
// //     count = 0;
// //     countEl.innerText = count;
// // }
// function save() {
//     console.log("count")
// }


// 
// 

// 
// 
// 

//Lession 18: What is a String?
// 
// A string is a data type that represents text
// strings are written with quotes
// strings can be  concatenated using the + operator

// Lession 19:  Write your first string variable
// 
// let username"per"
// 
// console.log

// let username = "Audio Crispy";
// // create a variable, message, that stores a string: "You have three new notifications"
// let message = "You have three new notifications";
// console.log(message);
// // create a variable,messageToUser, that contains the message and the username
// // let messageToUser = username + ", you have three new notifications";
// // console.log(messageToUser);
// // // create a variable, messageToUser, that contains the message and the username
// let messageToUser = "You have three new notifications from " + username;
// // console.log(messageToUser);
// console.log(username);
// 
// let username ="per";
// let message = "you have three new notifications";

// let messageToUser = message + ", " + username +
// "!";

// console.log(messageToUser);
// create a vaiable, messageToUser,that contains the message we have logged
// 
// 
// Lession 20: Log a greeting to the console
// 
// challenge: create two variables, name and greeting . The name  variable should store your name ,
// and  the greeting should store e.g. "Hi ,my name is Audio Crispy"
// 
// let name = "Audio Crispy";
// let greeting = "Hi , my name is"
// greeting = greeting + " " + name + "."; // concatenate the greeting and name variables
// console.log(greeting);
// 
// create a thrid variable ,mygGreeting, that conctatenates the two strings
// log myGreeting to the console
// let myGreeting = greeting + " My name is " + name + ".";
// console.log(myGreeting);
// 
// 
// Lession 21: Strings Vs Numbers
// strings are text, numbers are numbers
// strings are written with quotes, numbers are not
// strings can be concatenated using the + operator, numbers can be added using the + operator
// 
// let name = "45";
// let greeting = "Hi , my name is"
// greeting = greeting + " " + name + "."; // concatenate the greeting and name variables
// console.log(greeting);

// let points  = 4;
// let bonusPoints = "10";
//  let totalbousPoints = points + bonusPoints; // this will concatenate the two variables
// console.log(totalbousPoints); // this will log "410" to the console
// 
// console.log(4 + 5); // this will log "9" to the console
// console.log("2" +"4"); // this will log "24" to the console
// console.log("5"+1)// this will log "51" to the console
// console.log(100 + "100"); // this will log "100100" to the console
// 
// Lession 22: Render a Welcome Message
// 
// Lession 23: Improve the message with String concatenation
// 
// 
//Lession 25: Create a save Feature
// 1. Grab the Save-el paragraph and store it in a vairable called saveEl
// let countEl = document.getElementById("count-el");
// let count = 0;


// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }
     
// function save() {
//     //2.Create a variable that contains the both the count and the dash separator, i.e "12-31-2"
//     let countStr = count + " - ";
//     let saveEl = document.getElementById("save-el");

//     // saveEl.innerText += countStr;
//     //
//     count = 0
    
//     // 3. Render the variable in the saveEl using innerText
//     // NB: make sure to not delete the existing content of the paragraph
//     saveEl.innerText += countStr;
   
//     console.log("count")
// }



// correction page
// 
// 
// let saveEl = document.getElementById("save-el");
// let countEl = document.getElementById("count-el");
// let count = 0;

// console.log(saveEl); 

// function increment() {
// count += 1;
// countEl.textContent = count;}

// function save() {
// let countStr = count + "-";
// saveEl.textContent += countStr;
// count = 0;
// countEl.textContent = count;

// console.log("count");
// }
// 
// 
// 
// Lession 26:  Debugging online
// 
// Debugging is the process of finding and fixing errors in your code
// and in mdn docs
// 
// Lession 27: Set the count to 0
// 
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl); 

function increment() {
count += 1;
countEl.textContent = count;}

function save() {
let countStr = count + "-";
saveEl.textContent += countStr;
//below lies the code
count = 0;
countEl.textContent = count;

console.log("count");
}

// Lession 28: Congrats & recap