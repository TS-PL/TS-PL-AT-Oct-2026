// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

console.log('Exercise 1');

let firstNumber = 10;
let secondNumber = 20;

console.log(firstNumber);
console.log(secondNumber);

let temporaryNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = temporaryNumber;

console.log(firstNumber);
console.log(secondNumber);
console.log();

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
// Step 3: Log the result.

console.log('Exercise 2');

let evenNumber = 5;
let checkEvenNumber: boolean = evenNumber % 2 === 0;

console.log('number is even:', checkEvenNumber);
console.log();

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

console.log('Exercise 3');

let age = 26;
let isPositive = age > 0;

console.log('age is greater than 0:', isPositive);
console.log();

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

console.log('Exercise 4');

let price = 19.99;
let quantity = 3;
let totalCost = price * quantity;

console.log(price, 'multiplied by', quantity, 'equals', totalCost);
console.log();

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('Exercise 5');

let celsius = 20;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(celsius, 'degrees celsius equals', fahrenheit, 'degrees fahrenheit');
console.log();

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

console.log('Exercise 6');

let isLoggedIn = false;

if ((isLoggedIn = true)) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

console.log();

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

console.log('Exercise 7');

let hasTicket = true;
let isAdult = false;
let canEnter = hasTicket && isAdult;

console.log(canEnter);
console.log();

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

console.log('Exercise 8');

let text = '';
let isEmpty = text === '';

console.log('text is empty:', isEmpty);
console.log();

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

console.log('Exercise 9');

let fruit: string = 'Banana';
let startsWithA: boolean = fruit[0] === 'A';

console.log(startsWithA);
console.log();

// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."

console.log('Exercise 10');

let message: string = 'TypeScript is fun';

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

let favoriteLanguage: string = 'JavaScript';

console.log(`My favorite programming language is ${favoriteLanguage}.`);
console.log();

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

console.log('Exercise 11');

let firstValue: bigint = 1234567890n;
let secondValue: bigint = 9876543210n;
let totalValue: bigint = firstValue + secondValue;

console.log(totalValue);
console.log();

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.

console.log('Exercise 12');

let listOfNumbers: number[] = [10, 20, 30, 40];
let product: number = 1;

for (let eachListNumber of listOfNumbers) {
  product = eachListNumber * product;
}

console.log(product);
console.log();

// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.

console.log('Exercise 13');

let students: { name: string; grade: number }[] = [
  {
    name: 'Alice',
    grade: 90,
  },
  {
    name: 'John',
    grade: 60,
  },
  {
    name: 'Sarah',
    grade: 100,
  },
];

for (let eachStudent of students) {
  console.log(eachStudent.name);
}

console.log();

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

console.log('Exercise 14');

const printId = (id: string | number) => {
  console.log(id);
};

printId(500);
printId('Five hundred');

console.log();

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

console.log('Exercise 15');

const qaName: string = 'Alex';
const numberOfFeatures: number = 16;
let totalHours: number = numberOfFeatures * 2;

console.log(
  `QA engineer ${qaName} will need ${totalHours} hours to test ${numberOfFeatures} features.`,
);

console.log();

// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.

console.log('Exercise 16');

const userObject: { id: string | number; name: string }[] = [
  {
    id: 30,
    name: 'Steve',
  },
  {
    id: 'Eleven',
    name: 'Josh',
  },
];

console.log(userObject[0]);
console.log(userObject[1]);
