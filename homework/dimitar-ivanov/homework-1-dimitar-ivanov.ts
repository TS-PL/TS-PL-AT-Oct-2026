// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
console.log('Exercise 1 ' + '='.repeat(30));

// Step 1: Declare two variables and assign numeric values to them.
let ex1FirstValue: number = 5;
let ex1SecondValue: number = 10;

// Step 2: Log the original values.
console.log(`firstValue: ${ex1FirstValue}`);
console.log(`secondValue: ${ex1SecondValue}`);

// Step 3: Swap their values.
const tempValue: number = ex1FirstValue;
ex1FirstValue = ex1SecondValue;
ex1SecondValue = tempValue;

// Step 4: Log the final values.
console.log(`firstValue: ${ex1FirstValue}`);
console.log(`secondValue: ${ex1SecondValue}`);

// Exercise 2: Check whether a number is even
console.log('Exercise 2 ' + '='.repeat(30));

// Step 1: Declare a variable and assign any number to it.
const ex2FirstValue: number = 15;

// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
const isEven: boolean = ex2FirstValue % 2 === 0;

// Step 3: Log the result.
console.log(`isEven: ${isEven}`);

// Exercise 3: Check whether a number is positive
console.log('Exercise 3 ' + '='.repeat(30));

// Step 1: Declare a variable and assign any number to it.
const ex3FirstValue: number = -2;

// Step 2: Declare a boolean variable and check whether the number is greater than 0.
const isGreaterThanZero: boolean = ex3FirstValue > 0;

// Step 3: Log the result.
console.log(`isGreaterThanZero: ${isGreaterThanZero}`);

// Exercise 4: Calculate the total cost
console.log('Exercise 4 ' + '='.repeat(30));

// Step 1: Create a variable called price and assign it the value 19.99.
const ex4Price: number = 19.99;

// Step 2: Create another variable called quantity and assign it the value 3.
const ex4Quantity: number = 3;

// Step 3: Calculate the total cost by multiplying price by quantity.
const ex4TotalCost = ex4Price * ex4Quantity;

// Step 4: Log the total cost.
console.log(`Total cost: ${ex4TotalCost}`);

// Exercise 5: Convert Celsius to Fahrenheit
console.log('Exercise 5 ' + '='.repeat(30));

// Step 1: Create a variable to store the temperature in Celsius.
const ex5TempInCelsius: number = 30;

// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
function convertCelsiusToFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

// Step 3: Store the result in a variable.
const ex5TempInFahrenheit: number = convertCelsiusToFahrenheit(ex5TempInCelsius);

// Step 4: Log the temperature in Fahrenheit.
console.log(`Temp in Fahrenheit: ${ex5TempInFahrenheit}`);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
console.log('Exercise 6 ' + '='.repeat(30));

// Step 1: Create a boolean variable called isLoggedIn.
const ex6IsLoggedIn: boolean = false;

// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".
if (ex6IsLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

// Exercise 7: Check entry permission
console.log('Exercise 7 ' + '='.repeat(30));

// Step 1: Create a boolean variable called hasTicket and set it to true.
const ex7HasTicket: boolean = true;

// Step 2: Create a boolean variable called isAdult and set it to false.
const ex7IsAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
const ex7CanEnter: boolean = ex7HasTicket && ex7IsAdult;

// Step 4: Log the value of canEnter.
console.log(`Can enter: ${ex7CanEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
console.log('Exercise 8 ' + '='.repeat(30));

// Step 1: Declare a variable and assign any string to it.
const ex8text: string = '';

// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
const ex8IsEmpty: boolean = ex8text === '';

// Step 3: Log the result.
console.log(`Is string empty: ${ex8IsEmpty}`);

// Exercise 9: Check whether a string starts with the letter 'A'
console.log('Exercise 9 ' + '='.repeat(30));

// Step 1: Declare a variable and assign any string to it.
const ex9text: string = 'Atest';

// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
const ex9StartsWithA: boolean = ex9text.startsWith('A');

// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.
console.log(`Starts with A: ${ex9StartsWithA}`);

// Exercise 10: Perform string operations
console.log('Exercise 10 ' + '='.repeat(30));

// Step 1: Create a string variable called message with the value "TypeScript is fun".
const ex10Message: string = 'TypeScript is fun';

// Step 2: Log the length of the string.
console.log(`String length: ${ex10Message.length}`);

// Step 3: Log the string in uppercase.
console.log(`Uppercase: ${ex10Message.toUpperCase()}`);

// Step 4: Log the string in lowercase.
console.log(`Lowercase: ${ex10Message.toLowerCase()}`);

// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
const ex10FavoriteLanguage: string = 'TypeScript';

// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."
console.log(`My favorite programming language is ${ex10FavoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
console.log('Exercise 11 ' + '='.repeat(30));

// Step 1: Create two variables of type bigint.
const ex11Value1: bigint = 3000000000000000000n;
const ex11Value2: bigint = 2000000000000000000n;

// Step 2: Add the two bigint values together.
const ex11Sum: bigint = ex11Value1 + ex11Value2;

// Step 3: Log the result.
console.log(`BigInt Sum: ${ex11Sum}`);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
console.log('Exercise 12 ' + '='.repeat(30));

// Step 1: Create an array containing the numbers [10, 20, 30, 40].
const ex12Array: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the product (start with 1).
let ex12Product: number = 1;

// Step 3: Use a loop to multiply all the numbers in the array.
for (let i = 0; i < ex12Array.length; i++) {
  ex12Product *= ex12Array[i];
}

// Step 4: Log the final product.
console.log(`Final product: ${ex12Product}`);

// Exercise 13: Create an array of student objects
console.log('Exercise 13 ' + '='.repeat(30));

// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
interface Ex13Student {
  name: string;
  grade: number;
}

const ex13Students: Ex13Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.
for (const stundet of ex13Students) {
  console.log(`Student name: ${stundet.name}`);
}

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
console.log('Exercise 14 ' + '='.repeat(30));

// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
function ex14PrintId(id: string | number) {
  console.log(`ID: ${id}`);
}
// Step 4: Call printId once with a number and once with a string.
ex14PrintId(5);
ex14PrintId('Five');

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
console.log('Exercise 15 ' + '='.repeat(30));

// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
const ex15Name: string = 'Mitax';
const ex15Features: number = 3;

// Step 2: Calculate the total time required to test all features.
const ex15TotalHoursToTest: number = ex15Features * 2;

// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."
console.log(
  `QA engineer ${ex15Name} will need ${ex15TotalHoursToTest} hours to test ${ex15Features} features.`,
);

// Exercise 16: Use union types in objects
console.log('Exercise 16 ' + '='.repeat(30));

// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type Ex16User = {
  id: number | string;
  name: string;
};
// Step 4: Create one user object with a numeric id.
const ex16TestUserWithNumericId: Ex16User = {
  id: 15,
  name: 'Gogo',
};

// Step 5: Create another user object with a string id.
const ex16TestUserWithStringId: Ex16User = {
  id: 'Ten',
  name: 'Ivan',
};

// Step 6: Log both user objects.
console.log(ex16TestUserWithNumericId);
console.log(ex16TestUserWithStringId);
