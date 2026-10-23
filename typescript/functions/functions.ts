// Run the file using the command:
// npx ts-node typescript/functions/functions.ts
// npx tsx typescript/functions/functions.ts

// ==========================================
// 1. What is a Function?
// ==========================================

// A function is a block of code that performs a task.

// A function does NOT execute automatically.
// We need to call it by its name.

// General syntax:

// function name(parameter1, parameter2) {
//   // Code that will be executed
// }

// ==========================================
// 2. The simplest function - void
// ==========================================

// We create a function named printHello.

function printHello(): void {
  console.log('Hello!');
}

// Explanation:
// function -> declares a function
// printHello -> the name of the function
// () -> no parameters
// : void -> the function does not return a value
// {} -> the body of the function

// Call the function:
printHello();

// Output:
// Hello!

// Important:
// void means that the function does not return a value.
// It can perform actions such as console.log().

// ==========================================
// 3. Function with parameters and return
// ==========================================

// We create a function that multiplies two numbers.

function multiply(a: number, b: number): number {
  return a * b;
}

// Explanation:
// a: number -> the first parameter is a number
// b: number -> the second parameter is a number
// : number -> the function returns a number
// return -> returns the result of the multiplication

console.log(multiply(5, 10)); // 50

// How does it work?
// a = 5
// b = 10
// 5 * 10 = 50
// return 50

// Important:
// return returns a value from the function.
// Once return is executed, the function ends.

// ==========================================
// 4. Optional Parameters
// ==========================================

// The ? symbol means that the parameter
// is optional (not required).

function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// a and b are required parameters.
// c is an optional parameter.

// If we do not provide c, its value
// will be undefined.

// (c || 0) means:
// If c is undefined or another falsy value,
// use 0 instead.

console.log(add(5, 10)); // 15

// a = 5
// b = 10
// c = undefined -> we use 0
// 5 + 10 + 0 = 15

console.log(add(5, 10, 20)); // 35

// a = 5
// b = 10
// c = 20
// 5 + 10 + 20 = 35

// A more precise approach is to use ??:
// return a + b + (c ?? 0);

// ?? uses 0 only when c is
// null or undefined.

// ==========================================
// 5. Default Parameters
// ==========================================

// We can assign a default value
// to a parameter.

function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}

// Explanation:
// value -> the number we raise to a power
// exponent -> the power (exponent)
// = 10 -> the default value
// ** -> the exponentiation operator

console.log(pow(5)); // 9765625

// Since we do not provide an exponent,
// TypeScript uses 10.

// 5 ** 10 = 9765625

console.log(pow(2, 3)); // 8

// Here we provide exponent = 3.
// 2 ** 3 = 2 * 2 * 2 = 8

// Important:
// A default parameter has a predefined value.
// If we do not provide an argument,
// that default value is used.

const numbersArr: number[] = [1, 2, 3, 4, 5, 6];

const filterCallback = function (num: number) {
  return num % 2 === 0;
};

// FILTER: get only even numbers (numbers divisible by 2 with no remainder)
// num % 2 === 0 → checks if the remainder when dividing by 2 is 0
// filter returns a NEW array and does not mutate the original one
const evenNumbers = numbersArr.filter((num) => num % 2 === 0);

// Same logic as above, but using an external callback function (filterCallback)
const evenNumbers2 = numbersArr.filter(filterCallback);

// Log the filtered results
console.log(evenNumbers);
console.log(evenNumbers2);

// Callback function for map
// Takes a number and returns it multiplied by 2
const mapCallback = function (num: number) {
  return num * 2;
};

// MAP: create a new array where each number is multiplied by 2
// map transforms each element in the array
const doubleNumbers = numbersArr.map((num) => num * 2);

// Same operation, but using a separate callback function
const doubleNumbers2 = numbersArr.map(mapCallback);

// Log the results
console.log(doubleNumbers);
console.log(doubleNumbers2);

// Callback for reduce when working with strings
// acc (accumulator) stores the accumulated result
// str is the current element in the array
const concatCallback = function (acc: string, str: string) {
  // Log current accumulator value
  // console.log('acc', acc);

  // Log current element
  // console.log('str', str);

  // concat joins strings together
  return acc.concat(str);
};

// REDUCE: calculate the sum of all numbers in the array
// acc starts at 0 (initial value)
// each iteration adds the current number to the accumulator
const sum = numbersArr.reduce((acc, num) => acc + num, 0);

const stringsArr: string[] = ['1', '2', '3', '4', '5', '6'];

// REDUCE with a string array:
// start with an empty string '' and concatenate all elements
const concatenated = stringsArr.reduce(concatCallback, '');

// Log final results
console.log(sum);
console.log(concatenated);

const output = numbersArr
  .filter((num) => num > 2)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log('Output:', output);

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const users: User[] = [
  { name: 'Ivan', age: 25, isActive: true },
  { name: 'Maria', age: 30, isActive: false },
  { name: 'Georgi', age: 20, isActive: true },
];

