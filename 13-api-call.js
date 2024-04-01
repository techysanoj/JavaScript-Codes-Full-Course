// Fetch API(application programming interface)
// The fetch api provides an interface for fetching (sending/recieving) resources.
// it uses REQUEST and RESPONSE objects.
// the fetch() method is used to fetch a resource (data).

// let promise = fetch(url, [options])
// if we are not using options then it uses default as get request

const url = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async ()=> {
//     console.log("Getting Facts");
//     let response = await fetch(url); 
//     console.log(response);
// } // here the data in response is different to understand so to understand these data we will use

// some terms
// AJAX - is a asynchrnous JS and XML
// JSON - is a javascript object notation
// json() - method: returns a second promise that resolve with the result of parsing the response body text as JSON.
// (input is JSON, output is JS object)

// overall when we use fetch(url) - it return a response in JSON format - then using json() method we convert it into JS object.

let data = [];

let text = document.querySelector("#fact-text");
let btn = document.querySelector("#facts");

const getFacts = async() => {
    let response = await fetch(url);  
    console.log(response); // JSON format
    data = await response.json(); // gives second prmosie - in  form of JS object
    let ind = Math.floor( Math.random() * 5 )
    text.innerText = data[ind].text;
}

btn.addEventListener("click", getFacts);


// Request and Response
// 1. HTTP Verbs - Hypertext transfer protocol - which type of request we are sending like GET, POST, PUT, DELETE etc.
// 2. Response status code - 200 means everthing is OK, etc
// HTTP response header also contain details about the response, such as content type, HTTP status code, etc.
