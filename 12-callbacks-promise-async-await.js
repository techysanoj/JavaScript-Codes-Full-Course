// Sync in JS
// Synchronous - Synchronous means the code runs in a particular sequence of instruction given in the program
// Each instruction waits for the previous intruction to complete its execution
// Example - synchronous programming
// console.log("one");
// console.log("two");
// console.log("three"); 


// Asynchronous Programming
// Due to synchrounous programming, sometimes imp instruction get blocked due to some previous instruction, which causes
// delay in the UI.
// Asynchronous code execution allows to execute next intruction immediately and does not block the flow.
// function hello() {
//     console.log("hello bbb");
// }
// setTimeout(hello, 2000) // timeout - 2000ms
// console.log("four"); // it will not wait 2s it will be printed immediatly and after 2s hello function will be used
// console.log("five");


// Callbacks
// A callback is a function passed as an arguments to another function
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }
// //calculator(10, 15, sum); - we can also use arrow function
// calculator(10, 15, (a,b) => {
//     console.log(a+b);
// })


// Callback Hell
// Callback Hell - nested callbacks stacked below one another forming a pyramid structure. (pyramid of doom);
// This style of programming becomes difficult to understand and manage

// nesting 
// let age = 19;
// if(age>=18) {
//     if(age >= 60) {
//         console.log("senior");
//     }else {
//         console.log("middle");
//     }
// } else {    
//     console.log("child");
// } - here it is a nested if else (means if else inside if else)
// same will be for nested loop - loop inside loop

// Example
// function getData(dataId, getNextData) {
//     setTimeout(()=> {
//         console.log("data = ", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// we will get our data of all three id at same time after 2s
// getData(1);
// getData(2);
// getData(3);
// to execute after some time - we will use another function to send another callback

// so if we write like this - it makes callback hell
// getData(1, () => {
//     console.log("getting data - 2");
//     getData(2, () => {
//         console.log("getting data - 3");
//         getData(3, () => {
//             console.log("getting data - 4");
//             getData(4);
//         });
//     });
// });

// to solve this problem we will use - PROMISES
// Promises - is for eventual completion of task. It is an object in jS. 
// It is a solution to callback hell
// let promises = new Promise((resolve, reject) => {...}) - function with 2 handler
// resolve and reject are callbacks provided by JS

// promise will have three state - 
// 1. Pending - The result is undefined or the work is not done yet
// 2. Fulfilled(resolved) - The result is a value or the work is fulfilled and completed, resolve(msg);
// 3. Rejected - The result is an error object or the work is rejected , reject(msg);

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("success"); // it will show fulfilled - success
//     //reject("the error occurred - sanoj hey"); // it will show - Uncaught (in promise) the error occurred - sanoj hey
// });

// in generic programming API returns promises 
//example 
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data = ", dataId);
//             resolve("Success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// let result = getData(124);
// console.log(result); // it will show initially pending state because getData() returned me a promise
// after 5 second result will have fulfilled state means it send the data correctly


// .then() and .catch()
// if the promise is fulfilled then we will use promise.then() - promise.then((res) => {...})
// if the promise is reject then we will use promise.catch() - promise.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success"); // it will show fulfilled - success
//         //reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled ", res); // here res will be a msg - "success";
// });
// promise.catch((err) => {
//     console.log("rejected the promise ", err); // here err will be a msg - "error";
// });


// Promise Chaining
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("get data1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });
// console.log("get data2.....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// }); 

// if we created the funciton only once and get data1 then there will be normal flow 
// but here we created two function for seperate promise
// then after the p1 statement it will go to p2 statement without waiting for the p1.then statement 
// so to solve this we will use promiseChaining

// using  - we use then in then
// console.log("get data1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("get data2.....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     console.log(res);
//     }); 
// });


// now solve callback hell problem using promises
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data = ", dataId);
//             resolve("Success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }
// // promise chain
// console.log("fetching data");
// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
// });

// we can do this using
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// we can also do this using
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })


// Async Awaits
// Async function alwyas return a promise
// async function myFunc() {...}

// Example
async function hello() {
    console.log("HELLO"); 
}
// here hello() function will return a promise function

// Awaits
// await pauses the execution of its surrounding async function until the promise is settled
// we can use await in async function

// example
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
};

//await api(); // it will show error because api is not an async function
// async function getWeatherData() {
//     await api(); // here we did not use .then .catch statements we used async to create a new function in which we used the promise function with the awaits
// }
// now if we want multiple data for the same we will use 
async function getWeatherData() {
    await api(); // 1st call - after this call completed then we will move to second call
    await api() // 2nd call
}

// now we can use to solve the problem callback hell and promise chain with the help of this
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data = ", dataId);
            resolve("Success");
            if(getNextData) {
                getNextData();
            }
        }, 2000);
    });
}
// create a async function
// async function getDataFlow() {
    // console.log("getting data 1");
    // await getData(1);
    // console.log("getting data 2");
    // await getData(2);
    // console.log("getting data 3");
    // await getData(3);
// }
// As we can see here we are doing seperate call for getDataFlow() 
// so to get rid of this
// we use IIFE - Immediately Invoked Function Expression
// IIFE - is a function that is called immediately as soon as it is defined, function with no name

// (function () {....}) (); - syntax for  the IIFE function
// (() => {....}) ();
// (async function () {.....}) ();

// create the getDataFlow using IIFE
(async function () {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
}) ();