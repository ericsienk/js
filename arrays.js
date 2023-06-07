// arrays are just a collection of values
// you can create an array of values like this
const listOfJunk = ['chippy'];

// you can combine arrays with the "spread" operator
const listOfAnimals = [...listOfJunk, 'anthony']; // ['chippy', 'anthony]

// you can get the number of items in an array with the length property
const numberOfAnimals = listOfAnimals.length; // 2

// you can get a value in an array by it's position in the array called an "index"
// the first position starts with zero
const chippy = listOfAnimals[0];
const anthony = listOfAnimals[1];