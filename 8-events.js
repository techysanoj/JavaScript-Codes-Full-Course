// Events
// The change in the state of an object is known as event
// Events are fired to notify code "interesting changes" that may affect code execution

// mouse events (click, double click, etc)
// keyboard events (keypress, keyup, keydown, etc)
// form events (submit etc)
// print event and many more

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => { // here we created a function for the event handler
//     console.log("Button 1 was clicked");
//     let str = "SANOJ";
//     console.log(str + "  HAPPY");
// }

// if there are two type of event handler 1 - inline , 2 - js code . priority is js code handler
// if we create multiple handler the last one works


// Event objects
// it is a special object that has details about the event.
// all event handler have access to the event object's properties and methods
// node.event = (e) => { handle here } here e - e.target, e.type, e.clientX, e.clientY

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


// Event Listeners - for one event multiple function can be done
// node.addEventListener(event, callback)  here call back - can be event handler
btn1.addEventListener("click", (evt) => {
    console.log("button 1 was clicked");
    // console.log(evt);
    // console.log(evt.type);
})
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked 2"); // here we can use same event for two different function
})
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked 3"); // here we can use same event for two different function
})
let callback4 = (event) => {
    console.log("button 1 was clicked 4");
}
btn1.addEventListener("click", callback4)

// node.removeEventListener(event, callback) - to remove event listener
btn1.removeEventListener("click", callback4);
