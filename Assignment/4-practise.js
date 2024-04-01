// Q - 1
// for a given array with marks of student - [85, 97,, 44, 37, 76, 60]
// find the avg of the marks

let sum = 0;
let marks = [85, 97, 44, 37, 76, 60]
for(let i = 0; i<marks.length; i++) {
    sum += marks[i];
    console.log(marks[i]);
}
let avg = sum/marks.length;
console.log(`Average marks of the class = ${avg}`);


// Q - 2
// for a given array with price of 5 aitems [250, 645, 300, 900, 50]
// all items have an offer of 10% off on them. change the array to store final price
// after applying offer

let prices = [250, 645, 300, 900, 50];
for(let i = 0; i<prices.length; i++) {
    prices[i] -= (prices[i]/10);
    console.log(prices[i]);
}


// Q - 3
// create an array to store companies - Bloomberg, microsoft, uber, google, ibm, netflix
let companies = ["Bloomberg", "Mircrosoft", "Uber", "Google", "IBM", "Netflix"];
// a. remove the first company from the array
companies.shift();
console.log(companies);
// b. Remove Uber and Add ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);
// c. Add amazon at the end
companies.push("Amazon");
console.log(companies);
