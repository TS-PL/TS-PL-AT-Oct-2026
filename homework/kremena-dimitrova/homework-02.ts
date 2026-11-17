// Run the file with the command:
// npx ts-node homework/kremena-dimitrova/homework-02.ts
// npx tsx homework/kremena-dimitrova/homework-02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
console.log('-----------1-------------');

const isMale: boolean = false;

if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
console.log('-----------2-------------');

const firstNumber: number = 2;
const secondNumber: number = 30;
const thirdNumber: number = 10;

if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
console.log('-----------3-------------');

const num1: number = 30;
const num2: number = 10;
const num3: number = 20;

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
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
console.log('-----------4-------------');

const randomString: string = 'I like TypeScript!';

if (randomString.length > 10) {
  console.log(
    `The string "${randomString}" has more than 10 characters. (Length: ${randomString.length})`,
  );
} else {
  console.log(
    `The string "${randomString}" has 10 or fewer characters. (Length: ${randomString.length})`,
  );
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
console.log('-----------5-------------');

const sampleString: string = 'ABC';

if (sampleString.includes('B')) {
  console.log(`The string ${sampleString} contains the letter 'B'`);
} else {
  console.log(`The string ${sampleString} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
console.log('-----------6-------------');

const clientAge: number = 24;
const bestLapTime: number = 57.85;

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(`Client Age: ${clientAge}`);
  console.log(`Best Lap Time: ${bestLapTime}s`);
  console.log('Result: The client IS allowed to compete in the karting competition.');
} else {
  console.log(`Client Age: ${clientAge}`);
  console.log(`Best Lap Time: ${bestLapTime}s`);
  console.log('Result: The client is NOT allowed to compete in the karting competition.');
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log('-----------7-------------');

const words: string[] = ['program', 'playwright', 'typescript', 'code'];

const uppercaseWords: string[] = words.map((word) => word.toUpperCase());

console.log(uppercaseWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
console.log('-----------8-------------');

const allWords: string[] = ['cat', 'typescript', 'dog', 'javascript', 'code', 'programming'];
const longWords: string[] = allWords.filter((word) => word.length > 5);

console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
console.log('-----------9-------------');

const numbers: number[] = [12, 45, 3, 89, 23, 67];

const maxNumber: number = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0],
);

console.log(`The maximum number is: ${maxNumber}`);

// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.
console.log('-----------10-------------');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const cart: Item[] = [
  { name: 'Notebook', price: 3.5, quantity: 2 },
  { name: 'Pen', price: 1.2, quantity: 5 },
  { name: 'Backpack', price: 45.0, quantity: 1 },
];

const itemTotals: number[] = cart.map((item) => item.price * item.quantity);

const totalPrice: number = itemTotals.reduce((sum, current) => sum + current, 0);

console.log(`The total price is: $${totalPrice.toFixed(2)}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
console.log('-----------11-------------');

const duplicatedNumbers: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 6, 3];

const uniqueNumbers: number[] = duplicatedNumbers.reduce(
  (accumulator: number[], current: number) => {
    if (!accumulator.includes(current)) {
      accumulator.push(current);
    }
    return accumulator;
  },
  [],
);

console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
console.log('-----------12-------------');

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Иван', age: 16 },
  { name: 'Мария', age: 22 },
  { name: 'Георги', age: 19 },
  { name: 'Елена', age: 15 },
  { name: 'Петър', age: 30 },
];

const adultNames: string[] = users
  .filter((user: User) => user.age > 18)
  .map((user: User) => user.name);

console.log(adultNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
console.log('-----------13-------------');

const numbersWithDuplicates: number[] = [10, 20, 10, 30, 40];

const uniqueNums: number[] = [...new Set(numbersWithDuplicates)];

console.log(uniqueNums);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].
console.log('-----------14-------------');

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const difference: number[] = [
  ...arr1.filter((item: number) => !arr2.includes(item)),
  ...arr2.filter((item: number) => !arr1.includes(item)),
];

console.log(difference);

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
console.log('-----------15-------------');

const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [3, 4, 5];

const union: number[] = [...new Set([...array1, ...array2])];

console.log(union);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.
console.log('-----------16-------------');

const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counts: Record<string, number> = fruits.reduce(
  (accumulator: Record<string, number>, fruit: string) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    return accumulator;
  },
  {},
);

