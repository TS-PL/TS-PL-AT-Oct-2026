// npx tsx homework/deyan-tonchev/homework-02-deyan-tonchev

// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

//Declare boolean variable
const isMale: boolean = true;

//Print  results
if (isMale) {
  console.log('The person is male');
} else {
  console.log('The person is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

//Declate 3 number variables
const firstNumber: number = 4;
const secondNumber: number = 6;
const thirdNumber: number = 8;

//Check
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

//Declare 3 variables
const a: number = 5;
const b: number = 11;
const c: number = 9;

//Find smallest number and print in ascending order
if (a < b && a < c) {
  console.log(a, b < c ? b : c, b < c ? c : b);
} else if (b < a && b < c) {
  console.log(b, a < c ? a : c, a < c ? c : a);
} else {
  console.log(c, a < b ? a : b, a < b ? b : a);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

//Declare a string variable
const randomText: string = 'bookshop';

//Check the length
if (randomText.length > 10) {
  console.log('The length is greater than 10');
} else {
  console.log('The length is less than 10');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

//Declare variables for string and searched char
const letterCheck: string = 'BON';
const char: string = 'B';

//Check if the string contains char
if (letterCheck.includes(char)) {
  console.log(`The string ${letterCheck} contains letter 'B'`);
} else {
  console.log(`The string ${letterCheck} does NOT contain letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

//Declare variables
const age: number = 22;
const bestLapTime: number = 33.5;

//Check if the client is allowed to compete
if (age < 18) {
  console.log(`Age: ${age}, lap time:${bestLapTime} - Not allowed`);
} else if (age >= 65) {
  console.log(`Age: ${age}, lap time:${bestLapTime} - Not allowed`);
} else if (bestLapTime > 60) {
  console.log(`Age: ${age}, lap time:${bestLapTime} - Not allowed`);
} else {
  console.log(`Age: ${age}, lap time:${bestLapTime} -  Allowed`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

//Declare an array
const seasons: string[] = ['spring', 'summer', 'autumn', 'winter'];
//Transform array members to upper case
const seasonsToUpper = seasons.map((str) => str.toUpperCase());
//Print the result
console.log('seasonsToUpper', seasonsToUpper);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

//Declare an array
const names: string[] = ['Bob', 'Mark', 'Elizabeth'];
//Filter a memeber with more that 5 chars
const moreThanFive = names.filter((name) => name.length > 5);
//Print the result
console.log('moreThanFive', moreThanFive);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

//Declare an array
const numberArr: number[] = [3, 5, 7, 9];
//Find the largest number
const maxNumber = numberArr.reduce((max, num) => (max > num ? max : num));
//Print the result
console.log('maxNumber', maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

//Create type
type Item = {
  name: string;
  price: number;
  quantity: number;
};

//Create an array of items
const items: Item[] = [
  { name: 'apple', price: 1, quantity: 10 },
  { name: 'orange', price: 2, quantity: 15 },
  { name: 'banana', price: 3, quantity: 20 },
];
//Calculate price x quantity
const totalIems = items.map((item) => item.price * item.quantity);
//Sum all values
const totalSum = totalIems.reduce((acc, value) => acc + value, 0);
//Print the result
console.log('ToatlSum', totalSum);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

//Declare an array
const dublicateArr: number[] = [2, 3, 3, 4, 5, 5];

//Return unique numbers in new array
const uniqueNumbers = dublicateArr.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, [] as number[]);

//Print the result
console.log('uniqueNumbers', uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

//Create type
type User = {
  name: string;
  age: number;
};

//Create an array of users
const users: User[] = [
  { name: 'Mark', age: 22 },
  { name: 'Josh', age: 17 },
  { name: 'Peter', age: 33 },
];

//Filter users over 18 and map the names
const overEigtheen = users.filter((user) => user.age > 18).map((user) => user.name);
//Print the result
console.log('overEigtheen', overEigtheen);
