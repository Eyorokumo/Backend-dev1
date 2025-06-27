let num1 = 8
let num2 = 2
document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2

//1.create four functions: add(), subtract(), divide(), multiply();
// // each function should perform the correct calculation on num1 and num2
// 2.call the correct function when the user clicks on one of the buttons
// // 1. Add an event listener to each button that calls the corresponding function
// // for example, when the user clicks on the "Plus" button, it should call the add() function
// // 2. Each function should perform the correct calculation on num1 and num2
// 3.perform the given calculation using num1 and num2
// 4. Render the result in the calculation in the paragraph with the id="sum-el"
// 
// E.g. if the user clicks on "Plus"button,you should render 
// "Sum:10"(since 8 + 2 = 10) in the paragraph with the id="sum-el"
// 
// let sumEl = document.getElementById("sum-el");

// function add() {
//     let sum = num1 +
//  num2;
//  document.getElementById("sum-el").textContent = "Sum: " + sum;
//  }
// // 
// function subtract() {
//    let difference = num1 - num2;
//   document.getElementById("sum-el").textContent = "Difference: " + difference;
// }

// function divide() {
//     let quotient = num1 / num2;
//     document.getElementById("sum-el").textContent = "Quotient: " + quotient;
// }

// function multiply() {
//     let product = num1 * num2;
//     document.getElementById("sum-el").textContent = "Product: " + product;
// }

// correction time
// 
let sumEl = document.getElementById("sum-el");

function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
};

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Difference: " + result;
}
function divide() {
    let result = num1 / num2;
    sumEl.textContent = "sum: " + result;
}
function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Product: " + result;
}

