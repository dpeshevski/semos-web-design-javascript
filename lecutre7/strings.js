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
