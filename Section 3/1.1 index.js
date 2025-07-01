// Section 3: // Lession 31:
// 
let sentence = ['Hello', 'my', 'name', 'is', 'per',]
let greetingEl = document.getElementById('greeting-el')

//Render the sentence in the greetingEl paragraph using a for loop and . textContent

// function greet() {
//     let greeting = ''
//     for (let i = 0; i < sentence.length; i++) {
//         greeting += sentence[i] + ' '
//     }
//     greetingEl.textContent = greeting
// }
// 
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + ' ' 
}