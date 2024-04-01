// Arrays - collections of items
// to store same type of the information and also different information(but not used generally)
// linear way to store information [-,-,-,-,-,-,- and so on]

// Array declaration - let array_name = [item1, item2, item3,];

let marks = [97, 100, 92, 93, 15];
console.log(marks);
console.log(marks.length); // property - it gives only value 

let heros = ["ironman", "thor","shaktiman", "batman"];
console.log(heros);

// Array is a special type of object
// key - treated as index and then value
// index : values

// changing the value using index
marks[0] = 1;
console.log(marks[0]); // value is changed, but this is not possible in strings
// because string is immutable and array is mutable

// iterating through marks array - Looping over array
// using for loop
for(let i = 0; i<marks.length; i++) {
    console.log(marks[i]);
}

// using for of loop
console.log("Using for of loop \n");
for(let ele of marks) {
    console.log(ele);
}

// using for in loop
console.log("Using for in loop \n");
for(let mark in marks) {
    console.log(marks[mark]);
}

// Array methods: one change the array and another array do not change(make new array)
// push() : add to end
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log("Before using push: ");
for(let i = 0; i<foodItems.length; i++) {
    console.log(foodItems[i]);
}
foodItems.push("Paneer", "Papaya");
console.log("After using push: ");
for(let i = 0; i<foodItems.length; i++) {
    console.log(foodItems[i]);
}

// pop(): delete from end
console.log("Using pop: ");
let deleteItem = foodItems.pop(); // it return the deleted item
console.log(foodItems);
console.log(deleteItem); // it will show the last item which have been deleted

// toString(): convert item in string
console.log(foodItems.toString()); // it will print the array in string format
console.log(foodItems); // it is not changed 
console.log(marks.toString());

// concat(): joins multiple array
let marvelHeros = ["ironman", "hulk", "antman", "spiderman"];
let dcHeros = ["batman", "superman", "flash"];

let heroes = marvelHeros.concat(dcHeros); // it will not change the marvelHeros and dcHeros, it will create a new array and return i t
console.log(heroes);

// unshift(): add to start
marvelHeros.unshift("thor");
console.log(marvelHeros);

// shift(): delete from start
let deletedHeros = marvelHeros.shift();
console.log(deletedHeros);

// slice(): return a piece of the array slice(start, end);
console.log(marvelHeros.slice(2, 4));
console.log(marvelHeros.slice()); // can be used to make copy of the org array

// splice(): change original array (add, remove, replace);
// splice(startIdx, delCount, newEl1....) startInd from where delete the element
// delCount - how many item we want to delete
// newEl1... - give new element to add 
marvelHeros.splice(2, 4, "Xmen", "Wanda", "Captain America");
console.log(marvelHeros);
// we can also change index value or shift the array element by 1, it can also delete the element 
marvelHeros.splice(3, 0, "Black Panther"); // it will insert the value Black Panther at index 3
console.log(marvelHeros);
marvelHeros.splice(4, 0); // delete the 4th index elemment
marvelHeros.splice(5); // it will delete all the element after 5th index including 5th

