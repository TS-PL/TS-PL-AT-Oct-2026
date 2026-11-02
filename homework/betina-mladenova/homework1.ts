// Homework 01
// npx ts-node homework/betina-mladenova/homework1.ts
// npx tsx homework/betina-mladenova/homework1.ts

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

console.log('- SOLUTION EXCERCISE 1:');

let number1: number = 2;
let number2: number = 3;
console.log('First number:', number1);
console.log('Second number:', number2);

// assign number1 value to a new variable (saveFirstNumberValue) because if number1 is not saved anywhere,
// its value will be changed in line 23 and the final result of the swap will be wrong
let saveFirstNumberValue = number1;
number1 = number2;
number2 = saveFirstNumberValue;
console.log(`After swap the first number is: ${number1} and the second number is ${number2}`);

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
// Step 3: Log the result.

console.log('- SOLUTION EXCERCISE 2:');

const evenNumber: number = 22;
const isEven: boolean = evenNumber % 2 === 0;
console.log(`The given number is ${evenNumber}. Is it even? ${isEven}`);

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

console.log('- SOLUTION EXCERCISE 3:');

const negativeNumber: number = -3;
const isPositive: boolean = negativeNumber > 0;
console.log(`The given number is ${negativeNumber}. Is it positive? ${isPositive}`);

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

console.log('- SOLUTION EXCERCISE 4:');

const price: number = 19.99;
const quantity: number = 3;
const totalCost: number = price * quantity;
console.log('Total price for your purchase is:', totalCost);

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

console.log('- SOLUTION EXCERCISE 5:');

const temperatureCelsius: number = 20;
const temperatureFahrenheit: number = (temperatureCelsius * 9) / 5 + 32;
console.log(
  `The temperature today is ${temperatureCelsius} degree Celsius and ${temperatureFahrenheit} degree Fahrenheit.`,
);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

console.log('- SOLUTION EXCERCISE 6:');

const isLoggedIn: boolean = false;

if (isLoggedIn) {
  console.log('Welcome!');
} else {
  // the result will always be 'Please log in' as isLoggesIn's value is false
  console.log('Please log in.');
}

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

console.log('- SOLUTION EXCERCISE 7:');

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;
console.log('Can I enter the concert?', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

console.log('- SOLUTION EXCERCISE 8:');

const myString: string = 'Text';
const isEmpty: boolean = myString.valueOf() === '';
console.log(`Is the string '${myString}' empty?`, isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

console.log('- SOLUTION EXCERCISE 9:');

const myName: string = 'Ana';
// using charAt method with 0 as a parameter as A is the first index of the string
const doesStringStartWithA: boolean = myName.charAt(0) === 'A';
console.log(`Does the name '${myName}' start with A?`, doesStringStartWithA);

// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."

console.log('- SOLUTION EXCERCISE 10:');

const message: string = 'TypeScript is fun';
console.log(`String "${message}"'s length is`, message.length);
console.log(`String "${message}"'s uppercase is`, message.toUpperCase());
console.log(`String "${message}"'s lowercase is`, message.toLocaleLowerCase());

const favoriteLanguage: string = 'Java';
console.log(`My favorite programming language is ${favoriteLanguage}`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

console.log('- SOLUTION EXCERCISE 11:');

const bigInt1: bigint = 100000000000n;
const binInt2: bigint = 200000000000n;
const sumBigInt: bigint = bigInt1 + binInt2;
console.log('The sum of BigInt values is:', sumBigInt);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.

console.log('- SOLUTION EXCERCISE 12:');

const numbersArray: number[] = [10, 20, 30, 40];
let product: number = 1;

for (let i: number = 0; i < numbersArray.length; i++) {
  // multiply variable product with initial value 1 by the value of every index of the array
  // and assign the new value back to product so we can get the final result
  // first iteration 1 * 10, second iteration 10 * 20, etc.
  product = product * numbersArray[i];
}

console.log('The product of array ' + JSON.stringify(numbersArray) + ' is', product);

// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.

console.log('- SOLUTION EXCERCISE 13:');

type StudentType = {
  name: string;
  grade: number;
};

const students: StudentType[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

// solution 1 with filter method as a quicker and shorter option
students.filter((students) => console.log('Filter Student', students.name));

// solution 2 with for loop
for (let i: number = 0; i < students.length; i++) {
  console.log(`Student ${i + 1} is:`, students[i].name);
}

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

console.log('- SOLUTION EXCERCISE 14:');

function printID(id: string | number) {
  console.log(`${typeof id} id is:`, id);
}

printID(1771);
printID('1771');

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

console.log('- SOLUTION EXCERCISE 15:');

const nameOfQA: string = 'Betina Mladenova';
const numFeaturesToTest: number = 5;

console.log(
  `QA engineer ${nameOfQA} will need ${numFeaturesToTest * 2} hours to test ${numFeaturesToTest} features.`,
);

// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.

console.log('- SOLUTION EXCERCISE 16:');

type User = {
  id: number | string;
  name: string;
};

const user1: User[] = [{ id: 12345, name: 'Ivana' }];
const user2: User[] = [{ id: '56789', name: 'Dragan' }];

console.log('Users are:', user1, 'and', user2);
