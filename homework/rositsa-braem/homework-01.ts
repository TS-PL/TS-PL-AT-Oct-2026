// Homework 01

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
let a: number = 10;
let b: number = 15;
console.log('Before swap: a =', a, 'b =', b);
let temp: number = a;
a = b;
b = temp;
console.log('After swap: a =', a, 'b =', b);

// Exercise 2: Check whether a number is even
let num: number = 10;
let isEven: boolean = num % 2 === 0;
console.log(`Is ${num} even?`, isEven);

// Exercise 3: Check whether a number is positive
let num2: number = -5;
let isPositive: boolean = num2 > 0;
console.log(`Is ${num2} positive?`, isPositive);

// Exercise 4: Calculate the total cost
let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log('Total cost:', totalCost);

// Exercise 5: Convert Celsius to Fahrenheit
let celsius: number = 22;
let Fahrenheit: number = (celsius * 9) / 5 + 32;
let temperatureFahrenheit: number = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${temperatureFahrenheit}°F`);

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
let isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

// Exercise 7: Check entry permission
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;
console.log('Can enter:', canEnter);

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
let anyText: string = '';
let isEmpty: boolean = anyText === '';
console.log('Is a string empty?', isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
let cityName: string = 'Amsterdam';
let startsWithA: boolean = cityName.startsWith('A');
console.log(`Does "${cityName}" start with 'A'?`, startsWithA);

// Exercise 10: Perform string operations
let message: string = 'TypeScript is fun';
console.log('Length:', message.length);
console.log('Uppercase:', message.toUpperCase());
console.log('Lowercase:', message.toLowerCase());
let favoriteLanguage: string = 'TypeScript';
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
let bigInt1: bigint = 9007199254740993n;
let bigInt2: bigint = 55500011122233344455n;
let bigSum: bigint = bigInt1 + bigInt2;
console.log('BigInt sum:', bigSum);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;
for (let i = 0; i < numbers.length; i++) {
  product = product * numbers[i];
}
console.log('Product:', product);

// Exercise 13: Create an array of student objects
let students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
  { name: 'Charlie', grade: 80 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
function printId(id: string | number) {
  console.log('ID:', id);
}
printId(1930);
printId('BE-8620');

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
let qaEngineerName: string = 'Rositsa';
let featuresToTest: number = 7;
let totalTime: number = featuresToTest * 2;
console.log(
  `QA engineer ${qaEngineerName} will need ${totalTime} hours to test ${featuresToTest} features.`,
);

// Exercise 16: Use union types in objects
type User = {
  id: number | string;
  name: string;
};
let user1: User = { id: 93, name: 'Peter' };
let user2: User = { id: 'Kev-01', name: 'Kevin' };
console.log(user1);
console.log(user2);
