// Classes and Objects

// Object
// A javascript object is an entity having state and behavior (properties and method)

const student = {
    fullName: "Sanoj",
    cgpa: 9.10,
    printMarks: function () {
        console.log("CGPA = ", this.cgpa);
    },
}

// Prototype
// reference to an object 
// JS object have a speacial property called prototype

let arr = ["apple", "mango", "banana"];
console.log(arr); // it will have some prototype 
// it will have push, pop, and all - called prototype

// const employee = {
//     calTax1() {
//         console.log("employee tax rate is 100%");
//     },
// } 
// an easy way to write function in an object

const salary = {
    salary: 500,
    checkSalary() {
        console.log("Salary is ", this.salary);
    }
}

const member = {
    name: "Sanoj",
}

// now to use salary prototype or salary function in member we will use protoype creation
// we can set prototype using __proto__
member.__proto__ = salary;
console.log(member); //now member will have a function chechSalary() in its prototype

const member1 = {
    name: "techy",
    checkSalary() {
        console.log("Salary is 10%");
    }
}
member1.__proto__ = salary; // as member1 initially has checkSalary function then member1 checkSalary() function will work
console.log(member1);
// if object and prototype have same method, object's method will be used 


// Classes
// class is a program code template/blueprint for creating objects
// those object will have some state (variables) & some behavior (function) inside it

// basic template to make class
// class myclass{
//     constructor() {},
//     myMethod() {

//     }
// }
// let myObj = new myClass(); 

class toyotaCar{
    constructor(brand) { // we have created our own constructor
        this.brand = brand;
    }
    start() {
        console.log("START");
    }
    stop() {
        console.log("STOP");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}
let fortuner = new toyotaCar(); // it will be an object
fortuner.setBrand("fortuner");
let nexus = new toyotaCar();
nexus.setBrand("nexus");
let tata = new toyotaCar("tata");


// Constructor() method - we can our own constructor using constructor keyword
// automatically invoked by new - fortuner = new toyotaCar() here automatically invoked via new keyword
// initiallizes object 


// Inheritance in JS
// inheritance is passing down properties and methods from parent to child class
// class parent {
// }
// class child extends parent{
        // here child class inheriting parent properties  and methods
// }
class parent{
    hello() {
        console.log("hello from parent class");
    }
}
class child extends parent {
}
let objChild = new child();

class person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "Homo Sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}
class engineer extends person {
    constructor(branch) {
        console.log("enter child constructor");
        super(); // to invokes parent constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("work");
    }
}

//let sanoj = new engineer("software engineer"); // it will show error
// if parent and child class have same function then child class function will be used - called as Method Overriding


// Super Keyword
// super keyword is used to call the constructor of its parent class to access the parents properties and methods
// super(args) - calls parents's constructor
// super.parentMethod(args) - calls parent's methods

// to solve the error - Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new engineer
let sanoj = new engineer("software engineer");
// if we want to use variable of child class to parent class we can use via super(argument)

class person1{
    constructor(name) {
        this.name = name;
    }
    fun1() {
        console.log("Function 1");
    }
}

class human1 extends person1 {
    constructor(name){
        super(name); // here we have passed the information to the parent
    }
    work() {
        super.eat(); // if we want to call parents function to do some work
        console.log("work");
    }
}
let sanoj1 = new human1("SANOJ");


// Error Handling - to handle error
// for this we use 
// try-catch
// try {
//     .. normal code
// } catch(err) { // err is error object
//     .. handling error
// }

let a = 5;
let b = 10;
console.log(a);
console.log(b);
try{
    console.log(c);
} catch(err) {
    console.log(err); // it will show the error
}
 // console.log(c); if we have any error in this line then we will use try catch
