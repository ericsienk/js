// there's 3 ways to create a string variable
const doubleQuotesWay = "wow";

const singleQuotesWay = 'wowza';

const multiLineBackTicksWay = `
  yowza
  multiple lines
`;


// there's also a couple ways to compose strings
const one = 1;
const two = '2';

const variableConcatenation = one + ' plus ' + two; // 1 plus 2

const backtickStringTemplate = `${one} plus ${two}`; // 1 plus 2

// if you want to add more to your strings after you creation, you should use "let"
let example = one;
example = example + ' plus '; // 1 plus
example += two; // 1 plus 2
