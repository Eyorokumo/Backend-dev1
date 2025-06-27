//when the user clicks the purchase button,render out

// "Something went wrong,please try again"in the paragraph
// that has the id="error"
// let errorEl = document.getElementById("error");
// function purchase() {
//     errorEl.innerText = "Something went wrong,please try again";
//     console.log(purchase);
// }

// correction 
let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase() {
    console.log('button clicked');
    errorParagraph.textContent = 'Something went wrong, please try again';
}
// Lession 6: Calculator Challenge
// see it in index.html or index.js