// Exercise 1
let a: number = 5;
let b: number = 10;
console.log("a =", a, "b =", b);
let temp: number = a;
a = b;
b = temp;
console.log("a =", a, "b =", b);

// Exercise 2
let num: number = 8;
let isEven: boolean = num % 2 === 0;
console.log(isEven);

// Exercise 3
let num2: number = -3;
let isPositive: boolean = num2 > 0;
console.log(isPositive);

// Exercise 4
let price: number = 19.99;
let quantity: number = 3;
let totalCost: number = price * quantity;
console.log(totalCost);

// Exercise 5
let celsius: number = 25;
let fahrenheit: number = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

// Exercise 6
let isLoggedIn: boolean = true;
if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please log in.");
}

// Exercise 7
let hasTicket: boolean = true;
let isAdult: boolean = false;
let canEnter: boolean = hasTicket && isAdult;
console.log(canEnter);

// Exercise 8
let text: string = "";
let isEmpty: boolean = text === "";
console.log(isEmpty);

// Exercise 9
let word: string = "Apple";
let startsWithA: boolean = word.startsWith("A");
console.log(startsWithA);

// Exercise 10
let message: string = "TypeScript is fun";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
let favoriteLanguage: string = "TypeScript";
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Exercise 11
let big1: bigint = 12345678901234567890n;
let big2: bigint = 98765432109876543210n;
let bigSum: bigint = big1 + big2;
console.log(bigSum);

// Exercise 12
let numbers: number[] = [10, 20, 30, 40];
let product: number = 1;
for (let i = 0; i < numbers.length; i++) {
  product = product * numbers[i];
}
console.log(product);

// Exercise 13
let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Exercise 14
function printId(id: string | number) {
  console.log(id);
}
printId(101);
printId("abc123");

// Exercise 15
let qaName: string = "Konstantina";
let features: number = 5;
let totalHours: number = features * 2;
console.log(`QA engineer ${qaName} will need ${totalHours} hours to test ${features} features.`);

// Exercise 16
type User = {
  id: number | string;
  name: string;
};
let user1: User = { id: 1, name: "Ivan" };
let user2: User = { id: "u-2", name: "Maria" };
console.log(user1);
console.log(user2);