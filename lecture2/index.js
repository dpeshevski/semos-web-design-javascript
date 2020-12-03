console.log('Hello from index.js');

console.log('I am student @ Web Design @ Semos Education');

// Build in JS functions

// alert('Hello Semos, there');

// prompt('How old are you!?');

// confirm('Are you sure?');


// single line comments
// single line second
// single line third

/**
 * Multi line comments
 * Comment 
 * Here
 * 
 */

// firstName !== fisrtname !== first_name (case-sensitive)

//  Variables

// var
// const 
// let  

// camelCase

// Data Types
// String '', ""
// Numbers
// Booleans true/false
// Undefined
// Null
// Objects {}

// Strings
const firstName = 'John';
const lastName = "Bon Jovi";
const ageOfString = "1_$^&@#3425677D";

console.log(firstName);
console.log(lastName);
console.log(ageOfString);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof ageOfString);

// Numbers
const age = 88;
const height = 178;

console.log(age);
console.log(typeof age);

const doubleNumber = 55.66;
console.log(doubleNumber);

const fullName = firstName + lastName;
console.log(fullName);
// const fullNameWithoutConcat = 'John Bon Jovi';

const concatBothAgesStringAndNumber = ageOfString + age;
console.log(concatBothAgesStringAndNumber);

const sumTwoNumbers = age + height;
console.log(sumTwoNumbers);

console.log(6 + 6); // sum of two numbers => 12
console.log(6 + '6'); // concat of number and string => 66

// Boolean
let hasAccess = false;
let isValid = true;

console.log('Default value of hasAccess is', hasAccess); // false
console.log(isValid); // true

console.log(typeof hasAccess); // boolean
console.log(typeof isValid); // boolean

hasAccess = true;
isValid = false;

console.log('Changed value (new - updated) hasAccess is', hasAccess); // true
console.log(isValid); // false

hasAccess = false;
console.log(hasAccess); // false


// Undefined
let nationality;
console.log(nationality); // undefined

console.log(typeof nationality);

nationality = "Macedonian";
console.log('Nationality of user with' + fullName + ' is ' + nationality);


// firstName = "James"; // Uncaught TypeError: invalid assignment to const 'firstName'


// Null
const gender = null;

console.log(gender); // null

console.log(typeof gender); // object

nationality = null;
console.log('What is output of nationality?', nationality);

// Object
// {

// }

// {
//   color: "red",
//   border: "none",
//   backgoundColor: "yello",
//   height: '120px'
// }

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 39,
  gender: 'male',
  nationality: 'Dutch'
};

console.log(person);

const personTwo = {
  age,
  firstName,
  lastName,
  gender,
  nationality,
  hasAccess
};

console.log(personTwo);

const personEqualToTwo = {
  age: age,
  firstName: firstName,
  lastName: lastName,
  gender: gender,
  nationality: nationality
};

console.log(personEqualToTwo);