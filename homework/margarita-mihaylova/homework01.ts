//npx ts-node homework01.ts 

// Exercise 1: Swap variable values
let a: number = 13;
let b: number = 31;
console.log('Initial values are a = ' + a + ' and b = ' + b );

let x: number;
x = a;
a = b;
b = x;
console.log('Swapped values are a = ' + a + ' and b = ' + b );



// Exercise 2: Check whether a number is even

const a: number = 43;
let isEven: boolean = a % 2 === 0;
if (isEven) {
    console.log(`The number ${a} is even`);
} else {
    console.log(`The number ${a} is not even`)
}


// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

const a: number = -5;
let isPositive: boolean = a > 0;
if (isPositive) {
    console.log(`The number ${a} is positive`);
} else {
    console.log(`The number ${a} is not positive`)
}



// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

const price: number = 19.99;
const quantity: number = 3;
console.log('The total price is ', price * quantity);


// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

const celsius: number = 13;
const fahrenheit: number = celsius * 9 / 5 + 32;
console.log(`${celsius} C = ${fahrenheit} F`); 


// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

const isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}



// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

const hasTicket: boolean = true;
const isAdult: boolean = false;
const canEnter: boolean = hasTicket && isAdult;
console.log('Can enter ', canEnter);


// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

const message: string = 'This is my message';
const isEmpty: boolean = message.length === 0;
console.log(`It is ${isEmpty} that the string "${message}" is empty`);


// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

const word: string = 'apple';
const startsWithA: boolean = word.charAt(0) === 'A';
console.log(`Word "${word}" starts with 'A' ${startsWithA}`);



// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."

const message: string = 'TypeScript is fun';
console.log(message.length);

console.log(message.toUpperCase());
console.log(message.toLowerCase());

const favoriteLanguage: string = 'Java';
console.log(`My favorite programming language is ${favoriteLanguage}.`);


// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

const first: bigint = 9007199254740993n;
const second: bigint = 1000000000000000000n;

const sum: bigint = first + second;

console.log(`The sum is ${sum}`);



// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.

const numbers: number[] = [10, 20, 30, 40];

let product: number = 1;

for (let i = 0; i < numbers.length; i++ ) {
  product = product * numbers[i];
}

console.log(`The product is ${product}`);



// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.


const students: { name: string; grade: number }[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}


// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

const printId = (id: string | number) => console.log(id);

printId(108);
printId("AB-13-01C");



// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

const qaName: string = 'Margi';
const featureNumber: number = 5;

const totalHours: number = featureNumber * 2;

console.log(`QA engineer ${qaName} will need ${totalHours} hours to test ${featureNumber} features.`);



// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.


type User =  {
    id: number | string;
    name: string;
}

const user1: User = { id: 16, name: 'Margi'} ;
const user2: User = { id: 'Aa-00-bB-02', name: 'Ivan'} ;

console.log(user1);
console.log(typeof user1);
console.log(user2);


