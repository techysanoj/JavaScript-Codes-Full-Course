// get a input number and check if it is multiple of 5 or not

// let num = prompt("Enter a number: ");
// if(num%5 == 0) {
//     console.log(num, " is multiple of 5");
// } else{
//     console.log(num, " is not multiple of 5");
// }

// Write a code which can give grades to students according to their scores

let score = prompt("Enter your score between 1 - 100: ")
if(score >= 90 && score <=100) {
    console.log("Grade: A");
} else if(score >= 70 && score <= 89) {
    console.log("Grade: B");
} else if(score >=60 && score<=69) {
    console.log("Grade: C");
} else if(score>=50 && score<=59) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