// FILTER: Create a new array that includes ONLY users whose "isActive" property is true
// This does NOT modify the original "users" array
const activeUsers = users.filter((user) => user.isActive);

// Log the filtered list of active users to the console
console.log(activeUsers);

// MAP: Transform the "users" array into a new array containing ONLY user names
// Each element in the new array is the "name" property of each user object
const names = users.map((user) => user.name);

// Log the array of user names
console.log(names);

// REDUCE: Calculate the TOTAL age of all ACTIVE users
// Starts from 0 and accumulates each user's age into "sum"
const totalAge = activeUsers.reduce((sum, user) => sum + user.age, 0);

// Log the total combined age of active users
console.log(totalAge);

// ==========================================
// Array Methods
// ==========================================

// We create an array of numbers.
// number[] -> the array can contain only numbers
const numbers: number[] = [1, 2, 3];

console.log('numbers:', numbers);
// Output: numbers: [ 1, 2, 3 ]

// ==========================================
// 1. push() - adds elements to the END
// ==========================================

// push() adds one or more elements to the end of the array.
// It changes the original array and returns the new length.
numbers.push(4);

console.log('numbers:', numbers);
// Output: numbers: [ 1, 2, 3, 4 ]

// We can add several elements at once.
numbers.push(5, 6);

console.log('numbers:', numbers);
// Output: numbers: [ 1, 2, 3, 4, 5, 6 ]

// ==========================================
// 2. shift() - removes the FIRST element
// ==========================================

// shift() removes the first element of the array.
// It changes the original array and returns the removed element (1).
numbers.shift();

console.log('numbers:', numbers);
// Output: numbers: [ 2, 3, 4, 5, 6 ]

// ==========================================
// 3. unshift() - adds elements to the BEGINNING
// ==========================================

// unshift() adds one or more elements to the beginning of the array.
// It changes the original array and returns the new length.
numbers.unshift(1);

console.log('numbers:', numbers);
// Output: numbers: [ 1, 2, 3, 4, 5, 6 ]

// ==========================================
// 4. pop() - removes the LAST element
// ==========================================

// pop() removes the last element of the array.
// It changes the original array and returns the removed element (6).
numbers.pop();

console.log('numbers:', numbers);
// Output: numbers: [ 1, 2, 3, 4, 5 ]

// ==========================================
// 5. slice() - copies a part of the array
// ==========================================

// slice(start, end) returns a NEW array with the elements
// from index start up to (but NOT including) index end.
// The original array is NOT changed.

// Indexes:  0  1  2  3  4
// Values:  [1, 2, 3, 4, 5]
// slice(1, 4) -> indexes 1, 2, 3 -> [2, 3, 4]
const part = numbers.slice(1, 4);

console.log('part', part);
// Output: part [ 2, 3, 4 ]

// Getting the last element with slice():
// numbers.length - 1 -> 5 - 1 = 4 (the index of the last element)
// slice(4)           -> [5] (from index 4 to the end)
// [0]                -> takes the first element of the new array -> 5
const lastElement = numbers.slice(numbers.length - 1)[0];

console.log('lastElement', lastElement);
// Output: lastElement 5

// A simpler way to get the last element:
// numbers[numbers.length - 1] -> 5
// numbers.at(-1)              -> 5

// slice() did NOT change the original array.
console.log('numbers', numbers);
// Output: numbers [ 1, 2, 3, 4, 5 ]

// pop() DOES change the original array.
numbers.pop();

console.log('numbers', numbers);
// Output: numbers [ 1, 2, 3, 4 ]

// ==========================================
// 6. sort() - sorting strings
// ==========================================

// We create an array of strings.
const usersNames: string[] = ['Ivan', 'Maria', 'Teodor', 'Zahari'];

// sort() sorts the elements alphabetically (in ascending order).
// It changes the original array.
usersNames.sort();

console.log('usersNames', usersNames);
// Output: usersNames [ 'Ivan', 'Maria', 'Teodor', 'Zahari' ]

// Note: the names were already in alphabetical order,
// so the result looks the same.

// Important:
// Uppercase letters come before lowercase letters.
// ['b', 'a', 'C'].sort() -> [ 'C', 'a', 'b' ]

// ==========================================
// 7. sort() - sorting numbers
// ==========================================

// We create an array of numbers.
const usersAge: number[] = [100, 56, 67, 64, 88];

// For numbers we pass a compare function (a, b) => ...
// b - a -> sorts in DESCENDING order (from largest to smallest)
// a - b -> sorts in ASCENDING order (from smallest to largest)
usersAge.sort((a, b) => b - a);

console.log('usersAge', usersAge);
// Output: usersAge [ 100, 88, 67, 64, 56 ]

// Important:
// Without a compare function, sort() compares numbers as strings.
// [100, 56, 67, 64, 88].sort() -> [ 100, 56, 64, 67, 88 ]
// "100" comes first because "1" < "5" when compared as text.
