// objects are data structures that can hold pretty much anything
// you can create an empty object like this
const yupThatIsEmpty = {};

// you can create an object with properties of any kind like this
const filledObject = {
  name: 'eric',
  numbers: [1, 2, 3, 4, 5],
  add: function (num1, num2) {
    return num1 + num2;
  }
};

// objects tend to keep state even when you reassign them
const nahThatAintEmpty = yupThatIsEmpty;
// nahThatAintEmpty and yupThatIsEmpty are now the same object

// you can continue to add properties to objects in a couple ways
nahThatAintEmpty.ohYea = true;
nahThatAintEmpty['what'] = 'this is nuts';

const iKnow = 'weird';
nahThatAintEmpty[iKnow] = false;

// now yupThatIsEmpty AND nahThatAintEmpty is equal to this { ohYea: true, what: 'this is nuts', weird: false }

// you can get the property names of the object like this
Object.keys(nahThatAintEmpty); // ['ohYea', 'what', 'weird']
// and the values like this
Object.values(nahThatAintEmpty); // [true, 'this is nuts', false];

// you can access properties in three ways
const example = { one: 1, two: 2, three: 3 };
const byProperty = example.one; // byProperty is 1
const byIndex = example['two']; // byIndex is 2
const { three: byDestructuring } = example; // byDestructuring is 3
 