// Homework 02
// Part 1: Conditional Statements

import { group } from 'node:console';
import test from 'node:test';

// Exercise 1: Use a boolean as an if/else condition
console.log('Exercise 1 ' + '='.repeat(30));
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
const ex1IsMale: boolean = true;

if (ex1IsMale) {
  console.log('Person is Male');
} else {
  console.log('Person is Female');
}

// Exercise 2: Check if a number is between two other numbers
console.log('Exercise 2 ' + '='.repeat(30));
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
const ex2Value1: number = 6;
const ex2Value2: number = 5;
const ex2Value3: number = 10;

if (ex2Value1 > ex2Value2 && ex2Value1 < ex2Value3) {
  console.log(`The number ${ex2Value1} is between ${ex2Value2} and ${ex2Value3}`);
} else {
  console.log(`The number ${ex2Value1} is NOT between ${ex2Value2} and ${ex2Value3}`);
}

// Exercise 3: Multiple number comparison
console.log('Exercise 3 ' + '='.repeat(30));
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
const ex3Value1: number = 22;
const ex3Value2: number = 31;
const ex3Value3: number = 56;

if (ex3Value1 <= ex3Value2 && ex3Value2 <= ex3Value3) {
  console.log(`${ex3Value1}, ${ex3Value2}, ${ex3Value3}`);
} else if (ex3Value1 <= ex3Value3 && ex3Value3 <= ex3Value2) {
  console.log(`${ex3Value1}, ${ex3Value3}, ${ex3Value2}`);
} else if (ex3Value2 <= ex3Value1 && ex3Value1 <= ex3Value3) {
  console.log(`${ex3Value2}, ${ex3Value1}, ${ex3Value3}`);
} else if (ex3Value2 <= ex3Value3 && ex3Value3 <= ex3Value1) {
  console.log(`${ex3Value2}, ${ex3Value3}, ${ex3Value1}`);
} else if (ex3Value3 <= ex3Value1 && ex3Value1 <= ex3Value2) {
  console.log(`${ex3Value3}, ${ex3Value1}, ${ex3Value2}`);
} else {
  console.log(`${ex3Value3}, ${ex3Value2}, ${ex3Value1}`);
}

// Exercise 4: Check if a string has more than 10 characters
console.log('Exercise 4 ' + '='.repeat(30));
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
const ex4Text: string = 'I love computer games.';
if (ex4Text.length > 10) {
  console.log(`The length of "${ex4Text}" is greater than 10.`);
} else {
  console.log(`The length of "${ex4Text}" is not greater than 10.`);
}

