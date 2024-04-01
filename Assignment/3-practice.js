// 1. print even number from 0 to 100
// for(let i = 0; i<=100; i++) {
//     if(i%2 == 0) {
//         console.log(i);
//     }
// }

// 2. Create a game where you start with random game number 
// Ask the user to keep guessing the number until user enters correct value

// let randomGameNumber = 159;
// let guessByUser = prompt("Guess the number: ");
// while(guessByUser != randomGameNumber) {
//     guessByUser = prompt("Guess Again: ");
//     if(guessByUser == randomGameNumber) {
//         console.log("Hurray you guessed it rights !!!!");
//         break;
//     }
//     console.log("Wrong guess !!!!");
// }

// 3. Prompt the user to enter their full name. Generate a user name
// for them based on the input. Start with @, followed by their full name and ending
// with the fullname length
let fullName = prompt("Enter your full name:");
console.log('@'+fullName+fullName.length);
