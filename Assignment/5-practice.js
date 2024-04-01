// Question - 1
// create a function using the function keyword that takes a string as an agrument
// and return the number of vowels in the string
// function countVowel(str) {
//     str = str.toLowerCase();
//     let count = 0;
//     for(let i = 0; i<str.length; i++) {
//         if(str[i] == 'a' || str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// let str = prompt("Enter the string :)");
// let count = countVowel(str);
// console.log("Nuber of vowels are: ", count);


// Question - 2
// same as above but using arrow function
// const countVowelArrow = (str) => {
//     str = str.toLowerCase();
//     let count = 0;
//     for(let i = 0; i<str.length; i++) {
//         if(str[i] == 'a' || str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// let str1 = prompt("Enter the string :)");
// let count1 = countVowelArrow(str1);
// console.log(`Number of vowels are: ${count1}`);


// Question - 3
// for a given array of number, print the square of each value using the forEach loop
// let arr = [2,3,4,5,6,7,8,9,10];
// let calculateSquare = (val) => {
//     console.log(val**2);
// }
// arr.forEach(calculateSquare)


// Question - 4
// we are given array of marks of students. Filter out of the marks of students that scored 90+
// let marks = [51,33, 91, 90, 95, 100, 99, 98, 1, 2];
// let arr = marks.filter((val) => {
//     return val>90;
// } )
// console.log(arr);


// Question - 5
// take a number n as input from user. create an array of number from 1 to n
// use the reduce method to calculate sum of all number in the array
// use the reduce method to calculate product of all numbers in the array
let n = prompt("Enter a number");
let arr = [];
for(let i = 0; i<n; i++) {
    arr.push(i+1);
}
console.log(arr);
const sum = arr.reduce((prev, curr) => {
    return prev + curr;
})
console.log(`The sum of the elements in the array is ${sum}`);

const mul = arr.reduce((prev,curr) => {
    return prev*curr;
})
console.log(`The multiplication of the elements in the array is ${mul}`);