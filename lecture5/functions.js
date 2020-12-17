// Function
// function name() {
//   // body
//   // return
// }

// name(); // call

function printXYZ(x, y, z) {
  console.log('x is', x, 'y is', y, 'z is', z);
}

// console.log(x);

printXYZ(2021, 'hello', 'year');
printXYZ('test', 'hey', 'there');
printXYZ('hi', 123, 'test');

const firstNameVariable = 'James'; // firstNameVariable: 'James'
const lastNameVariable = 'Hetfield'; // lastNameVariable: 'Hetfield'
const fullNameVaraible = firstNameVariable + lastNameVariable;
console.log(fullNameVaraible); // James Hetfield

function fullName(firstName, lastName) {
  // next two lines are used for debbuging
  console.log('First Name is', firstName); // (1) Bob // (2) Joe
  console.log('Last Name is', lastName); // (1) Foo // (2) Sagosen
  const fullName = firstName + lastName;
  console.log('Full name log', fullName);
  return fullName;
}

// console.log(firstName);
// console.log(lastName);


console.log(fullName('Bob', 'Foo')); //BobFoo
const getFullName = fullName('Joe', 'Sagosen'); // getFullName: JoeSagosen
console.log(getFullName); //JoeSagosen

// calling fullName function
console.log(fullName(firstNameVariable, lastNameVariable));


console.log(5 + 9);
console.log(1 + 2);

function sum(x, y) {
  return x + y;
}

console.log(sum(5, 9)); // 14
console.log(sum(1, 2)); // 3


// x - number (0 - 9)
// y - numner (0 - 9)
// type = soberi, odzemi, podeli, pomnozhi
function calculator (x, y, operationType) {
  let result = null;

  if (operationType === 'soberi') {
    const resultAdd = x + y;
    // console.log('resultAdd', resultAdd);
    result = resultAdd;
  } else if (operationType === 'odzemi') {
    result = x - y;
  } else if (operationType === 'podeli') {
    result = x / y;
  } else if (operationType === 'pomnozhi') {
    result = x * y;
  } else {
    return 'Unknow operation. Try again. Please use soberi, odzemi, podeli or pomnozhi';
  }

  // console.log(resultAdd);
  // console.log('Result is', result);
  return result;
}

// const add = calculator(4, 9, 'soberi');

console.log('Sobiranje', calculator(4, 2, 'soberi')); // 6
console.log('Odzemanje', calculator(18, 5, 'odzemi')); // 13
console.log('Delenje', calculator(27, 2, 'podeli')); // 13.5
console.log('Mnozhenje', calculator(5, 7, 'pomnozhi')); // 35
console.log('Stepen', calculator(5, 2, 'stepen')); // Unknow operation


// Array
// 0 ... n-1 (index, keys)
// 1 .... n (value)
const students = ['Bojan', 'Filip', 'Ivan', 'Martin', 'Petar', 'Sara', 'Stanisa', 'Toshe', 'Viktorija', 'Angel', 'Marija'];

function studentList (students) {
  console.log(students);
  console.log(students.length);
}

studentList(students); // students -> 93 line
