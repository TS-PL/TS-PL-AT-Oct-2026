// npx ts-node homework/teodora-tsoneva/teodora-tsoneva-homework-02.ts

import { access } from 'fs';
import { validateHeaderValue } from 'http';

// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
const isMale: boolean = true;
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
const first: number = 4;
const second: number = 2;
const third: number = 11;
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
if (first > second && first < third) {
  console.log(`The number ${first} is between ${second} and ${third}`);
} else {
  console.log(`The number ${first} is NOT between ${second} and ${third}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.

const a: number = 7;
const b: number = 2;
const c: number = 5;
// Step 2: Log the numbers in ascending order using if-else statements.

if (a <= b && b <= c) {
  console.log(a, b, c);
} else if (a <= c && c <= b) {
  console.log(a, c, b);
} else if (b <= a && a <= c) {
  console.log(b, a, c);
} else if (b <= c && c <= a) {
  console.log(b, c, a);
} else if (c <= a && a <= b) {
  console.log(c, a, b);
} else {
  console.log(c, b, a);
}

//
// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
const text: string = 'Time to learn TS';
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (text.length > 10) {
  console.log(`The string "${text}" has more than 10 characters`);
} else {
  console.log(`The string "${text}" has les than 10 characters`);
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
const text1: string = 'Yes';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
if (text1.includes('B')) {
  console.log(`The string ${text1} contains the letter 'B'`);
} else {
  console.log(`The string ${text1} does NOT contain the letter 'B'`);
}
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
const age: number = 25;
const bestLapTime: number = 55.4;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`Age: ${age}, best lap time: ${bestLapTime} s. The client is allowed to compete`);
} else {
  console.log(`Age: ${age}, best lap time: ${bestLapTime} s. The client is NOT allowed to compete`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
const fruits: string[] = ['apple', 'bababa', 'chery'];
// Step 2 & 3: Use the map() method to transform each string to uppercase and store in a new variable.
const upperFruits: string[] = fruits.map((fruit) => fruit.toUpperCase());
// Step 4: Log the result.
console.log(upperFruits);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
const words: string[] = ['cat', 'elephant', 'dog', 'giraffe', 'bird', 'monkey'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
const longWords: string[] = words.filter((word) => words.length > 5);
// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
const numbers: number[] = [12, 45, 7, 23, 8];
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
const max: number = numbers.reduce((acc, num) => Math.max(acc, num), numbers[0]);
// Step 4: Log the result.
console.log(max);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};
// Step 2: Create an array of items.
const items: Item[] = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Mouse', price: 25, quantity: 4 },
  { name: 'Keyboard', price: 50, quantity: 1 },
];
// Step 3: Use map() to calculate price × quantity for each item.
const lineTotals: number[] = items.map((item) => item.price * item.quantity);
// Step 4: Use reduce() to sum all values.
const total: number = lineTotals.reduce((acc, value) => acc + value, 0);
// Step 5: Log the total.
console.log(total);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
const numbers1: number[] = [1, 2, 2, 3, 4, 4, 5, 1];
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
const unique1: number[] = numbers1.reduce<number[]>((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);
// Step 4: Log the result.
console.log(unique1);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};
// Step 2: Create an array of users.
const users: User[] = [
  { name: 'Ivan', age: 25 },
  { name: 'Maria', age: 17 },
  { name: 'Georgi', age: 18 },
  { name: 'Elena', age: 30 },
];

// Step 3: Use filter() to keep only users over 18.\
const adults: User[] = users.filter((user) => user.age > 18);
// Step 4: Use map() to extract their names.
const adultNames: string[] = adults.map((user) => user.name);
// Step 5: Log the result.
console.log(adultNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
const numbers3: number[] = [10, 20, 10, 30, 40];
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array
const unique: number[] = [];

for (const num of numbers) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
console.log(unique);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.

// Exercise 17: Find the intersection of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
// Step 5: Log the result, which should be [4, 5].

// Exercise 18: Flatten a nested array
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.

// Exercise 21: Group objects by a property
// Step 1: Create an interface Student with properties name: string and grade: number.
// Step 2: Create an array of students:
//         [{ name: 'Ana', grade: 5 }, { name: 'Ivan', grade: 6 },
//          { name: 'Maria', grade: 5 }, { name: 'Petar', grade: 4 }]
// Step 3: Group the students by grade.
// Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
// Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.

// Exercise 22: Sort objects by multiple fields
// Step 1: Use the students array from Exercise 25.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".

// Exercise 25: Filter by an enum value
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.
