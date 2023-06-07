// there's 3 ways to create functions as variables

function classicWay() {
  return;
}

const arrowSyntaxWay = () => {
  return;
}

const oneLinerArrowSyntaxWay = () => { };

// each part of a function has 3 parts
// the name, it's arguments, and what it returns
function name(argument1, argument2) {
  return argument1 + argument2;
}

// here is a function that adds two arguments together
function add(num1, num2) {
  return num1 + num2;
}

// here's that same function in arrow syntax
const addWithArraySyntax = (num1, num2) => {
  return num1 + num2;
}

const addWithOnelinerArrowSyntax = (num1, num2) => num1 + num2;

// you can call or invoke a function by it's name and surrounding the arguments with parenthesis 
const four = add(2, 2);


// you'll often see and hear about "callback" functions
// these are just functions that get passed around and "called back on" at some other time

// there is a global function called "setTimeout" in JavaScript
// the first argument takes a function and the second argument is a delay in milliseconds
const ONE_SECOND = 1000;

function printHelloWorld() {
  console.log('Hello World!');
}

// in one second time, setTimeout will invoke our printHelloWorld function
setTimeout(printHelloWorld, ONE_SECOND);

// notice how we ourselves are invoking setTimeout with the arguments in correct order