// Exercise 5: Check if a string contains the letter 'B'
console.log('Exercise 5 ' + '='.repeat(30));
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
const ex5text: string = 'Bat';
if (ex5text[0] === 'B' || ex5text[1] === 'B' || ex5text[2] === 'B') {
  console.log(`"The string ${ex5text} contains the letter 'B'"`);
} else {
  console.log(`"The string ${ex5text} does NOT contain the letter 'B'"`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
console.log('Exercise 6 ' + '='.repeat(30));
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const ex6ClientAge: number = 20;
const ex6LapTime: number = 28.4;
if (ex6ClientAge >= 18 && ex6ClientAge < 65 && ex6LapTime < 60) {
  console.log(`Client's age: ${ex6ClientAge}, best lap time: ${ex6LapTime} is allowed to compete.`);
} else {
  console.log(
    `Client's age: ${ex6ClientAge}, best lap time: ${ex6LapTime} is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce
// Exercise 7: Convert Strings to Uppercase (map)
console.log('Exercise 7 ' + '='.repeat(30));
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const ex7StringArray: string[] = ['cat', 'dog', 'parrot', 'bat'];
const ex7StringArrayToUpper = ex7StringArray.map((animal) => animal.toUpperCase());
console.log(ex7StringArrayToUpper);

// Exercise 8: Filter Long Words (filter)
console.log('Exercise 8 ' + '='.repeat(30));
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const ex8StringArray: string[] = ['car', 'plane', 'bicycle', 'motorcycle', 'tractor'];
const ex8StringArrayLongerWords: string[] = ex8StringArray.filter((word) => word.length > 5);
console.log(ex8StringArrayLongerWords);

// Exercise 9: Find Maximum Number (reduce)
console.log('Exercise 9 ' + '='.repeat(30));
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
const ex9NumArray: number[] = [5, 22, 1, 18, 34, 85];
const ex9LargestNum: number = ex9NumArray.reduce((sum, num) => sum + num, 0);
console.log(ex9LargestNum);

// Exercise 10: Calculate Total Price (map + reduce)
console.log('Exercise 10 ' + '='.repeat(30));
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.
type Ex10Item = {
  name: string;
  price: number;
  quantity: number;
};

const ex10Items: Ex10Item[] = [
  { name: 'Rice', price: 5, quantity: 2 },
  { name: 'Bread', price: 2, quantity: 1 },
  { name: 'Eggs', price: 10, quantity: 3 },
  { name: 'Meat', price: 25, quantity: 4 },
];

const ex10Total: number = ex10Items
  .map((item) => item.price * item.quantity)
  .reduce((sum, num) => sum + num, 0);
console.log(ex10Total);

// Exercise 11: Get Unique Values (reduce)
console.log('Exercise 11 ' + '='.repeat(30));
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
const ex11NumArray: number[] = [1, 5, 5, 22, 1, 34, 18];
let ex11UniqueValues = ex11NumArray.reduce((unique: number[], num) => {
  if (!unique.includes(num)) {
    unique.push(num);
    return unique;
  } else {
    return unique;
  }
}, []);

console.log(ex11UniqueValues);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
console.log('Exercise 12 ' + '='.repeat(30));
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
type Ex12User = {
  name: string;
  age: number;
};

const ex12UsersArray: Ex12User[] = [
  { name: 'Mitko', age: 36 },
  { name: 'Gogo', age: 12 },
  { name: 'Stamat', age: 17 },
  { name: 'Ivan', age: 50 },
  { name: 'Misho', age: 25 },
];

const ex12UsersNamesOver18: string[] = ex12UsersArray
  .filter((user) => user.age > 18)
  .map((user) => user.name);
console.log(ex12UsersNamesOver18);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
console.log('Exercise 13 ' + '='.repeat(30));
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
const ex13NumArray: number[] = [10, 20, 10, 30, 40];
const ex13UniqueArray: number[] = [...new Set(ex13NumArray)];
console.log(ex13UniqueArray);

// Exercise 14: Find the difference between two arrays
console.log('Exercise 14 ' + '='.repeat(30));
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].
const ex14Arr1: number[] = [1, 2, 3, 4];
const ex14Arr2: number[] = [3, 4, 5];
const ex14Arr1UniqueValues: number[] = ex14Arr1.filter((num) => !ex14Arr2.includes(num));
const ex14Arr2UniqueValues: number[] = ex14Arr2.filter((num) => !ex14Arr1.includes(num));
const ex14Difference: number[] = [...ex14Arr1UniqueValues, ...ex14Arr2UniqueValues];
console.log(ex14Difference);

// Exercise 15: Find the union of two arrays
console.log('Exercise 15 ' + '='.repeat(30));
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
const ex15Arr1: number[] = [1, 2, 3, 4];
const ex15Arr2: number[] = [3, 4, 5];
const ex15Union: number[] = [...new Set([...ex15Arr1, ...ex15Arr2])];
console.log(ex15Union);

// Exercise 16: Count occurrences of each element
console.log('Exercise 16 ' + '='.repeat(30));
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.
const ex16Fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const ex16Counts: Record<string, number> = ex16Fruits.reduce(
  (counts: Record<string, number>, fruit) => {
    if (counts[fruit] === undefined) {
      counts[fruit] = 1;
    } else {
      counts[fruit] += 1;
    }
    return counts;
  },
  {},
);

console.log(ex16Counts);

// Exercise 17: Find the intersection of two arrays
console.log('Exercise 17 ' + '='.repeat(30));
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
// Step 5: Log the result, which should be [4, 5].
const ex17Arr1: number[] = [1, 2, 3, 4, 5];
const ex17Arr2: number[] = [4, 5, 6, 7];
const ex17Intersection: number[] = ex17Arr1.filter((num) => ex17Arr2.includes(num));
console.log(ex17Intersection);

// Exercise 18: Flatten a nested array
console.log('Exercise 18 ' + '='.repeat(30));
console.log(`I don't know how to solve this one.`);
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].
//const ex18Array = [1, [2, 3], [4, [5, 6]]];

// Exercise 19: Split an array into chunks
console.log('Exercise 19 ' + '='.repeat(30));
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].
const ex19Array: number[] = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr: number[], size: number): number[][] {
  const ex19Result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      ex19Result.push([arr[i]]);
    } else {
      ex19Result[ex19Result.length - 1].push(arr[i]);
    }
  }

  return ex19Result;
}

