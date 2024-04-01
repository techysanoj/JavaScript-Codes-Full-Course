// Function in JS
// block of code that performs a specific task, can be invoked whenever needed.
// function_name() with () - parenthesis

// how to write a function 
// function definition - function fun_name() { --- do some work}
// function definition with parameter - function fun_name(para1, para2,...) {--}
// function call - fun_name();

// helping to reduce number of lines of code - using the function
// helps to reduce code redundancy

function myFunction1() {
    console.log("Welcome to my world");
    console.log("We are doing function and methods");
}

// after calling this it will show output
myFunction1(); // function call/invoke

function myFunction(msg) { // function having parameter
    console.log(msg);
}
myFunction("I love you!!!"); // calling with sending parameter(argument)

// create a function calculating sum of 2 numbers
function sum(a, b) {
    console.log(a + b);
}

sum(5, 10);

// function can return also
function sumReturn(a,b) {
    s = a + b;
    return s; // after this statement nothing will work
    console.log("after return ");
}
s = sumReturn(10, 20); // saving the returned value
console.log(s);

// function parameter will act as local variable
/* 
function sum(a, b) {
    here a and b are local variable for the function sum.
    block scope variable
}
*/

// Arrow function
// compact way of writing a function

const sum1 = (a,b) => { // here sum1 is a variable storing the definition of function
    return a + b;
}
console.log(sum1); // it store function definition

console.log(sum1(50,100));

let printHello = () => {
    console.log("Hello !!!!");
}
console.log(printHello());


// forEach loop in Array - method
// CallbackFunction : here it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.
// when a function is used for specific object then it is called a method.
/*
arr.forEach(callBackFunction)
*/
// means function can act as parameter and can be returned - can be said call back function

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) { // val - value at each index
    console.log(val);
})
// we can do same thing
// we can use multiple parameter like value, index, array it self
arr.forEach((val, index, arr) => {
    console.log(val, index, arr);
})

// Higher order function/methods - those function which uses other function as parameter and return a function
// so forEach is a higher order function/methods.


// Map method
// create a new array with the result of some operation. The value its callback return
// are used to form new array
// difference from forEach is that Map returns a new array
// arr.map(callbackFn(value,index,arr))
let nums = [5,10,15,20];
nums.map((val) => {
    console.log(val); // here it simply print the value
})

let newNums = nums.map((val) => {
    return val*val; // now it is returning the value;
})
console.log(newNums);


// Filter Method - creates a new array of elements that give true for a condition/filter
let newArray = arr.filter((val) => {
    return val%2 ===0; // here it is a condition
})
console.log(newArray);


// Reduce Method - 
// performs some operation and reduces the array to a single value. It returns that single value
let array1 = [1,2,3,4];
let sum2 = array1.reduce((prev, curr) => {
    return prev+curr; // initail prev = 1, curr = 2 then 1 + 2 = 3 will be stored in prev and curr will be 3
})
console.log(sum2);

let maxi = array1.reduce((curr1, curr2) => {
    return curr1 > curr2 ? curr1 : curr2;
})
console.log(maxi);