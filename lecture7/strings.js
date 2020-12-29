const text = 'Hello world, I am student at Semos Education';
console.log(text);

const textLenght = text.length;

const templateString = `The length of ${text} is ${textLenght}`;

console.log(templateString);

console.log(text.toLowerCase());
console.log(text.toUpperCase());

const firstString = 'Hello';
const secondString = 'World';
const concatFristAndSecondString = firstString.concat(secondString);
console.log(concatFristAndSecondString);

console.log('Happy'.concat('New').concat('2021').concat('Year').concat('Merry').concat('Cxam'));

const stringText = 'Hello January 2021';
const startWithText = 'Hello Ja';
const checkIfStringStartsWith = stringText.startsWith(startWithText);
console.log(checkIfStringStartsWith);

const checkIfEndsWith = stringText.endsWith('2021');
console.log(checkIfEndsWith);


const substringText = stringText.substring(2, 6);
console.log(substringText);

const splitText = text.split();
console.log(splitText);

const splitWords = text.split(' ');
console.log(splitWords);

const splitChars = text.split('');
console.log(splitChars);

const textLong = 'Hello world, I am student at Semos Education. I am Web Designer. '
const countsSents = textLong.split('.');
console.log(countsSents);
console.log('How?', countsSents.length);


const findWordIndex = 'Hello World'.indexOf('World');
console.log(findWordIndex);

const findCharAt = 'Hello World'.charAt(7);
console.log(findCharAt);


const sliceText = 'Hello World'.slice(4, 10);
console.log(sliceText);

const isFound = text.includes('world');
console.log(isFound);


// if (1) {
// }
// if (0) {
// }


console.log(5 < 6 < 7); // 1 < 7 => true
console.log(7 > 6 > 5); // 1 > 5 => false


console.log(5 == 5 < 2); // 1 < 2 => true
console.log(3 < 5 == 5); // 3 < 1 => false


// switch (expression) {
//   case 'add':

//   case 'sub':
//   case 'pow':
//   case 'div':
// }


// console.log(Number('2'));  === 2;
// console.log(Number('2.55'));  === 2.55
// console.log(parseInt('2'));  === 2;
// console.log(parseFloat('2.55'));  === 2.55
// console.log(parseInt('2.55'));  === 2

// Number

// const age = (prompt('Take a age', '')); // age: string

// '19' === '19'
// 19 === 19

const a = Number('9');  // 9

const b = '7'; // '7'
const convertToNumber = Number(b); // 7

console.log(a); // 9
console.log(b); // '7'
console.log(convertToNumber); // 7

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof convertToNumber); // number

// switch(Number(age)) {
//   case 18:
//   case '19':
//   case '20':
//   case '21':
//   case '22':
//     console.log('Student');
//     break;
//   case 19:
//     console.log('19 number data type');
//     break;
//   case '28':
//     console.log('Hi 28');
//     break;
//   default:
//     console.log('hello');
//     break;
// }