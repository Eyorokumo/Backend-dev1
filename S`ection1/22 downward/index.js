// Grab the welcome-el paragraph and store it in a variable called welcomeEL
let welcomeEl = document.getElementById("welcome-el");

// create two variables (name & greeting) that contain your name
// and the greeting we want to render on the page
// 
let name = "Harald Borgen";
let greeting = "Welcome back"
//

// Render the welcome message using welcomeEL.innerText
welcomeEl.innerText = "greeting " + name ;

// / Lession 23: Improve the message with String concatenation
// 
// 
// Add an emoji the end!😊
// WRITE YOU CODE HERE
// HINT:count = count + 1;
// 
welcomeEl.innerText =
welcomeEl.innerText + " 😊";

// 