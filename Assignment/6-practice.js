// Question-1
/*
create a H2 heading element using text - "Hello Javascript".
Append "from Apna College students" to this text using JS.
*/
// let str = "from Apna College students";
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " " + str;
// console.dir(h2.innerText);


// Question - 2
/*
create 3 divs with common class name- "box"
access them and add some unique text to each of them
*/

let divs = document.querySelectorAll(".box");
console.dir(divs);
// console.dir(divs[1]);
console.log(divs[0]);
// divs[0].innerText  = "First Box Hai";
// divs[1].innerText = "Second Box Hai";
// divs[2].innerText = "Thirst Box Hai"
let str = "Hello";
let ind = 1;
for(div of divs) {
    div.innerText = `Sanoj + ${str} + ${ind++}`;
    console.log(div.innerText);
}
