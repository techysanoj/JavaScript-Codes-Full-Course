// for printint anything
console.log("Apna Sanoj");
console.log('JAVASCRIPT KA COURSE');

// Variables
fullname = "Sanoj" // string value
console.log(fullname);

age = 100 // number value
console.log(age);

price = 999.999 // number value
console.log(price)

x = null // special value - we know what inside in the value x but it is empty
console.log(x)

y = undefined // difference with null - do not know what inside in the value y
console.log(y)

isNull = false
isNull2 = true
console.log(isNull);
console.log(isNull2);

// we can store anything in any variable name - dynamically typed language
fullname = 100000000 // full name has previously 'SANOJ'
console.log(fullname);

// Follow Camel Case - while writing variable name example -  fullName, isFollow, hasChecked

// we can define variable using let, const, var keyword.
// generally we use let and const keyword

var fullName1 = 'Sanoj'
var age2 = 24
var age2 = 97 // var can be updated and redeclared
var totalPrice1 = 1000
console.log(age2);

// const is a block space variable
const first = 10
// first = 20 // can not be redeclared and update
console.log(first)

// let is a block space variable
let fullName = 'Sanoj'
let age1 = 24
let totalPrice = 1000
console.log(fullName);
let a; // we can leave it blank
// const a; // but we can not leave const as a blank
{
    let a = 20
    console.log(a)
}
{
    let a = 40
    console.log(a)
}

// Data Types 
// 1. Primitive - number, string, boolean, undefined, null, BigInt, symbol
// number
let dob = 2002
console.log(typeof(dob))

let priceP = 160.10
console.log(typeof(priceP))

// string
let fullNameHai = 'Start'
console.log(typeof(fullNameHai))

// boolean
let isCheck = true
console.log(typeof(isCheck))

// undefined
let ch = undefined
console.log(typeof(ch))

// null
let ab = null
console.log(typeof(ab))

// BigInt
let x1 = BigInt("2002") // it will have n at the end
console.log(x1 + " " + typeof(x1))

let y1 = Symbol("Hello!")
console.log(y1)

// 2. non Primitive - objects like arrays and functions
// objects like collection of values - stored in form of key : value pairs
const student = {
    fullName : "Sanoj",
    age: 21,
    cgpa: 9.16,
    isPass: true
}
console.log(student);
console.log(typeof(student));
console.log(student["fullName"]); // to access particular value

// to access key value
console.log(student["age"])
console.log(student.age);
console.log(student.cgpa);

// to update values in an object
student.age = student.age + 1;
console.log(student.age);

