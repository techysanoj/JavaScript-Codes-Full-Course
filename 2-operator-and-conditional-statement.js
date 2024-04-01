/* console.log("COMMENTS") - (//) Used for single line comments
 ye comments hai - ye execute nhi hoti */

// Operators in JS

// 1. Arithmatic Operaotrs + , -, *, /
let a = 10;
let b = 15;
console.log(a + b);
let c = a + b;
console.log("a+b = ", c);
console.log("a-b = ", a - b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);

// 2. modulus operator - means remainder value after dividing the numerator by denomator
console.log("a%b = ", a%b);

// 3. exponentiation - for finding out the power , a^b = a**b
console.log("a^2 = ", a**2);

// 4. Unary operator, increment and decrement
a++;
console.log("a = ", a);
b = ++a;
console.log("b = ", b);
// post a++ and pre ++a increment, same as post and pre decrement

// 5. Assignment Operator =, +=, -=, *=, **=
let d = 10;
d += 10; // it means d = d + 10;
console.log("d = ", d);
d -= 10; // it means d = d - 10;
console.log("d = ", d);
d *= 10; // it means d = d * 10;
console.log("d = ", d);

// 6. comparision Operator ==, !=, ===(equal to & type), !==(not equal to & type)
// >, >=, <=, <
let e = 10;
let f = 20;
console.log("e == f", e == f);
f = 10;
console.log("e==f", e == f);
console.log("e!=f", e!=f);
console.log("e>f", e>f);
console.log("e<f", e<f);

// for string and number comparision

let g = 100;
let h = "100"; // JS will automatically convert it into number
console.log("g == h", g==h); // it will print true
// if we want to check data type is also equal then we will use ===
console.log("g === h", g===h); // it will pring false
console.log("g !== ", g!==h);

// 7. Logical Operator &&, ||, !
// && true && true = true, false && false = false, true && false = false;
let i = true;
let j = false;
console.log("i && j = ", i && j);
console.log("i || j = ", i || j);
console.log("i = ", !i); // ! change the current boolean value to opposite


// Conditional Statement
// 1. if statement
let mode = true;
if(mode == true) {
    console.log("If statement executed :)");
}
let age = 100;
if(age > 18){
    console.log("age sahi hai aap capable hai !!!");
}

// 2. if else statement
// if if statement is executed then it will not go to else statement
mode = false;
if(mode == true) {
    console.log("if statement executed");
} else {
    console.log("else statement executed");
}
let num = 10;
if(num % 2 == 0) {
    console.log(num, " Number is Even");
} else {
    console.log(num, " Number is Odd");
}

// 3. if else if else 
let num2 = 5;
if(num2%2 == 0 ) {
    console.log(num2, " Number is even ");
}
else if(num2 % 2 == 1 && num2>2) {
    console.log(num2, " Number is prime ");
} else {
    console.log(num2, " Number is odd");
}

// Ternary Operator
// condition ? true output: false output
let age2 = 20; // compact if else statement
let result = age2 > 18? "Sahi Hai" : "Galat Hai";
console.log(result);
console.log(age2 > 25? "Sahi Hai" : "Galat Hai");

// MDN Docs - to read about anything related to web docs

alert("hello !!") // for poping out in the window
prompt("Hello !!") // same as alert but it also takes some input 
