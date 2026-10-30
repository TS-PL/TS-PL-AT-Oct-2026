// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
let a: number = 5;
let b: number = 10;
console.log("Before swap: a =", a, "b =", b);
let temp: number = a;
a = b;
b = temp;
console.log("After swap: a =", a, "b =", b);

// Exercise 2: Check whether a number is even
let num2: number = 8;
let isEven: boolean = num2 % 2 === 0;
console.log("The number is even:", isEven);

// Exercise 3: Check whether a number is positive
let num3: number = -3;
let isPositive: boolean = num3 > 0;
console.log("The number is positive:", isPositive);

// Exercise 4: Calculate the total cost
let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log("The total cost is:", totalCost);

// Exercise 5: Convert Celsius to Fahrenheit
let celsius: number = 25;
let fahrenheit: number = celsius * 9 / 5 + 32;
console.log("The temperature in Fahrenheit is:", fahrenheit);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
let isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please log in.");
}

// Exercise 7: Check entry permission
let hasTicket: boolean = true;
let isAdult: boolean = false;
// && is true only when both values are true
let canEnter: boolean = hasTicket && isAdult;
console.log("Can enter:", canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
let text8: string = "Hello";
let isEmpty: boolean = text8 === "";
console.log("The string is empty:", isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
let text9: string = "Apple";
let startsWithA: boolean = text9[0] === "A";
console.log("Starts with A:", startsWithA);

// Exercise 10: Perform string operations
let message: string = "TypeScript is fun";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
let favoriteLanguage: string = "TypeScript";
// Template literal with the variable inside ${}
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// The n at the end of the number makes it a bigint
let big1: bigint = 123456789012345678901234567890n;
let big2: bigint = 987654321098765432109876543210n;
let bigSum: bigint = big1 + big2;
console.log("The sum is:", bigSum);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;
for (let i = 0; i < numbers.length; i++) {
  product = product * numbers[i];
}
console.log("The product is:", product);

// Exercise 13: Create an array of student objects
let students: { name: string; grade: number }[] = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// The id can be either a string or a number
function printId(id: string | number) {
  console.log(id);
}
printId(101);
printId("abc-202");

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
let qaName: string = "Ivan";
let featuresCount: number = 5;
let totalHours: number = featuresCount * 2;
console.log(
  `QA engineer ${qaName} will need ${totalHours} hours to test ${featuresCount} features.`
);

// Exercise 16: Use union types in objects
type User = {
  id: number | string;
  name: string;
};

let user1: User = { id: 1, name: "Maria" };
let user2: User = { id: "u-2", name: "Georgi" };
console.log(user1);
console.log(user2);