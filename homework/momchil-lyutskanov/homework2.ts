// Homework 02 - Answers - Momchil Lyutskanov
// npx ts-node homework/momchil-lyutskanov/homework2.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isMale: boolean = false;

if (isMale) {
  console.log('This person is Male.');
} else {
  console.log('Thie person is Female.');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const numberA: number = 11;
const numberB: number = 1;
const numberC: number = 10;

if (numberB <= numberA && numberA <= numberC) {
  console.log(`"The number ${numberA} is between ${numberB} and ${numberC}"`);
} else {
  console.log(`"The number ${numberA} is NOT between ${numberB} and ${numberC}"`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const firstNumber: number = 30;
const secondNumber: number = 10;
const thirdNumber: number = 20;

if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
  if (secondNumber <= thirdNumber) {
    console.log(firstNumber, secondNumber, thirdNumber);
  } else {
    console.log(firstNumber, thirdNumber, secondNumber);
  }
} else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
  if (firstNumber <= thirdNumber) {
    console.log(secondNumber, firstNumber, thirdNumber);
  } else {
    console.log(secondNumber, thirdNumber, firstNumber);
  }
} else {
  if (firstNumber <= secondNumber) {
    console.log(thirdNumber, firstNumber, secondNumber);
  } else {
    console.log(thirdNumber, secondNumber, firstNumber);
  }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const text: string = 'This';

if (text.length >= 10) {
  console.log('The string has more than 10 characters');
} else {
  console.log('The string has less than 10 characters');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const text1: string = 'ADC';

if (text1.includes('B')) {
  console.log(`"The string ${text1} contains the letter 'B'"`);
} else {
  console.log(`"The string ${text1} does NOT contains the letter 'B'"`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const clientAge: number = 20;
const lapTime: number = 59.22;

if (clientAge >= 18 && clientAge <= 65 && lapTime <= 60) {
  console.log(
    `Client's age is ${clientAge} and their lap time is ${lapTime} seconds and they are allowed to enter the karting competition`,
  );
} else {
  console.log(
    `Client's age is ${clientAge} and their lap time is ${lapTime} seconds and they are NOT allowed to enter the karting competition`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const words: string[] = ['hello', 'world', 'typescript'];

const uppercaseWords: string[] = words.map((word) => word.toUpperCase());

console.log(uppercaseWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const words1: string[] = ['short', 'notlong', 'verylongword'];

const filteredWords: string[] = words1.filter((word) => word.length > 5);

console.log(filteredWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers: number[] = [1, 33, 15, 68, 22];

const biggestNumber: number = numbers.reduce((maximum, biggestNumber) => {
  if (biggestNumber > maximum) {
    return biggestNumber;
  } else {
    return maximum;
  }
});

console.log(biggestNumber);

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
  { name: 'Laptop', price: 100, quantity: 5 },
  { name: 'Mouse', price: 10, quantity: 15 },
  { name: 'Keyboard', price: 15, quantity: 9 },
];

const itemsTotals: number[] = items.map((item) => item.price * item.quantity);

const totalPrice: number = itemsTotals.reduce((sum, itemsTotal) => sum + itemsTotal, 0);

console.log(`Total price of items: ${totalPrice}`);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const numberos: number[] = [3, 2, 3, 5, 3, 5, 1, 1, 3, 4];

const uniqueNumbers: number[] = numberos.reduce<number[]>((uniqueValues, currentNumber) => {
  if (!uniqueValues.includes(currentNumber)) {
    uniqueValues.push(currentNumber);
  }
  return uniqueValues;
}, []);

console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type anUser = {
  name: string;
  age: number;
};

const listUsers: anUser[] = [
  { name: 'George', age: 19 },
  { name: 'Warren', age: 15 },
  { name: 'Gloriya', age: 20 },
  { name: 'Ian', age: 17 },
];

const usersOver18: anUser[] = listUsers.filter((anUser) => anUser.age > 18);

const usersNames: string[] = usersOver18.map((anUser) => anUser.name);

console.log(usersNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

const numberList: number[] = [10, 20, 10, 30, 40];

const uniquesNumbers: number[] = [...new Set(numberList)];

console.log(uniquesNumbers);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

/* 
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const onlyInArr1: number[] = arr1.filter((number) => !arr2.includes(number));
const onlyInArr2: number[] = arr2.filter((number) => !arr1.includes(number));

const differenceArrs: number[] = [...onlyInArr1, ...onlyInArr2];

console.log(differenceArrs);
 */

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const inBothArr1: number[] = arr1.filter((number) => arr2.includes(number));

const commonArrs: number[] = [...inBothArr1];

console.log(commonArrs);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.

const strArr: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counts: Record<string, number> = strArr.reduce<Record<string, number>>(
  (accumulator, strArr) => {
    accumulator[strArr] = (accumulator[strArr] ?? 0) + 1;
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

const arr3: number[] = [1, 2, 3, 4, 5];
const arr4: number[] = [4, 5, 6, 7];

const inBothArr2: number[] = arr3.filter((number) => arr4.includes(number));

const intersection: number[] = [...inBothArr2];

console.log(intersection);

// Exercise 18: Flatten a nested array
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].

type nestedNumberArray = (number | nestedNumberArray)[];

const numbers1: nestedNumberArray = [1, [2, 3], [4, [5, 6]]];

function flattenedNumbers(values: nestedNumberArray): number[] {
  const result: number[] = [];

  for (const value of values) {
    if (Array.isArray(value)) {
      const nestedValues: number[] = flattenedNumbers(value);

      for (const nestedValue of nestedValues) {
        result.push(nestedValue);
      }
    } else {
      result.push(value);
    }
  }
  return result;
}

const flattened: number[] = flattenedNumbers(numbers1);

console.log(flattened);

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].

const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr: number[], size: number): number[][] {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('Chunk size must be a positive integer.');
  }

  const chunks: number[][] = [];

  for (let index = 0; index < arr.length; index += size) {
    chunks.push(arr.slice(index, index + size));
  }

  return chunks;
}

console.log(chunk(numbers2, 3));

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.

const numbers3: number[] = [12, 45, 7, 45, 23, 8];

let largest: number | undefined = undefined;
let secondLargest: number | undefined = undefined;

for (const number of numbers3) {
  if (largest === undefined || number > largest) {
    secondLargest = largest;
    largest = number;
  } else if (number < largest && (secondLargest === undefined || number > secondLargest)) {
    secondLargest = number;
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

const grouped: Record<number, string[]> = students.reduce<Record<number, string[]>>(
  (groups, student) => {
    const names: string[] = groups[student.grade] ?? [];

    names.push(student.name);
    groups[student.grade] = names;

    return groups;
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

const sortedStudents: Student[] = [...students].sort((firstStudent, secondStudent) => {
  const gradeDifference = secondStudent.grade - firstStudent.grade;

  if (gradeDifference !== 0) {
    return gradeDifference;
  }

  return firstStudent.name.localeCompare(secondStudent.name, 'en');
});

const sortedNames: string[] = sortedStudents.map((student) => student.name);

console.log(sortedNames);

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].

const numbers4: number[] = [1, 2, 3, 4, 5];

function rotate(arr: number[], k: number): number[] {
  if (!Number.isSafeInteger(k) || k < 0) {
    throw new Error('Rotation count must be a nonnegative safe integer.');
  }

  if (arr.length === 0) {
    return [];
  }

  const rotation: number = k % arr.length;
  const splitIndex: number = arr.length - rotation;

  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

console.log(rotate(numbers4, 2));

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".

const numbers5: number[] = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  const firstNumber = arr[0];

  if (firstNumber === undefined) {
    throw new Error('The array must contain at least one number.');
  }

  let smallest: number = firstNumber;
  let largest: number = firstNumber;

  for (const number of arr) {
    if (number < smallest) {
      smallest = number;
    }

    if (number > largest) {
      largest = number;
    }
  }

  return [smallest, largest];
}

const [min, max] = minMax(numbers5);

console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value
// Step 1: Create an enum Status with members Active, Inactive and Pending.
// Step 2: Create an interface User with properties name: string and status: Status.
// Step 3: Create an array of 5 users with different statuses.
// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
// Step 5: Log the names of all active users.

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

interface User {
  name: string;
  status: Status;
}

const users: User[] = [
  { name: 'Ana', status: Status.Active },
  { name: 'Ivan', status: Status.Inactive },
  { name: 'Maria', status: Status.Active },
  { name: 'Petar', status: Status.Pending },
  { name: 'Elena', status: Status.Active },
];

function getUsersByStatus(users: User[], status: Status): string[] {
  return users.filter((user) => user.status === status).map((user) => user.name);
}

console.log(getUsersByStatus(users, Status.Active));
