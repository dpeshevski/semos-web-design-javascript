const fruit = 'Apple';

               // 0,      1,        2 
const fruits = ['Apple', 'Banana', 'Orange'];
// let

console.log(fruits.length);

const fruitsLength = fruits.length; // fruitsLength: 3
console.log(fruitsLength); // 3

// 0, 1, ... N-1; N = Length

const firstItem = fruits[0];
console.log('Frist item', firstItem);

const lastItem = fruits[fruits.length - 1];
console.log('Last item', lastItem);

// const pussingNewItem = fruits.push('Mango');
// console.log(pussingNewItem); // 4

// console.log(fruits);

fruits.push('Mango');

console.log(fruits);

console.log(fruits[fruits.length-1]);

const removeLastItem = fruits.pop();
console.log(removeLastItem);

console.log(fruits);

const removeFirstItem = fruits.shift();
console.log(removeFirstItem);
console.log(fruits);

const addAnItemToTheBeginningOfAnArray = fruits.unshift('Strawberry'); // add to the front
console.log(addAnItemToTheBeginningOfAnArray);
console.log(fruits);

console.log(fruits[fruits.length-1]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


// Loop over array

for (let i = 0; i < fruits.length; i++) {
  // console.log('Logged item', fruits[i]);
  console.log(fruits[i]);
}

// for .. of
for (let i of fruits) {
  console.log(i);
}

// for .. in
for (let i in fruits) {
  console.log(i);
  console.log(fruits[i]);
  console.log(i, fruits[i]);
}

// forEach
fruits.forEach(function (item, index, array) {
  console.log(item, index);
})


fruits.push('Apple');

console.log(fruits);

const removedItemByIndex = fruits.splice(1, 1);
console.log(removedItemByIndex);

console.log(fruits);

fruits.push('Apple');
fruits.push('Banana');
fruits.push('Apple');
fruits.push('Apple');
fruits.push('Apple');

console.log(fruits);

const position = fruits.indexOf('Apple');
console.log(position);

fruits.splice(position, 2);
console.log(fruits);


const arrayKeys = Object.keys(fruits);
console.log(arrayKeys);

// const arrayValues = Object.values(fruits);
// console.log(arrayValues);


['a', 'b', 'c', 1, true, { }].splice(1, 1);

// fruits.splice(1, 1);

// array.splice(start, deleteCount);

function removesItemsFromAnIndexPos(array, startPos, deleteCount) {
  return array.splice(startPos, deleteCount);
}

console.log(removesItemsFromAnIndexPos(fruits, 2, 3));
console.log(removesItemsFromAnIndexPos([1, 2, 3, 4, 5, 'a', 'b', true, false, 'c', 3], 4, 4));

console.log(fruits);

removesItemsFromAnIndexPos(fruits, 0, 2);
console.log(fruits);