console.log(chunk(ex19Array, 3));

// Exercise 20: Find the second largest number
console.log('Exercise 20 ' + '='.repeat(30));
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.
const ex20Array: number[] = [12, 45, 7, 45, 23, 8];
let ex20Largest: number = 0;
let ex20SecondLargest: number = 0;

for (const num of ex20Array) {
  if (num > ex20Largest) {
    ex20SecondLargest = ex20Largest;
    ex20Largest = num;
  } else if (num < ex20Largest && num > ex20SecondLargest) {
    ex20SecondLargest = num;
  }
}

console.log(ex20SecondLargest);

// Exercise 21: Group objects by a property
console.log('Exercise 21 ' + '='.repeat(30));
// Step 1: Create an interface Student with properties name: string and grade: number.
// Step 2: Create an array of students:
//         [{ name: 'Ana', grade: 5 }, { name: 'Ivan', grade: 6 },
//          { name: 'Maria', grade: 5 }, { name: 'Petar', grade: 4 }]
// Step 3: Group the students by grade.
// Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
// Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.
interface Ex21Student {
  name: string;
  grade: number;
}

const ex21Students: Ex21Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];

const ex21Grouped: Record<number, string[]> = ex21Students.reduce(
  (grouped: Record<number, string[]>, student) => {
    if (grouped[student.grade]) {
      grouped[student.grade].push(student.name);
    } else {
      grouped[student.grade] = [student.name];
    }
    return grouped;
  },
  {},
);

console.log(ex21Grouped);

// Exercise 22: Sort objects by multiple fields
console.log('Exercise 22 ' + '='.repeat(30));
// Step 1: Use the students array from Exercise 21.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].
interface Ex22Student {
  name: string;
  grade: number;
}

const ex22Students: Ex21Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];

const ex22Sorted: Ex22Student[] = [...ex22Students].sort((a, b) => {
  if (a.grade !== b.grade) {
    return b.grade - a.grade;
  }
  return a.name.localeCompare(b.name);
});

console.log(ex22Sorted.map((student) => student.name));

///// =================================================================================
// Exercise 23: Rotate an array
console.log('Exercise 23 ' + '='.repeat(30));
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].
const ex23Array: number[] = [1, 2, 3, 4, 5];
function rotate(arr: number[], k: number): number[] {
  const ex23LastPart = arr.slice(arr.length - k);
  const ex23FirstPart = arr.slice(0, arr.length - k);

  return [...ex23LastPart, ...ex23FirstPart];
}

console.log(rotate(ex23Array, 2));

// Exercise 24: Use a tuple to return min and max
console.log('Exercise 24 ' + '='.repeat(30));
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".
const ex24Array: number[] = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  let ex24Min: number = 1000000;
  let ex24Max: number = -1000000;

  for (const num of arr) {
    if (num < ex24Min) {
      ex24Min = num;
    }
    if (num > ex24Max) {
      ex24Max = num;
    }
  }

  return [ex24Min, ex24Max];
}
const ex24Result = minMax(ex24Array);
const ex24Min = ex24Result[0];
const ex24Max = ex24Result[1];

console.log(`Min: ${ex24Min}, Max: ${ex24Max}`);

// Exercise 25: Filter by an enum value
console.log('Exercise 25 ' + '='.repeat(30));
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.
enum Ex25Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

interface Ex25User {
  name: string;
  status: Ex25Status;
}

const ex25Users: Ex25User[] = [
  { name: 'Ana', status: Ex25Status.Active },
  { name: 'Ivan', status: Ex25Status.Inactive },
  { name: 'Maria', status: Ex25Status.Active },
  { name: 'Petar', status: Ex25Status.Pending },
  { name: 'Gogo', status: Ex25Status.Active },
];

function getUsersByStatus(users: Ex25User[], status: Ex25Status): string[] {
  return users.filter((user) => user.status === status).map((user) => user.name);
}

console.log(getUsersByStatus(ex25Users, Ex25Status.Active));
