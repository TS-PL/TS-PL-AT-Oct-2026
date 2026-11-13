// Homework 01 - Answers - Momchil Lyutskanov
// npx ts-node homework/momchil-lyutskanov/homework1.ts

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

let numberA: number = 5;
let numberB: number = 10;
console.log(numberA);
console.log(numberB);

let temp: number = numberA;
numberA = numberB;
numberB = temp;
console.log('After swap', numberA, numberB);

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
// Step 3: Log the result.

let unevenNumber: number = 7;
let isEven: boolean = unevenNumber % 2 === 0;
console.log(isEven);

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

let oneNumber: number = 10;
let isGreater: boolean = oneNumber >= 0;
console.log(isGreater);

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

let price: number = 19.99;
let quantity: number = 3;
let calculate: number = price * quantity;
console.log(calculate);

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

let celsius: number = 20;
let fahrenheit: number = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log('"Welcome!"');
} else {
  console.log('"Please log in."');
}

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = true === hasTicket && isAdult;
console.log(canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

let text: string = '';
let isEmpty: boolean = text.length <= 0;
console.log(isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

let newText: string = 'apple';
let letterChecker: boolean = newText.charAt(0) === 'A';
console.log(letterChecker);

// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."

let message: string = 'TypeScript is fun';
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

let favoriteLanguage: string = 'TypeScript';
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

let bigNumber1: bigint = 3000000000000000000n;
let bigNumber2: bigint = -7000000000000000000n;
let bigSum: bigint = bigNumber1 + bigNumber2;
console.log(bigSum);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.

let myArray: number[] = [10, 20, 30, 40];
let myVar: number = 1;
let mySum = myArray.reduce((myArray, myVar) => myArray + myVar, 0);
console.log(mySum);

// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.

type Student = {
  name: string;
  grade: number;
};

let students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Momchil', grade: 25 },
];

let names = students.map((user) => user.name);
console.log(names);

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

function printId(id: string | number): void {
  console.log(id);
}

printId(101);
printId('This is string');

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

const qaName: string = 'Alex';
const numberOfFeatures: number = 5;
const hoursPerFeature: number = 2;

const totalHours: number = numberOfFeatures * hoursPerFeature;

console.log(
  `QA engineer ${qaName} will need ${totalHours} hours to test ${numberOfFeatures} features.`,
);

// second solution

function testingTimeCalculation(
  testerName: string,
  featureNumber: number,
  hoursPerFeat: number = 2,
): string {
  const totalTestHours: number = featureNumber * hoursPerFeat;

  return `QA engineer ${testerName} will need ${totalTestHours} to test ${featureNumber} features`;
}

console.log(testingTimeCalculation('Boyan', 4));
console.log(testingTimeCalculation('Momchil', 10));

// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.

const userObject1: { id: number | string; name: string } = {
  id: 22,
  name: 'Alan',
};

console.log(userObject1);

const userObject2: { id: number | string; name: string } = {
  id: '22',
  name: 'Alan',
};

console.log(userObject2);
