// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition

// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
let isMale: boolean = true;

// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
if (isMale) {
  console.log('The person is male.');
} else {
  console.log('The person is female.');
}

// Exercise 2: Check if a number is between two other numbers

// Step 1: Declare 3 number variables.
let firstNumber: number = 5;
let secondNumber: number = 1;
let thirdNumber: number = 10;

// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
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
let num1: number = 7;
let num2: number = 3;
let num3: number = 5;

// Step 2: Log the numbers in ascending order using if-else statements.
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 <= num2) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num3}, ${num2}, ${num1}`);
  }
}

// Exercise 4: Check if a string has more than 10 characters

// Step 1: Declare a variable and assign any string to it.
let myString: string = 'Hello, World!';

// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
if (myString.length > 10) {
  console.log(`The string "${myString}" has more than 10 characters.`);
} else {
  console.log(`The string "${myString}" does NOT have more than 10 characters.`);
}

// Exercise 5: Check if a string contains the letter 'B'

// Step 1: Declare a variable and assign a 3-character string to it.
let shortString: string = 'Bob';
let anotherShortString: string = 'Tom';
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
if (shortString.includes('B')) {
  console.log(`The string "${shortString}" contains the letter 'B'`);
} else {
  console.log(`The string "${shortString}" does NOT contain the letter 'B'`);
}

if (anotherShortString.includes('B')) {
  console.log(`The string "${anotherShortString}" contains the letter 'B'`);
} else {
  console.log(`The string "${anotherShortString}" does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.

// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
let clientAge: number = 25;
let bestLapTime: number = 55.5;
let anotherClientAge: number = 17;
let anotherBestLapTime: number = 65.0;

// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const isFirstAllowedToCompete: boolean = clientAge >= 18 && clientAge < 65 && bestLapTime < 60;
const isSecondAllowedToCompete: boolean =
  anotherClientAge >= 18 && anotherClientAge < 65 && anotherBestLapTime < 60;

if (isFirstAllowedToCompete) {
  console.log(`Client age: ${clientAge}, Lap time: ${bestLapTime}. Result: Allowed to compete!`);
} else {
  console.log(`Client age: ${clientAge}, Lap time: ${bestLapTime}. Result: NOT allowed.`);
}

if (isSecondAllowedToCompete) {
  console.log(
    `Client age: ${anotherClientAge}, Lap time: ${anotherBestLapTime}. Result: Allowed to compete!`,
  );
} else {
  console.log(
    `Client age: ${anotherClientAge}, Lap time: ${anotherBestLapTime}. Result: NOT allowed.`,
  );
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)

// Step 1: Declare a variable and assign an array of strings to it.
let fruits: string[] = ['apple', 'banana', 'cherry', 'date'];

// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
let uppercaseFruits: string[] = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

// Step 4: Log the result.
console.log(uppercaseFruits);

// Exercise 8: Filter Long Words (filter)

// Step 1: Declare a variable and assign an array of words to it.
let words: string[] = ['short', 'medium', 'longer', 'tiny', 'lengthy'];

// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
let longWords: string[] = words.filter((word) => {
  return word.length > 5;
});
// Step 4: Log the result.
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)

// Step 1: Declare a variable and assign an array of numbers to it.
let numbers: number[] = [3, 17, 2, 23, 56, 41];

// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
const maxNumber: number = numbers.reduce((max, current) => {
  if (current > max) {
    return current;
  } else {
    return max;
  }
}, numbers[0]);

// Step 4: Log the result.
console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)

// Step 1: Declare a type Item with name, price, and quantity.
type Item = {
  name: string;
  price: number;
  quantity: number;
};

// Step 2: Create an array of items.
const items: Item[] = [
  { name: 'Book', price: 12.99, quantity: 2 },
  { name: 'Pen', price: 1.5, quantity: 10 },
  { name: 'Notebook', price: 5.25, quantity: 3 },
  { name: 'Monitor', price: 300, quantity: 2 },
];

// Step 3: Use map() to calculate price × quantity for each item.
const subTotals: number[] = items.map((item) => {
  return item.price * item.quantity;
});

// Step 4: Use reduce() to sum all values.
const total: number = subTotals.reduce((sum, current) => sum + current, 0);

// Step 5: Log the total.
console.log('Sub-totals for each item:', subTotals);
console.log(`Total price of the cart: $${total}`);

// Exercise 11: Get Unique Values (reduce)

// Step 1: Declare a variable and assign an array of numbers with duplicates.
let numbersWithDuplicates: number[] = [1, 2, 2, 3, 2, 4, 4, 4, 1, 5, 6, 6];

// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
const uniqueNumbers: number[] = numbersWithDuplicates.reduce(
  (accumulator: number[], currentValue: number) => {
    if (accumulator.includes(currentValue)) {
      return accumulator;
    } else {
      accumulator.push(currentValue);
      return accumulator;
    }
  },
  [],
);

// Step 4: Log the result.
console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map – advanced)

// Step 1: Declare a type User with name and age.
type User = {
  name: string;
  age: number;
};

// Step 2: Create an array of users.
const users: User[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 16 },
  { name: 'Maria', age: 28 },
  { name: 'Ivan', age: 17 },
  { name: 'Elena', age: 35 },
  { name: 'Stefan', age: 15 },
  { name: 'Alex', age: 19 },
];

// Step 3: Use filter() to keep only users over 18.
const adults: User[] = users.filter((user) => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
});

// Step 4: Use map() to extract their names.
const adultUserNames: string[] = adults.map((user) => user.name);

// Step 5: Log the result
console.log(adultUserNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array

// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
let numbersToClean: number[] = [10, 20, 10, 30, 40];

// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
const cleanedNumbers: number[] = numbersToClean.filter((number, index) => {
  // indexOf returns the position of the FIRST occurrence.
  // If it is the same as the current index, this is the first time we see the number.
  if (numbersToClean.indexOf(number) === index) {
    return true;
  } else {
    return false;
  }
});

// Step 4: Log the new array, which should look like [10, 20, 30, 40].
console.log(cleanedNumbers);

// Exercise 14: Find the difference between two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4].
const arr1: number[] = [1, 2, 3, 4];

// Step 2: Create another array arr2 with values [3, 4, 5].
const arr2: number[] = [3, 4, 5];

// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
const onlyInArr1: number[] = arr1.filter((value) => !arr2.includes(value));
const onlyInArr2: number[] = arr2.filter((value) => !arr1.includes(value));

// Step 4: Store the result in a variable called difference.
const difference: number[] = [...onlyInArr1, ...onlyInArr2];

// Step 5: Log the result, which should be [1, 2, 5].
console.log(difference);

// Exercise 15: Find the union of two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// (arr1 and arr2 from Exercise 14 already have these values, so we reuse them.)

// Step 3: Combine both arrays into one.
const combined: number[] = [...arr1, ...arr2];

// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
const union: number[] = combined.reduce((accumulator: number[], currentValue: number) => {
  if (accumulator.includes(currentValue)) {
    return accumulator;
  } else {
    accumulator.push(currentValue);
    return accumulator;
  }
}, []);

// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
console.log(union);

// Exercise 16: Count occurrences of each element

// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
let fruitBasket: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
const counts: Record<string, number> = fruitBasket.reduce(
  (accumulator: Record<string, number>, fruit: string) => {
    if (accumulator[fruit]) {
      accumulator[fruit] = accumulator[fruit] + 1;
    } else {
      accumulator[fruit] = 1;
    }
    return accumulator;
  },
  {},
);

// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.
console.log(counts);

// Exercise 17: Find the intersection of two arrays

// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// (arr1 and arr2 already exist from Exercise 14, so we use new names here.)
const firstArray: number[] = [1, 2, 3, 4, 5];

// Step 2: Create another array arr2 with values [4, 5, 6, 7].
const secondArray: number[] = [4, 5, 6, 7];

// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
const intersection: number[] = firstArray.filter((value) => {
  if (secondArray.includes(value)) {
    return true;
  } else {
    return false;
  }
});

// Step 5: Log the result, which should be [4, 5].
console.log(intersection);

// Exercise 18: Flatten a nested array

// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// A nested array is either a number or another nested array (a recursive type).
type NestedArray = (number | NestedArray)[];
const nestedArray: NestedArray = [1, [2, 3], [4, [5, 6]]];

// Step 2: Flatten it into a single-level array (try it without using .flat()).
function flatten(array: NestedArray): number[] {
  const result: number[] = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      // The element is an array -> flatten it too (the function calls itself)
      result.push(...flatten(element));
    } else {
      // The element is a number -> add it directly
      result.push(element);
    }
  }

  return result;
}

// Step 3: Store the result in a variable called flattened.
const flattened: number[] = flatten(nestedArray);

// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].
console.log(flattened);

// Exercise 19: Split an array into chunks

// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
let numbersToChunk: number[] = [1, 2, 3, 4, 5, 6, 7];

// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
function chunk(arr: number[], size: number): number[][] {
  const chunks: number[][] = [];

  // Jump forward by "size" each time: 0, 3, 6, ...
  for (let i = 0; i < arr.length; i += size) {
    // slice(start, end) copies the elements from start up to (not including) end
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].
console.log(chunk(numbersToChunk, 3));

// Exercise 20: Find the second largest number

// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
let scores: number[] = [12, 45, 7, 45, 23, 8];

// Step 2: Find the second largest unique number (without sorting).
// We start from -Infinity, so the code also works with negative numbers.
let largest: number = -Infinity;
let secondLargest: number = -Infinity;

for (const score of scores) {
  if (score > largest) {
    // New largest number -> the old largest becomes the second largest
    secondLargest = largest;
    largest = score;
  } else if (score < largest && score > secondLargest) {
    // Smaller than the largest, but bigger than the second largest
    // (score < largest skips the duplicate 45)
    secondLargest = score;
  }
}

// Step 3: Store the result in a variable called secondLargest.
// (Done above – secondLargest holds the result.)

// Step 4: Log the result, which should be 23.
console.log(secondLargest);

// Exercise 21: Group objects by a property

// Step 1: Create an interface Student with properties name: string and grade: number.
interface Student {
  name: string;
  grade: number;
}

// Step 2: Create an array of students:
const students: Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];

// Step 3: Group the students by grade.
// Step 4: Store the result in a variable called grouped with type Record<number, string[]>.
const grouped: Record<number, string[]> = students.reduce(
  (accumulator: Record<number, string[]>, student: Student) => {
    if (accumulator[student.grade]) {
      accumulator[student.grade].push(student.name);
    } else {
      accumulator[student.grade] = [student.name];
    }
    return accumulator;
  },
  {},
);

// Step 5: Log the result, which should be { 4: ['Petar'], 5: ['Ana', 'Maria'], 6: ['Ivan'] }.
console.log(grouped);

// Exercise 22: Sort objects by multiple fields

// Step 1: Use the students array from Exercise 21.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// [...students] makes a copy, because sort() changes the array it is called on.
const sortedStudents: Student[] = [...students].sort((a, b) => {
  if (a.grade !== b.grade) {
    // Negative -> b goes first (higher grade first)
    return b.grade - a.grade;
  } else {
    // Same grade -> compare names alphabetically
    return a.name.localeCompare(b.name);
  }
});

// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].
console.log(sortedStudents.map((student) => student.name));

// Exercise 23: Rotate an array

// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
let numbersToRotate: number[] = [1, 2, 3, 4, 5];

// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
function rotate(arr: number[], k: number): number[] {
  // If k is bigger than the array length, rotating by k is the same as rotating by k % length
  const steps: number = k % arr.length;

  const lastPart: number[] = arr.slice(arr.length - steps); // [4, 5]
  const firstPart: number[] = arr.slice(0, arr.length - steps); // [1, 2, 3]

  return [...lastPart, ...firstPart];
}

// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].
console.log(rotate(numbersToRotate, 2));

// Exercise 24: Use a tuple to return min and max

// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
let values: number[] = [8, 3, 15, 1, 9];

// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
function minMax(arr: number[]): [min: number, max: number] {
  let smallest: number = arr[0];
  let biggest: number = arr[0];

  for (const value of arr) {
    if (value < smallest) {
      smallest = value;
    }
    if (value > biggest) {
      biggest = value;
    }
  }

  return [smallest, biggest];
}

// Step 4: Destructure the result into min and max.
const [min, max] = minMax(values);

// Step 5: Log the result, which should be "Min: 1, Max: 15".
console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value

// Step 1: Create an enum Status with members Active, Inactive and Pending.
enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

// Step 2: Create an interface User with properties name: string and status: Status.
// The name User is already used by the type in Exercise 12, so we call it StatusUser.
interface StatusUser {
  name: string;
  status: Status;
}

// Step 3: Create an array of 5 users with different statuses.
const statusUsers: StatusUser[] = [
  { name: 'Alice', status: Status.Active },
  { name: 'Bob', status: Status.Inactive },
  { name: 'Maria', status: Status.Active },
  { name: 'Ivan', status: Status.Pending },
  { name: 'Elena', status: Status.Active },
];

// Step 4: Write a function getUsersByStatus(users: User[], status: Status): string[]
//         that returns the names of users with the given status.
function getUsersByStatus(users: StatusUser[], status: Status): string[] {
  const filteredUsers: StatusUser[] = users.filter((user) => {
    if (user.status === status) {
      return true;
    } else {
      return false;
    }
  });

  return filteredUsers.map((user) => user.name);
}

// Step 5: Log the names of all active users.
console.log(getUsersByStatus(statusUsers, Status.Active));
