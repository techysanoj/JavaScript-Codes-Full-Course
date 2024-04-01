// Question - 1
// create a new button element. Give it a text "click me",
// bg color - red, text color - white
// insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
newBtn.style.margin = "30px";
let body = document.querySelector("body");
body.prepend(newBtn);


// Question - 2
// create a <p> tag in html, give it a class and some styling
// now create a new class in CSS and try to append this class to the <p> element.
// did you notice, how you overwrite the class name when you add a new one \\?
// solve this problem using classlist

let para = document.querySelector("p");
let paraAtt = para.getAttribute("class");
//para.setAttribute("class", "newContent"); // as it changes the class name of the given para and applied all the styles of those class in the css file

// using classList
para.classList.add("newContent"); // now this method add the new class in the classList of the para
console.log(para); // it will show 2 classes, 1 - content, 2 - newContent