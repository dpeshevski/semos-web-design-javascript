// function calculator (x, y, operationType) {
//   let result = null;

//   if (operationType === 'soberi') {
//     const resultAdd = x + y;
//     // console.log('resultAdd', resultAdd);
//     result = resultAdd;
//   } else if (operationType === 'odzemi') {
//     result = x - y;
//   } else if (operationType === 'podeli') {
//     result = x / y;
//   } else if (operationType === 'pomnozhi') {
//     result = x * y;
//   } else {
//     return 'Unknow operation. Try again. Please use soberi, odzemi, podeli or pomnozhi';
//   }

//   // console.log(resultAdd);
//   // console.log('Result is', result);
//   return result;
// }

// switch (/**  */) {
//   case '':
//     break;
// }

let firstName = 'Bob'; // Data type: String
firstName = 1;

switch (firstName) {
  case 'Bob': // if (firstName === 'Bob')
    console.log('I am Bob, you are right! Jas sum Bob, vo pravo si!');
    break;
  case 'Foo': // else if (firstName === 'Foo')
    console.log('I am Foo, you are right! Jas sum Foo, vo pravo si!');
    break;
  default: // else
    console.log('You are wrong! Pogreshi!');
    break;
}

if (firstName === 'Bob') {
  console.log('I am Bob, you are right! Jas sum Bob, vo pravo si!');
} else if (firstName === 'Foo') {
  console.log('I am Foo, you are right! Jas sum Foo, vo pravo si!');
} else {
  console.log('You are wrong! Pogreshi!');
}

const age = 6;
// Logic AND (&&)
// true && true => true, 
// true && false => false
// false && true => false
// false && false => false


// logic OR (||)
// true || false => true
// true || true => true
// false || true => true
// false || false => false

if (age < 3) {
  console.log('baby');
} else if (age > 3 && age < 6) {  // 4, 5
  console.log('pred ucilishna vozrast');
} else if (age >= 6 && age < 10) { // 6, 7, 8, 9
  console.log('prvo do cetvro odd');
} else if (age >= 10 && age < 14) { // 10 .. 13
  console.log('osnovno ucilishte')
} else if (age >= 14 && age <= 18) { // 14 .. 18
  console.log('sredno ucilishte') 
} else if (age > 18 && age < 23) { // 18..23
   console.log('visoko obrazovanie')
} else if (age >= 23 && age < 64) {
  console.log('rabotnik');
} else if (age > 64 && age < 80) {
  console.log('penzioer');
} else {
  console.log('vecen student');
}

switch (age) {
  case 3: 
    console.log('OK');
    break;
  default:
    console.log('Default result');
}

function calculator (x, y, operationType) {
  let result = null;

  switch (operationType) {
    case 'soberi':
      result = x + y;
      break;
    
  }

  return result;
}