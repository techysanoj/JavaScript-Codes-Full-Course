// 3 musketeers of Web Dev
// html - structure
// css - style
// js - logic

console.log("DOM Lecture");


//Window Object
// Window object represents an open window in a browser. It is browser's object
// not javascript object and is automatically created by browser.
// It is a global object with lots of properties and methods.

window.console.log("Hello") // it is window funtion of window object


// Dom
// when a web page is loaded, the browser creates a document object model(DOM) of the page
// all html code/element can be accessed in JS
// a new document object is created inside the window object in which all html code is present
console.log(window.document); // it directly prints the html version and all
console.dir(window.document); // it prints proper methods and objects and all

// overall window_object -> document_object -> all html code
// window_node -> document_node-> html_node -> head_node, body_node, and so on
console.dir(document.body); // it shows all the body content on the html

// we can change dynamically html tag
document.body.childNodes[1].textContent = "HELLO SANOJ"; // here we have change the main heading of the body tag to HELLO SANOJ


// DOM manipulation

// Accessing/Selecting with ID
let access = document.getElementById("heading1"); // it return the heading value:::: we got this using getElementById
console.dir(access);

// Accesing/Selecting with Class
let access2 = document.getElementsByClassName("paraClass"); // return html class by same class Name
console.dir(access2);

//Accessing/Selecting with Tag
let access3 = document.getElementsByTagName("button"); // it also retun html collection of same tag
console.dir(access3);

//Accessing/Selecting using Query Selector
// we can pass id/class/tag

// using tag
// let element = document.querySelector("button"); // it return first element
// console.dir(element);
// let elements = document.querySelectorAll("button"); // it return all node list
// console.dir(elements);

// using class
// let element = document.querySelector(".paraClass"); // it return first element
// console.dir(element);
// let elements = document.querySelectorAll(".paraClass"); // it return all node list
// console.dir(elements);

// using id
// let element = document.querySelector("#heading"); // it return first element
// console.dir(element);
// let elements = document.querySelectorAll("#heading"); // it return all node list
// console.dir(elements);


// DOM Manipulation
// Properties

// tagName: return tag for element nodes
// let element = document.querySelector("#heading");
// console.dir(element.tagName);

// access children using .children
// let bodyChild = document.querySelector("body");
// console.dir(bodyChild.children[4]); // it will show button in the console
// overall we are using these for navigation 

// innerText: return the text content of the elements and its children
// let div = document.querySelector("div");
// console.dir(div.innerText); // it will all text of it and its children

// innerHTML: return the html content with text
// console.dir(div.innerHTML);
// div.innerText = "Hello Sanoj with Cuties";
// div.innerHTML = "<i>Hello Sanoj with Cuties</i>"; // made the content itallic
// console.dir(div.innerHTML);

// textContent: return textual content even for hidden elements
// let div = document.querySelector("div");
// console.dir(div.children[0]);
// console.log(div.innerText); // it will show only one Heroes Heading because othe one is hidden
// console.log(div.textContent); // it will show all the textContent also those which are hidden


