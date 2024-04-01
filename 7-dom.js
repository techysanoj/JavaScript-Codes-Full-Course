// Dom manipulation

let div = document. querySelector("div");
console.log(div);

let id = div.getAttribute("id"); // to get the attribute
console.log(id);

let nameAtt = div.getAttribute("name");
console.log(nameAtt);

// let para = document.querySelector("p"); // here para(variable in JS) is a class name(in HTML), we can change it
// console.log(para);
// // to change the attribute name
// para.setAttribute("class", "newClass");
// console.log(para);
// console.log(document.querySelector("p")); // it will now show newClass as the attribute value


// now we can also use STYLE
console.log(div.style);
div.style.backgroundColor = "purple"; // here we change the color
div.style.fontSize = "25px";
div.style.fontFamily = "Times"


// if we want to add new element on the page
// using createElement

let newBtn = document.createElement("button"); // here button is an attribute - value
newBtn.innerText = "Click me now!!"; 
newBtn.style.backgroundColor = "green";
newBtn.style.margin = "10px";
newBtn.style.position = "center";
console.log(newBtn);

// now to show this created element on the screen we need to insert it on DOM model

// node.append - add at the end of the node (inside)
//div.append(newBtn); // now button is showing

// node.prepend - add at the starting of the node (inside)
//div.prepend(newBtn); // it will show at the starting

// node.before - add before the current node element (outside)
//div.before(newBtn);

// node.after - add after the current node element (outside)
//div.after(newBtn);

// appendChild() - adds a node to the end of the list of children of a specified parent node.
div.appendChild(newBtn); // it added after all the child of the div

// complete example
let newHeading = document.createElement("h4");
newHeading.innerText = "Hello it is first Heading";
div.prepend(newHeading);


// To delete the element
// node.remove() - removes the ndoe

// let para = document.querySelector("p");
// para.remove() // it removes all the paras inside that div
// newHeading.remove() // it remove the newHeading

// removeChild() - it removes the child node of the current node and returned the delete node
// div has three child and i want to delete the last child
// let divChild = document.querySelector("h4");
// let delChild = div.removeChild(divChild);
// console.log(delChild);
