// there's many ways to loop

// classic for loop
for (let i = 0; i < 10; i++) {
  console.log(`for loop ${i}`);
}

// rare while loop
let i = 0;
while (i < 10) {
  console.log(`while loop ${i}`);
}

// forEach prototype on an array 
const arrayOfTenItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function printItem(item) {
  console.log(`forEach loop ${item}`);
}

arrayOfTenItems.forEach(printItem);

// newer for of loop
for (const item of arrayOfTenItems) {
  console.log(`for of loop ${item}`);
}

// each loop has the ability to repeat code until something says to stop