console.log(counts);

// Exercise 17: Find the intersection of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
// Step 5: Log the result, which should be [4, 5].
console.log('-----------17-------------');

const arrNum1: number[] = [1, 2, 3, 4, 5];
const arrNum2: number[] = [4, 5, 6, 7];

const intersection: number[] = arrNum1.filter((item: number) => arrNum2.includes(item));

console.log(intersection);

// Exercise 18: Flatten a nested array
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].
console.log('-----------18-------------');

const nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];

function flattenArray(arr: any[]): any[] {
  return arr.reduce((accumulator: any[], current: any) => {
    if (Array.isArray(current)) {
      accumulator.push(...flattenArray(current));
    } else {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
}

const flattened: any[] = flattenArray(nestedArray);

console.log(flattened);

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].
console.log('-----------19-------------');

const numbersToChunk: number[] = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr: number[], size: number): number[][] {
  const chunkedArray: number[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
}

console.log(chunk(numbersToChunk, 3));

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.
console.log('-----------20-------------');

const numArray: number[] = [12, 45, 7, 45, 23, 8];
const uniqueArray: number[] = [...new Set(numArray)];

let largest: number = -Infinity;
let secondLargest: number = -Infinity;

for (const num of uniqueArray) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log(secondLargest);

// Exercise 21: Group objects by a property
// Step 1: Create an interface Student with properties name: string and grade: number.
// Step 2: Create an array of students:
//         [{ name: 'Ana', grade: 5 }, { name: 'Ivan', grade: 6 },
//          { name: 'Maria', grade: 5 }, { name: 'Petar', grade: 4 }]
// Step 3: Group the students by grade.
// Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
// Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.
console.log('-----------21-------------');

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

const grouped: Record<number, string[]> = students.reduce(
  (accumulator: Record<number, string[]>, student: Student) => {
    if (!accumulator[student.grade]) {
      accumulator[student.grade] = [];
    }
    accumulator[student.grade].push(student.name);
    return accumulator;
  },
  {},
);

console.log(grouped);

// Exercise 22: Sort objects by multiple fields
// Step 1: Use the students array from Exercise 25.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].
console.log('-----------22-------------');

const sortedStudents: Student[] = [...students].sort((a, b) => {
  if (b.grade !== a.grade) {
    return b.grade - a.grade;
  }
  return a.name.localeCompare(b.name);
});

const sortedNames: string[] = sortedStudents.map((student: Student) => student.name);

console.log(sortedNames);

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].
console.log('-----------23-------------');

const numbersToRotate: number[] = [1, 2, 3, 4, 5];

function rotate(arr: number[], k: number): number[] {
  const n = arr.length;
  const effectiveK = k % n;

  return [...arr.slice(n - effectiveK), ...arr.slice(0, n - effectiveK)];
}

console.log(rotate(numbersToRotate, 2));

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".
console.log('-----------24-------------');

const randomNumbers: number[] = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

const [min, max] = minMax(randomNumbers);

console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.
console.log('-----------25-------------');

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

interface StatusUser {
  name: string;
  status: Status;
}

const statusUsers: StatusUser[] = [
  { name: 'Иван', status: Status.Active },
  { name: 'Мария', status: Status.Inactive },
  { name: 'Георги', status: Status.Active },
  { name: 'Елена', status: Status.Pending },
  { name: 'Петър', status: Status.Active },
];

function getUsersByStatus(users: StatusUser[], status: Status): string[] {
  return statusUsers
    .filter((user: StatusUser) => user.status === status)
    .map((user: StatusUser) => user.name);
}

const activeUsers: string[] = getUsersByStatus(statusUsers, Status.Active);
console.log(activeUsers);
