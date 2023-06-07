
// a variable is just like in maths. It's notation that holds data.
// these are the 3 ways to create variables!
var oneWayIsToUseVar = 1;
let anotherWayIsToUseLet = 2;
const alsoYouCanUseConst = 3;


// "var" was the original and only way to make variables in JavaScript
// now it is considered bad practice due to something called "hoisting"
// https://www.w3schools.com/js/js_hoisting.asp
var pleaseDontUseThis = 9000;

// "let" is the more modern var since it doesn't have this weird hoisting thing
let pleaseUseThis = 9001;
// var and let can also be reassigned to anything!
oneWayIsToUseVar = 69;
anotherWayIsToUseLet = 420;

// "const" was inspired by the meaning of "constant"
// once you create a const, you can't change it

// if you uncomment this, you should get an error!
// alsoYouCanUseConst = 666;