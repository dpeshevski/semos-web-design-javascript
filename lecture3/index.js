const firstName = 'Marija';
const lastName = 'Nikolova';
const age = 21;

let isAnAdult = false;
let fullName;

fullName = 'Nikola' + ' Nikolovski';
console.log('This is full name ', fullName); //

fullName = firstName + ' ' + lastName;
console.log('fullName is', fullName); //

const fullNameConstant = firstName + ' ' + lastName;
console.log('fullNameConstant is', fullNameConstant); //

console.log(isAnAdult);
isAnAdult = true;
console.log(isAnAdult);

//  Comparison operators
// < (less than) left value < right value 8 < 6 (false)
// > (greater than) left value > right value 8 > 6 (true)
// <= (less than or equal to) left value is smaller than or equal to the right value 4 <= 3
// >= (greater than or equal to) left value is greater than or equal to the right value 5 >= 2
// == (both values are same) 15 == '15' 
// === (strict equality) left and right values are identical to one another 15 === 15 (true), 15 === '15' (false), 5 === 3 + 3
// '!==' (strict non equality) left and right values are NOT || - || - 5 !== 2 + 3


let isNotAdult = false;
isNotAdult = age < 18; // 17 < 18 => yes = true
console.log('isNotAdult has', isNotAdult, ' value');

console.log(8 < 6); // no = false

console.log(20 > 18); // yes = true

console.log(age > 18); // 17 > 18 => no, false
isAnAdult = age > 18;
console.log('IsAnAdult', isAnAdult);

let hasAccess = false;

let isStudent = false;
// const education = "student";

// isStudent = 


const numberA = 10;
const numberB = 12;

const lessThan = numberA < numberB;
console.log('Is ' + numberA + ' less than ' + numberB + '?', numberA < numberB);
console.log('Is ' + numberA + ' less than ' + numberB + '?', lessThan);

const greaterThan = numberA > numberB;
console.log('Is ' + numberA + ' greater than ' + numberB + '?', numberA > numberB);
console.log('Is ' + numberA + ' greater than ' + numberB + '?', greaterThan);


// <=
const lessThanOrEqualTo = numberA <= numberB;
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false
console.log(lessThanOrEqualTo);


// >=
console.log(2 >= 3); // false
console.log(3 >= 3); // true
console.log(4 >= 3); // true

const greaterThanOrEqualTo = numberA >= numberB;
console.log(greaterThanOrEqualTo);

// ==
const password = "password";
const confirmPassword = "lozinka";

const bothAreEquals = password == confirmPassword;
console.log('bothAreEquals', bothAreEquals);

console.log(5 == 5); // true
console.log('5' == '5'); // true
console.log(5 == '5'); // true
console.log(6 == 5); // false
console.log(6 == 5 + 1); // true
console.log(5 == 7 - 2); // true

// ===
const strictEquality = 15 === '15';
console.log(strictEquality); // false

console.log(5 === '5'); // false
console.log(5 === 5); // true
