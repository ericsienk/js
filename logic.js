// logic is comprised of operators on combinations of true and false

// you can choose to do something with an if condition
if (true) {
  console.log('this code will always execute');
} else {
  console.log('this code will never execute!');
}

// you can use a NOT operator to do the opposite
if (!true) {
  console.log('this code will never execute');
} else {
  console.log('this code will always execute!');
}

// you can use a TRIPLE EQUALS to compare variables
const example = true;
if (example === true) {
  console.log('this code will always execute');
} else {
  console.log('this code will never execute!');
}

// ...and use the NOT operator like this
if (example !== true) {
  console.log('this code will never execute');
} else {
  console.log('this code will always execute!');
}

// let's make a complicated function and show some logic!
function describe(name) {
  if (name === 'eric') {
    console.log('wow')
  } else if (name === 'zac') {
    console.log('amazing')
  } else {
    console.log('oh heck')
  }
}

describe('eric'); // wow
describe('zac'); // amazing
describe('anthony'); // oh heck
