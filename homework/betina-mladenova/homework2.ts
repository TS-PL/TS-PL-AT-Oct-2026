// Homework 02
// npx ts-node homework/betina-mladenova/homework2.ts
// npx tsx homework/betina-mladenova/homework2.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

console.log('- SOLUTION EXCERCISE 1:');

const isMale: boolean = false;

if (isMale) {
  console.log('User is male.');
} else {
  console.log('User is female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

console.log('- SOLUTION EXCERCISE 2:');

const firstNum: number = 5;
const secondNum: number = 7;
const thirdNum: number = 9;

if (secondNum < firstNum && firstNum < thirdNum) {
  console.log(`"The number ${firstNum} is between ${secondNum} and ${thirdNum}"`);
} else {
  console.log(`"The number ${firstNum} is NOT between ${secondNum} and ${thirdNum}"`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

console.log('- SOLUTION EXCERCISE 3:');

const num1: number = 10;
const num2: number = 25;
const num3: number = 5;

if (num1 <= num2 && num1 <= num3 && num2 <= num3) {
  console.log('The numbers are:', num1, num2, num3);
} else if (num1 <= num2 && num1 <= num3 && num3 <= num2) {
  console.log('The numbers are:', num1, num3, num2);
} else if (num2 <= num1 && num2 <= num3 && num1 <= num3) {
  console.log('The numbers are:', num2, num1, num3);
} else if (num2 <= num1 && num2 <= num3 && num3 <= num1) {
  console.log('The numbers are:', num2, num3, num1);
} else if (num3 <= num1 && num3 <= num2 && num1 <= num2) {
  console.log('The numbers are:', num3, num1, num2);
} else {
  console.log('The numbers are:', num3, num2, num1);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

console.log('- SOLUTION EXCERCISE 4:');

const stringVar1: string = 'Excercise solution';

if (stringVar1.length > 10) {
  console.log(`The length of string '${stringVar1}' is ${stringVar1.length}`);
} else {
  console.log(`The length of string '${stringVar1}' is < 10`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

console.log('- SOLUTION EXCERCISE 5:');

const stringVar2: string = 'Toby';

if (stringVar2.includes('B')) {
  console.log(`The string ${stringVar2} contains the letter 'B'`);
} else {
  // will return the else statement, despite there is a 'b' in the string, because string is case sensitive
  console.log(`The string ${stringVar2} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

console.log('- SOLUTION EXCERCISE 6:');

const age: number = 26;
const bestLapTime: number = 66.4;

if (age >= 18 && age < 65) {
  // can be done with (age >= 18 && age < 65 && bestLapTime < 60) too
  console.log(`The client is allowed to play and is ${age} years old.`);

  if (bestLapTime < 60) {
    console.log(`The client's best lap time is ${bestLapTime} seconds. Good job! `);
  } else {
    console.log(`The client's best lap time is ${bestLapTime} seconds. Needs improvement! `);
  }
} else {
  console.log(`The client is NOT allowed to play as he/she is ${age} years old.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('- SOLUTION EXCERCISE 7:');

const namesToMap: string[] = ['Lilly', 'Bob', 'John', 'Gabby'];
const namesToUpperCase: string[] = namesToMap.map((name) => name.toUpperCase());

console.log('Original array:', namesToMap);
console.log('Array uppercase:', namesToUpperCase);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

console.log('- SOLUTION EXCERCISE 8:');

const animalsToFilter: string[] = ['frog', 'aligator', 'bear', 'tiger', 'giraffe'];
const animalsFiltered: string[] = animalsToFilter.filter((animal) => animal.length > 5);

console.log('Original array:', animalsToFilter);
console.log('Array filtered, words length > 5:', animalsFiltered);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

console.log('- SOLUTION EXCERCISE 9:');

const numArray: number[] = [25, 30, 105, 66, 10, 7, 111];

const callbackMaxNum = function (maxNum: number, currentNum: number) {
  if (maxNum > currentNum) {
    return maxNum;
  } else {
    return currentNum;
  }
};

const maxNumber = numArray.reduce(callbackMaxNum);

console.log('Original array:', numArray);
console.log('Array reduce, find max number:', maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

console.log('- SOLUTION EXCERCISE 10:');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const itemsArray: Item[] = [
  { name: 'banana', price: 2.5, quantity: 6 },
  { name: 'ham', price: 3, quantity: 3 },
  { name: 'bread', price: 1.5, quantity: 2 },
];

const callbackFuncMap = function (arr: Item) {
  return arr.price * arr.quantity;
};

const priceAndQty = itemsArray.map(callbackFuncMap);

const totalAllItems = priceAndQty.reduce((acc, num) => acc + num, 0);
console.log('Total cost for the items is:', totalAllItems);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

console.log('- SOLUTION EXCERCISE 11:');

const duplicatesArray: number[] = [5, 10, 10, 20, 40, 5, 20, 7, 8, 7];

const callbackUniqueNum = function (newArrHoldUnique: number[], numFromOriginalArr: number) {
  if (!newArrHoldUnique.includes(numFromOriginalArr)) {
    newArrHoldUnique.push(numFromOriginalArr);
  } else {
  }

  return newArrHoldUnique;
};

const uniqueNumbers = duplicatesArray.reduce(callbackUniqueNum, []);
console.log('Array with unique values: ', uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

console.log('- SOLUTION EXCERCISE 12:');

type User = {
  name: string;
  age: number;
};

const usersArray: User[] = [
  { name: 'Radi', age: 25 },
  { name: 'Bobi', age: 18 },
  { name: 'Bibi', age: 16 },
  { name: 'Gabi', age: 23 },
];

const adultUsersFilter: User[] = usersArray.filter((adult) => adult.age > 18);
const adultNames: string[] = adultUsersFilter.map((userName) => userName.name);

console.log('Names of adult users: ', adultNames);
