// Loops in JS
// to execute a piece of code again and again till some condition is true

// 1. For Loop
// (var start; var condition check; updation of var)
// (initialization; stopping condition; updation)
for(let a = 1; a<=10; a++) {
    console.log("loop is running");
}
console.log("Loop has ended :)");

// Calculate Sum of 1 to 5
let sum = 0;
for(let count = 1; count<=5; count++) {
    sum += count;
}
console.log("Sum of 1 to 5: ", sum);
// if we want to use count (let) variable outside the for loop then it will show error

// Infinite Loop: where stopping condition never match,
// for(let i = 1; i<=1; i--) {
//     console.log("Infinite Loops :)");
// }

// 2. While Loop
let count = 5;
while(count--) {
    console.log("count is: ", count);
}

// 3. do while
do {
    console.log("It will run minimum 1 time");
    count++;
}while(count<0);

// 4. for - of loop
let fullName = "SANOJ";
// here ch is pointing to the first address of the fullName and going to next by itself till end
// acting as iterator
// Used for strings and array
let len = 0;
for(let ch of fullName) {
    console.log("Current ch: ", ch);
    len++;
}
console.log("Size of SANOJ string: ", len);

// 5. for - in loop
// used for objects
let student = {
    name: "Sanoj", 
    age: 20,
    cgpa: 9.16,
    isPass: true
}
for (let key in student) {
    console.log("Key is: ", key);
    console.log("Key value is: ", student[key]);
}


//Strings in JS
// string is sequence of characters 
let str = "SanojKumar";
// strings have inbuilt properties and methods

// str.length
console.log("str length is: ", str.length);

// indices starts with 0 and end with str.length - 1
console.log("Character at 0th index: ", str[0]);
console.log("Character at 5th index: ", str[5]);

// Template Literals
// A way to have embedded expression in strings
// `this is a template literal`
let sentence = `This is a template literal`; // special type of string
console.log(sentence);

// but whats the differnece
let obj = {
    item: "PEN",
    price: 10
};
console.log("the cost of ", obj.item, " is", obj.price, " price");

// if we want to take the output in single line
let output = `the cost of output ${obj.item} is ${obj.price} price`; // also called as String Interpolation
console.log(output);

let check = `This is a template literals ${1 + 2 + 5 + 10}`;
console.log(check);

// to print in the next line
console.log("This is first line\n", "This is second line");
console.log("This is infront of the line\t", "Afte the tab space");

// String Methods
// 1. str.toUpperCase() - to convert everything in uppercase
let str1 = "abc"
console.log("Before toUpperCase():", str1);
str1 = str1.toUpperCase(); // because it returns the new value, it does not change original value
console.log("After toUpeerCase():", str1);

// 2. str.toLowerCase() - to convert everthing in lowercase
let str2 = "SANOJ"
str2[0] = "K" // it will not make KANOJ because it is immutable
console.log("Before toLowerCase():", str2);
str2 = str2.toLowerCase(); // because it returns the new value, it does not change original value
console.log("After toLowerCase():", str2);

// 3. str.trim() - it removes whitespaces from starting and ending
let str3 = "   Sanoj check";
console.log("Before trim():", str3);
str3 = str3.trim();
console.log("After trim():", str3);

// 4. str.slice(start, end) // it return part of string, end is non inclusive and it is optional
let str4 = "Ye hai ek String"
console.log("str from 1 to 6: ", str4.slice(1, 6));
console.log("str from 5 to end: ", str4.slice(5));
// 5. str1.concat(str2) // joins str2 with str1
// 6. str.replace(searchVal, newVal) // replaces the searched values with new val
// 7. str.charAt(idx) // it will give the char at the particular index given as idx
