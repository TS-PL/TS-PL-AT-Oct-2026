// Homework 01

// npx tsx homework/deyan-tonchev/homework-01-deyan-tonchev.ts

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

//Declare 2 variables
let numberValue1: number = 13;
let numberValue2: number = 27;
//Print initial values
console.log('numberValue1', numberValue1);
console.log('numberValue2', numberValue2);
//Temporary variable to swap the values
const temp = numberValue1;
numberValue1 = numberValue2;
numberValue2 = temp;
//Print swapped values
console.log('numberValue1', numberValue1);
console.log('numberValue2', numberValue2);

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
// Step 3: Log the result.

//Declare a variable
const number: number = 18;
//Expession to check if it's even
const isEven: boolean = number % 2 === 0;
//Print the result
console.log('isEven', isEven);

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

//Declare a variable
const checkNumber: number = -4;
//Check if the value is posotive
const isPositive: boolean = checkNumber > 0;
//Print the result
console.log('isPositive', isPositive);

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;
console.log('totalCost', totalCost);

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

//Create a variable - temperature in Celcius
const tempCelcius: number = 23;
//Calculate from Celcius to Fahrenheit
const tempFahrenheit: number = (tempCelcius * 9) / 5 + 32;
//Print in Fahrenheit
console.log('tempFahrenheit', tempFahrenheit);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

//Create boolean variable
const isLoggedIn: boolean = true;
//const isLoggedIn: boolean = false;

if (isLoggedIn) {
  console.log('Wellcome!');
} else {
  console.log('Please log in');
}

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

//Create variables
const hasTicket: boolean = true;
const isAdult: boolean = false;
//User can enter only if they have ticket and are an adult
const canEnter: boolean = hasTicket && isAdult;
//Print the result
console.log('canEnter', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

//Create string variable
const randomText: string = '';
//Create boolean variable and check if string is empty
const isStringEmpty: boolean = randomText.length === 0;
//Print the result
console.log('isStringEmpty', isStringEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

//Create string variable
const animal: string = 'horse';
//Check if string starts with 'A'
const startWithA: boolean = animal.charAt(0) === 'A';
//Print the result
console.log('startWithA', startWithA);

// Exercise 10: Perform string operations
// St"ep 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// My favorite programming language is ___."

//Create variables for length, upper case, lower case , template literal
const message: string = 'Typescript is fun';
const lenghtOfMessage: number = message.length;
const messageToUpperCase: string = message.toUpperCase();
const messageToLowerCase: string = message.toLowerCase();
const templLiteral: string = 'My favorite programming language is Typescript.';

//Print the result
console.log('lenghtOfMessage', lenghtOfMessage);
console.log('messageToUpperCase', messageToUpperCase);
console.log('messageToLowerCase', messageToLowerCase);
console.log(`templLiteral, ${templLiteral}`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

//Create 2 variables
const firstBigint: bigint = 1000000000000000000n;
const secondBigint: bigint = 2000000000000000000n;
//Add the variables
const add: bigint = firstBigint + secondBigint;
//Print the result
console.log(`add: ${add}`);
// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.
//Create an array
const numberArr: number[] = [10, 20, 30, 40];
//Create product variable
let product = 1;
//Multiply array members
for (let i = 0; i < numberArr.length; i++) {
  product = product * numberArr[i];
}
//Print the result
console.log('product', product);

// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.
//Create an array of students
const students: { name: string; grade: number }[] = [
  { name: 'Ivan', grade: 50 },
  { name: 'Maria', grade: 60 },
  { name: 'Georgi', grade: 70 },
];
//Print names
for (let i = 0; i < students.length; i++) {
  console.log('student', students[i].name);
}
// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

//Create function
function printId(id: string | number): void {
  console.log(id);
}
//Call printid
printId(333);
printId('string');

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

const qaName: string = 'Ivan';
const numberFeatures: number = 6;
const totalHours: number = numberFeatures * 2;

console.log(
  `QA engineer ${qaName} will need ${totalHours} hours to test ${numberFeatures} features.`,
);

// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.

//Create type
type User = {
  id: number | string;
  name: string;
};
//Object with numeric id
const user1: User = {
  id: 26,
  name: 'Maria',
};

console.log('id', user1.id);
console.log('name', user1.name);
//Object with string id
const user2: User = {
  id: 'stringid',
  name: 'Ivan',
};

console.log('id', user2.id);
console.log('name', user2.name);
