// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
let a = 5;
let b = 10;
// Step 2: Log the original values.
console.log('Exercise 1: Swap variable values');
console.log('-----------------------------------');
console.log('Before swap', a, b);
// Step 3: Swap their values.
let temp = a;
a = b;
b = temp;
// Step 4: Log the final values.
console.log('After swap', a, b);
console.log('-----------------------------------');

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
let myNumber = 8; // Create a variable with an arbitrary number to check
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
let isEven = myNumber % 2 == 0; // The modulus operator (%) returns the remainder
// Step 3: Log the result.
console.log('Exercise 2: Check whether a number is even');
console.log('Its the number even?', isEven);

// Exercise 3: Check whether a number is positive
console.log('-----------------------------------');
console.log('Exercise 3: Check whether a number is positive');
// Step 1: Declare a variable and assign any number to it.
let numberToCheck = 15;
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
let isPositive = numberToCheck > 0; //The greater than operator (>) returns true if the number is larger than zero.
// Step 3: Log the result.
console.log('Is number positive?', isPositive);

// Exercise 4: Calculate the total cost
console.log('-----------------------------------');
console.log('Exercise 4: Calculate the total cost');
// Step 1: Create a variable called price and assign it the value 19.99.
let price = 19.99; // Define the price of a single item
// Step 2: Create another variable called quantity and assign it the value 3.
let quantity = 3; // Define how many items are being purchased
// Step 3: Calculate the total cost by multiplying price by quantity.
let totalCoast = price * quantity;
// Step 4: Log the total cost.
console.log('The total cost is:', totalCoast);

// Exercise 5: Convert Celsius to Fahrenheit
console.log('-----------------------------------');
console.log('Exercise 5: Convert Celsius to Fahrenheit');
// Step 1: Create a variable to store the temperature in Celsius.
let celsius = 25;
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
let fahrenheit = (celsius * 9) / 5 + 32;
// Step 4: Log the temperature in Fahrenheit.
console.log('Temperature in Fahrenheit:', fahrenheit);
// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
console.log('-----------------------------------');
// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn = true;
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

// Exercise 7: Check entry permission
console.log('-----------------------------------');
console.log('Exercise 7: Check entry permission');
// Step 1: Create a boolean variable called hasTicket and set it to true.
let hasTicket = true;
// Step 2: Create a boolean variable called isAdult and set it to false.
let isAdult = false;
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
let canEnter = hasTicket && isAdult;
// Step 4: Log the value of canEnter.
console.log('Can enter?', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
console.log('-----------------------------------');
console.log('Exercise 8: Check whether a string is empty');
// Step 1: Declare a variable and assign any string to it.
let myString = '';
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
let isEmpty = myString === '';
// Step 3: Log the result.
console.log('Is the string empty?', isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
console.log('-----------------------------------');
console.log("Exercise 9: Check whether a string starts with the letter 'A'");
// Step 1: Declare a variable and assign any string to it.
let myWord = 'Apple';
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
let startsWithA = myWord.startsWith('A');
// Step 3: Log the result.
console.log("Starts with 'A'?", startsWithA);
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

// Exercise 10: Perform string operations
console.log('-----------------------------------');
// Step 1: Create a string variable called message with the value "TypeScript is fun".cd petar-karachorov
let message = 'TypeScript is fun';
// Step 2: Log the length of the string.
console.log('Length:', message.length);
// Step 3: Log the string in uppercase.
console.log('Uppercase:', message.toUpperCase());
// Step 4: Log the string in lowercase.
console.log('Lowercase:', message.toLowerCase());
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
let favoriteLanguage = 'TypeScript';
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
console.log('-----------------------------------');
console.log('Exercise 11: Add BigInt values');
// Step 1: Create two variables of type bigint.
let firstBigNumber = 9007199254740991n;
let secondBigNumber = 100n;
// Step 2: Add the two bigint values together.
let sumBigInt = firstBigNumber + secondBigNumber;
// Step 3: Log the result.
console.log('BigInt sum:', sumBigInt);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
console.log('-----------------------------------');
console.log('Exercise 12: Calculate the product of array elements');
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
let numbers = [10, 20, 30, 40];
// Step 2: Create a variable to store the product (start with 1).
let product = 1;
// Step 3: Use a loop to multiply all the numbers in the array.
for (let i = 0; i < numbers.length; i++) {
  product = product * numbers[i];
}
// Step 4: Log the final product.
console.log('Final product:', product);

// Exercise 13: Create an array of student objects
console.log('-----------------------------------');
console.log('Exercise 13: Create an array of student objects');
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
let students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];
// Step 4: Use a loop to iterate through the array.
for (let i = 0; i < students.length; i++) {
  // Step 5: Log each student's name.
  console.log('Student name:', students[i].name);

  // Part 6 — Functions and Types
  console.log('Student name:', students[i].name);
}

// Exercise 14: Create a function with a union type
console.log('-----------------------------------');
console.log('Exercise 14: Create a function with a union type');
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
function printId(id: string | number) {
  // Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
  console.log('ID:', id);
}
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."
printId(101);
printId('ABC-202');

// Exercise 16: Use union types in objects
console.log('-----------------------------------');
console.log('Exercise 16: Use union types in objects');
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = {
  id: number | string;
  name: string;
};
// Step 4: Create one user object with a numeric id.
// Step 4: Create one user object with a numeric id.
let user1: User = {
  id: 1,
  name: 'Ivan',
};
// Step 5: Create another user object with a string id.
let user2: User = {
  id: 'user-02',
  name: 'Maria',
};
// Step 6: Log both user objects.
console.log('First user:', user1);
console.log('Second user:', user2);
