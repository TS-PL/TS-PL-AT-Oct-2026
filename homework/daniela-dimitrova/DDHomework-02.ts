// Homework 02
// Run the file with the command:
// npx ts-node homework/daniela-dimitrova/DDHomework-02.ts
// npx tsx homework/daniela-dimitrova/DDHomework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
const isFemale = true; // true for female, false for male
// Step 2: Use the boolean variable as a condition in an if/else statement.
if (isFemale) {
  console.log('The person is female.');
} else {
  console.log('The person is male.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
const firstNumber = 10;
const secondNumber = 5;
const thirdNumber = 15;
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

const num1: number = 10;
const num2: number = 5;
const num3: number = 15;

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 <= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
const text: string = 'Hello TypeScript';
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (text.length < 10) {
  console.log('The string has more than 10 characters.');
} else {
  console.log('The string has 10 or less characters.');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
const threeCharString: string = 'ABC';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
if (threeCharString.includes('B')) {
  console.log(`The string ${threeCharString} contains the letter 'B'`);
} else {
  console.log(`The string ${threeCharString} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
const clientAge: number = 25;
const bestLapTime: number = 55.5;
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${bestLapTime} seconds. The client is allowed to compete.`,
  );
} else {
  console.log(
    `Client age: ${clientAge}, Best lap time: ${bestLapTime} seconds. The client is NOT allowed to compete.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
let words: string[] = ['hello', 'world', 'typescript'];
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
let upperCaseWords: string[] = words.map((word) => word.toUpperCase());
// Step 4: Log the result.
console.log(upperCaseWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
let words2: string[] = ['apple', 'banana', 'cat', 'elephant', 'computer'];
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
let longWords: string[] = words2.filter((word) => word.length > 5);
// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
let numbers: number[] = [10, 5, 20, 8, 15];
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
let maxNumber: number = numbers.reduce((max, current) => (current > max ? current : max));
// Step 4: Log the result.
console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
interface Item {
  name: string;
  price: number;
  quantity: number;
}

// Step 2: Create an array of items.
let items: Item[] = [
  { name: 'Apple', price: 1.5, quantity: 10 },
  { name: 'Banana', price: 2, quantity: 5 },
  { name: 'Orange', price: 3, quantity: 8 },
];

// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
let totalPrice: number = items
  .map((item) => item.price * item.quantity)
  .reduce((sum, current) => sum + current, 0);
// Step 5: Log the total.
console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
let numbersWithDuplicates: number[] = [1, 2, 3, 2, 4, 1, 5];
// Step 2: Use the reduce() method to return only unique values.
let uniqueNumbers: number[] = numbersWithDuplicates.reduce((unique, current) => {
  if (!unique.includes(current)) {
    unique.push(current);
  }
  // Step 3: Store the result in a new array.
  return unique;
}, [] as number[]);
// Step 4: Log the result.
console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
interface User {
  name: string;
  age: number;
}
// Step 2: Create an array of users.
let users: User[] = [
  { name: 'Ivan', age: 25 },
  { name: 'Petar', age: 17 },
];
// Step 3: Use filter() to keep only users over 18.
let adultUsers: User[] = users.filter((user) => user.age > 18);
// Step 4: Use map() to extract their names.
let adultUserNames: string[] = adultUsers.map((user) => user.name);
// Step 5: Log the result.
console.log(adultUserNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
let numbersArray: number[] = [10, 20, 10, 30, 40];
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
let uniqueNumbersArray: number[] = numbersArray.filter(
  (value, index, self) => self.indexOf(value) === index,
);

// Step 4: Log the new array, which should look like [10, 20, 30, 40].
console.log(uniqueNumbersArray);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
let arr1: number[] = [1, 2, 3, 4];
// Step 2: Create another array arr2 with values [3, 4, 5].
let arr2: number[] = [3, 4, 5];
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
let difference: number[] = arr1
  .filter((value) => !arr2.includes(value))
  .concat(arr2.filter((value) => !arr1.includes(value)));

// Step 5: Log the result, which should be [1, 2, 5].
console.log(difference);

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
let arr3: number[] = [1, 2, 3, 4];
// Step 2: Create another array arr2 with values [3, 4, 5].
let arr4: number[] = [3, 4, 5];
// Step 3: Combine both arrays into one.
let combined: number[] = arr3.concat(arr4);
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
let union: number[] = combined.filter((value, index, self) => self.indexOf(value) === index);
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
console.log(union);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
let arr5: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
let counts: Record<string, number> = {};

for (let fruit of arr5) {
  if (counts[fruit]) {
    counts[fruit]++;
  } else {
    counts[fruit] = 1;
  }
}

// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.
console.log(counts);

// Exercise 17: Find the intersection of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
let arr6: number[] = [1, 2, 3, 4, 5];
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
let arr7: number[] = [4, 5, 6, 7];
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
let intersection: number[] = arr6.filter((value) => arr7.includes(value));
// Step 5: Log the result, which should be [4, 5].
console.log(intersection);

// Exercise 18: Flatten a nested array

// Step 1: Create a nested array
type NestedArray = (number | NestedArray)[];

let nestedArray: NestedArray = [1, [2, 3], [4, [5, 6]]];

// Step 2: Flatten the array
function flattenArray(arr: NestedArray): number[] {
  let flattened: number[] = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flattened = flattened.concat(flattenArray(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

// Step 3: Store the result
let flattened: number[] = flattenArray(nestedArray);

// Step 4: Log the result
console.log(flattened);

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
let numbers1: number[] = [1, 2, 3, 4, 5, 6, 7];
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
function chunk(arr: number[], size: number): number[][] {
  let chunks: number[][] = [];
  // Step 3: Split the array into smaller arrays of the given size.
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].
console.log(chunk(numbers1, 3));

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
let numbers2: number[] = [12, 45, 7, 45, 23, 8];
// Step 2: Find the second largest unique number (without sorting).
let uniqueNumbers2: number[] = Array.from(new Set(numbers2));
let largest: number = -Infinity;
let secondLargest: number = -Infinity;
// Step 3: Store the result in a variable called secondLargest.
for (let num of uniqueNumbers2) {
  if (num > largest) {
    secondLargest = largest;
    // Step 4: Log the result, which should be 23.
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}
console.log(secondLargest);

// Exercise 21: Group objects by a property
// Step 1: Create an interface Student with properties name: string and grade: number.
interface Student {
  name: string;
  grade: number;
}
// Step 2: Create an array of students:
//         [{ name: 'Ana', grade: 5 }, { name: 'Ivan', grade: 6 },
//          { name: 'Maria', grade: 5 }, { name: 'Petar', grade: 4 }]
let students: Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];
// Step 3: Group the students by grade.
let grouped: Record<number, string[]> = {};
for (let student of students) {
  if (!grouped[student.grade]) {
    // Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
    grouped[student.grade] = [];
  }
  // Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.
  grouped[student.grade].push(student.name);
}
console.log(grouped);

// Exercise 22: Sort objects by multiple fields
// Step 1: Use the students array from Exercise 25.
interface Student {
  name: string;
  grade: number;
}
// Step 2: Sort the students by grade (highest first).
students.sort((a, b) => b.grade - a.grade);
// Step 3: If two students have the same grade, sort them by name (A to Z).
students.sort((a, b) => {
  if (a.grade === b.grade) {
    return a.name.localeCompare(b.name);
  }
  return 0;
});
// Step 4: Store the result in a new array (do not change the original).
let sortedStudents: Student[] = [...students];
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].
console.log(sortedStudents.map((student) => student.name));

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
let numbers3: number[] = [1, 2, 3, 4, 5];
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
function rotate(arr: number[], k: number): number[] {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].
console.log(rotate(numbers3, 2));

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
let numbers4: number[] = [8, 3, 15, 1, 9];
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
function minMax(arr: number[]): [min: number, max: number] {
  let min = Infinity;
  let max = -Infinity;
  // Step 3: Find the smallest and largest numbers in one loop.
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
    // Step 4: Destructure the result into min and max.
    if (num > max) {
      max = num;
    }
  }
  return [min, max];
}
// Step 5: Log the result, which should be "Min: 1, Max: 15".
let [min, max] = minMax(numbers4);
console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.
