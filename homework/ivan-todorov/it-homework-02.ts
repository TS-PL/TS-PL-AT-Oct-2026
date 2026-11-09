// Homework 02
// npx tsx homework/ivan-todorov/it-homework-02.ts
// npx ts-node homework/ivan-todorov/it-homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isMale: boolean = true;
if (isMale) {
  console.log('Male.');
} else {
  console.log('Female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstNumber: number = 6;
const secondNumber: number = 9;
const thirdNumber: number = 45;
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

if (firstNumber <= secondNumber && secondNumber <= thirdNumber) {
  console.log(firstNumber, secondNumber, thirdNumber);
} else if (firstNumber <= thirdNumber && thirdNumber <= secondNumber) {
  console.log(firstNumber, thirdNumber, secondNumber);
} else if (secondNumber <= firstNumber && firstNumber <= thirdNumber) {
  console.log(secondNumber, firstNumber, thirdNumber);
} else if (secondNumber <= thirdNumber && thirdNumber <= firstNumber) {
  console.log(secondNumber, thirdNumber, firstNumber);
} else if (thirdNumber <= firstNumber && firstNumber <= secondNumber) {
  console.log(thirdNumber, firstNumber, secondNumber);
} else {
  console.log(thirdNumber, secondNumber, firstNumber);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const message: string = 'SAMO LEVSKI!';
if (message.length > 10) {
  console.log('The length of the string is greater than 10.');
} else {
  console.log('The length of the string is equal or fewer than 10.');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

// const str: string = "Bau";
const str: string = 'Mqu';
if (str.includes('B')) {
  console.log(`The string ${str} contains the letter 'B'`);
} else {
  console.log(`The string ${str} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

// const clientAge: number = 47;
const clientAge: number = 67;
const bestLapTime: number = 48.01;
let isAllowed: boolean = false;
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  isAllowed = true;
}

console.log(
  `Client age: ${clientAge}, Best lap time: ${bestLapTime} seconds. The client is ${isAllowed ? '' : 'NOT '}allowed to compete.`,
);

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const strArr: string[] = ['samo', 'levski', '!'];
const strUppercase: string[] = strArr.map((str) => str.toUpperCase());
console.log(strUppercase);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const filteredArr: string[] = strArr.filter((str) => str.length > 5);
console.log(filteredArr);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers: number[] = [100, 320, 301, 40];
const largestNumber: number = numbers.reduce((max, currentValue) => {
  return Math.max(currentValue, max);
});

console.log('largestNumber', largestNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: 'Biri', price: 2, quantity: 12 },
  { name: 'Pizza', price: 25, quantity: 2 },
  { name: 'Sos', price: 1.5, quantity: 3 },
];

const total: number = items
  .map((i) => i.price * i.quantity)
  .reduce((total, currentValue) => {
    return total + currentValue;
  });

console.log('Total:', total);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const numbersArr: number[] = [1, 25, 300, 25, 423, 1, 58, 90, 25];
const uniqueArr: number[] = numbersArr.reduce((acc, currNumber) => {
  if (!acc.includes(currNumber)) {
    acc.push(currNumber);
  }

  return acc;
}, [] as number[]);

console.log(uniqueArr);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Ivan', age: 47 },
  { name: 'Sasho', age: 25 },
  { name: 'Maria', age: 17 },
];

const usersOver18: string[] = users.filter((u) => u.age >= 18).map((u) => u.name);

console.log(usersOver18);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

const numbersToReduce: number[] = [10, 20, 10, 30, 40];
const uniqueNumbers: number[] = [...new Set(numbersToReduce)];

console.log(uniqueNumbers);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
const difference: number[] = [];

for (const n of arr1) {
  if (!arr2.includes(n)) {
    difference.push(n);
  }
}

for (const n of arr2) {
  if (!arr1.includes(n)) {
    difference.push(n);
  }
}

// const difference1: number[] = arr1.filter((n) => !arr2.includes(n));
// const difference2: number[] = arr2.filter((n) => !arr1.includes(n));
// const difference: number[] = [...difference1, ...difference2];

// const difference: number[] = [
//   ...arr1.filter((number) => !arr2.includes(number)),
//   ...arr2.filter((number) => !arr1.includes(number))
// ];

console.log(difference);

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

const union1: number[] = [...new Set([...new Set(arr1), ...new Set(arr2)])];

const union: number[] = [...new Set([...arr1, ...arr2])];

console.log(union1);
console.log(union);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.

const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts: Record<string, number> = {};
for (const f of fruits) {
  if (f in counts) {
    counts[f]++;
  } else {
    counts[f] = 1;
  }
}

// const counts: Record<string, number> = fruits.reduce(
//   (result, fruit) => {
//     if (fruit in result) {
//       result[fruit]++;
//     } else {
//       result[fruit] = 1;
//     }

//     return result;
//   },
//   {} as Record<string, number>,
// );

console.log(counts);

// Exercise 17: Find the intersection of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
// Step 5: Log the result, which should be [4, 5].

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [4, 5, 6, 7];
// const intersection: number[] = [];
// for (const n of array1) {
//   if (array2.includes(n)) {
//     intersection.push(n);
//   }
// }

const intersection: number[] = array1.filter((n) => array2.includes(n));

console.log(intersection);

// Exercise 18: Flatten a nested array
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].

const nestedArr = [1, [2, 3], [4, [5, 6]]];

function getArr(arr: (number | (number | number[])[])[]): number[] {
  const flattened: number[] = [];

  for (const n of arr) {
    if (Array.isArray(n)) {
      flattened.push(...getArr(n));
    } else {
      flattened.push(n);
    }
  }

  return flattened;
}

const flattened: number[] = getArr(nestedArr);

console.log(flattened);

// const flattened: number[] = [];

// function flatten(arr: (number | any[])[]): void {
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       flatten(element);
//     } else {
//       flattened.push(element);
//     }
//   });
// }

// flatten(nestedArr);

// console.log(flattened);

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].

const chunkArr: number[] = [1, 2, 3, 4, 5, 6, 7];
function chunk(arr: number[], size: number): number[][] {
  const chunk: number[][] = [];
  for (let i = 0, k = 0; i < arr.length; i += size, k++) {
    chunk.push([]);
    for (let j = 0; j < size && j + i < arr.length; j++) {
      chunk[k][j] = arr[j + i];
    }
  }

  return chunk;
}

console.log(chunk(chunkArr, 3));

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.

const secondLargestNumbers: number[] = [12, 45, 7, 45, 23, 8];
let largest: number = secondLargestNumbers[0];
let secondLargest: number = secondLargestNumbers[0];
for (let i = 1; i < secondLargestNumbers.length; i++) {
  if (secondLargestNumbers[i] > largest) {
    secondLargest = largest;
    largest = secondLargestNumbers[i];
  }
  if (secondLargest < secondLargestNumbers[i] && secondLargestNumbers[i] !== largest) {
    secondLargest = secondLargestNumbers[i];
  }
}

// const secondLargest: number = numbers.reduce(
//   (result, currentValue) => {
//     if (currentValue > result[0]) {
//       result[1] = result[0];
//       result[0] = currentValue;
//     } else if (currentValue > result[1] && currentValue < result[0]) {
//       result[1] = currentValue;
//     }

//     return result;
//   },
//   [-Infinity, -Infinity]
// )[1];

console.log(secondLargest);

// Exercise 21: Group objects by a property
// Step 1: Create an interface Student with properties name: string and grade: number.
// Step 2: Create an array of students:
//         [{ name: 'Ana', grade: 5 }, { name: 'Ivan', grade: 6 },
//          { name: 'Maria', grade: 5 }, { name: 'Petar', grade: 4 }]
// Step 3: Group the students by grade.
// Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
// Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.

interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];

// const studentsByGrade: Record<number, string[]> = {};
// for (const s of students) {
//   studentsByGrade[s.grade] ??= [];
//   studentsByGrade[s.grade].push(s.name);
// }

const studentsByGrade = students.reduce<Record<number, string[]>>((result, { name, grade }) => {
  (result[grade] ??= []).push(name);

  return result;
}, {});

console.log(studentsByGrade);

// Exercise 22: Sort objects by multiple fields
// Step 1: Use the students array from Exercise 25.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].

const studentsByGradeAndName = [...students]
  .sort((a, b) => {
    if (b.grade === a.grade) {
      return a.name.localeCompare(b.name);
    }

    return b.grade - a.grade;
  })
  .map((s) => s.name);

console.log(studentsByGradeAndName);

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].

const arrNums = [1, 2, 3, 4, 5];

function rotate(arr: number[], k: number): number[] {
  const splitIndex = arr.length - k;
  const lastPart = arr.slice(splitIndex);
  const firstPart = arr.slice(0, splitIndex);

  return [...lastPart, ...firstPart];
}

console.log(rotate(arrNums, 2));

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".

const nums = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  let min = arr[0];
  let max = arr[0];
  for (const n of arr) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  }

  return [min, max];
}

const [min, max] = minMax(nums);
console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.

enum Status {
  Active,
  Inactive,
  Pending,
}

interface UserStatus {
  name: string;
  status: Status;
}

const usersStatus: UserStatus[] = [
  { name: 'Teodor', status: Status.Active },
  { name: 'Ivan', status: Status.Inactive },
  { name: 'Soni', status: Status.Active },
  { name: 'Petar', status: Status.Pending },
  { name: 'Hrisi', status: Status.Inactive },
];

function getUsersByStatus(users: UserStatus[], status: Status): string[] {
  return users.filter((user) => user.status === status).map((user) => user.name);
}

console.log(getUsersByStatus(usersStatus, Status.Active));
