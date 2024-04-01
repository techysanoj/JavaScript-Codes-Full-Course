// Question - 1
// create a toggle button that changes screen to dark mode when clicked and light mode when clicked again

let body = document.querySelector("body");

let newBtn = document.createElement("button");
newBtn.innerText = "Click to change the mode :)";
newBtn.style.fontSize = "30px"
newBtn.style.border = "5px solid";
newBtn.style.color = "red";
newBtn.style.margin = "100px";
newBtn.style.height = "100px";
newBtn.style.width = "500px";
body.appendChild(newBtn);

let currMode = "light" 

let text = document.querySelector("h1");
text.style.margin = "50px"


newBtn.addEventListener("click", () => {
    if(currMode == "light") {
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        newBtn.style.color = "green";
    } else {
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        newBtn.style.color = "blue";
    }
    console.log(currMode);
})
