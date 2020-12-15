// if (/** condition */) {
//   // if statemnent block
// } else {
//   // else statemnet block
// }

const age = prompt('Take your age', '');

if (age >= 18) { // 18, 19, 20, .....
  console.log('OK, Passed');
  alert('OK, Passed')
} else { // 17, 16, 15, ...
  console.log('ELSE STATEMENT!');
  alert('ELSE STATEMENT!');
}


const operation = prompt('Operation', ''); // add

if (operation === 'add') { // add === add => true
  const sum = 5 + 6;
  console.log(sum); // 11
} else {
  console.log(9 - 6); // 3
  console.log('Unknown operation');
}

const newOperation = prompt('Operation', ''); // add

if (newOperation !== 'add') { // add !== add => false
  const sum = 5 + 6;
  console.log(sum); // 11
} else {
  console.log(9 - 6); // 3
  console.log('Unknown operation');
}

const company = prompt('Which company created JavaScript?', '');

if (company === 'Netscape') {
  alert('Right');
} else {
  alert('Wrong');
}

const whichCompanyMakeReact = prompt('Which company craeted React.js?', '');

if (whichCompanyMakeReact === 'Facebook') {
  alert('Right');
} else {
  alert('Wrong');
}

const teams = prompt('Which company created MS Teams?', '');

if (teams !== 'Microsoft') { // Microsoft !== Microsoft => false | Google !== Microsoft => true
  alert('Wrong');
} else {
  alert('Right');
}

// Напишете програмa каде што треба променлива која иницијално имала вредност false, 
// да се менува согласно условот.
// Доколку условот е вистинит, односно точен или задоволен, 
// на променливата додели вредност true, во спротивно додели вредност false.
// Условот треба да биде вредност на age да е поголема или еднаква на 18, 
// што е идентично и со вредноста на age да е поголема од 17.

// age >= 18
// age > 17
// false
// if () { true } else { false }
// console.log('');

let hasAccess = false;

if (age > 17) {
  hasAccess = true;
  console.log(hasAccess);
} else {
  hasAccess = false;
  console.log(hasAccess);
}

// console.log(hasAccess);

