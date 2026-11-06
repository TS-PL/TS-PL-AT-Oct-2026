// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.
const isMale: boolean = true;

if (isMale) {
  console.log('The person is male');
} else {
  console.log('The person is female');
}

// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"
const firstNumber: number = 14;
const secondNumber: number = 10;
const thirdNumber: number = 20;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.
const num1: number = 30;
const num2: number = 10;
const num3: number = 20;

if (num1 <= num2 && num2 <= num3) {
  console.log(num1, num2, num3);
} else if (num1 <= num3 && num3 <= num2) {
  console.log(num1, num3, num2);
} else if (num2 <= num1 && num1 <= num3) {
  console.log(num2, num1, num3);
} else if (num2 <= num3 && num3 <= num1) {
  console.log(num2, num3, num1);
} else if (num3 <= num1 && num1 <= num2) {
  console.log(num3, num1, num2);
} else {
  console.log(num3, num2, num1);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.
const sentence: string = 'TypeScript is awesome';

if (sentence.length > 10) {
  console.log('The string has more than 10 characters');
} else {
  console.log('The string has 10 or fewer characters');
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"
const shortWord: string = 'Box';

if (shortWord.includes('B')) {
  console.log(`The string ${shortWord} contains the letter 'B'`);
} else {
  console.log(`The string ${shortWord} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.
const clientAge: number = 24;
const bestLapTime: number = 53.5;

if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(`Age: ${clientAge}, Best lap time: ${bestLapTime} - Allowed to compete`);
} else {
  console.log(`Age: ${clientAge}, Best lap time: ${bestLapTime} - NOT allowed to compete`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const lowerCaseWords: string[] = ['coffee', 'music', 'laptop'];
const upperCaseWords: string[] = lowerCaseWords.map((word) => word.toUpperCase());
console.log(upperCaseWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.
const wordsArray: string[] = ['desk', 'keyboard', 'mouse', 'monitor', 'pad'];
const longWords: string[] = wordsArray.filter((word) => word.length > 5);
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.
const numbersArray: number[] = [14, 52, 8, 91, 33];
const largestNumber: number = numbersArray.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, numbersArray[0]);
console.log(largestNumber);

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

const itemsList: Item[] = [
  { name: 'Phone', price: 800, quantity: 1 },
  { name: 'Charger', price: 40, quantity: 2 },
  { name: 'Case', price: 25, quantity: 2 },
];

const itemTotals: number[] = itemsList.map((item) => item.price * item.quantity);
const totalPrice: number = itemTotals.reduce((sum, current) => sum + current, 0);
console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.
const numbersWithDuplicates: number[] = [4, 7, 4, 12, 7, 19];
const uniqueValues: number[] = numbersWithDuplicates.reduce((unique: number[], num) => {
  if (!unique.includes(num)) {
    unique.push(num);
  }
  return unique;
}, []);
console.log(uniqueValues);

// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.
type UserProfile = {
  name: string;
  age: number;
};

const usersArray: UserProfile[] = [
  { name: 'Viktor', age: 17 },
  { name: 'Teodora', age: 23 },
  { name: 'Kaloyan', age: 28 },
  { name: 'Simona', age: 16 },
];

const adultUsers: UserProfile[] = usersArray.filter((user) => user.age > 18);
const adultNames: string[] = adultUsers.map((user) => user.name);
console.log(adultNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
const numbers13: number[] = [10, 20, 10, 30, 40];
const unique13: number[] = [...new Set(numbers13)];
console.log(unique13);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];

const onlyInArr1: number[] = arr1.filter((num) => !arr2.includes(num));
const onlyInArr2: number[] = arr2.filter((num) => !arr1.includes(num));
const difference: number[] = [...onlyInArr1, ...onlyInArr2];
console.log(difference);

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
const unionArr1: number[] = [1, 2, 3, 4];
const unionArr2: number[] = [3, 4, 5];

const combinedArrays: number[] = [...unionArr1, ...unionArr2];
const union: number[] = [...new Set(combinedArrays)];
console.log(union);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.
const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts: Record<string, number> = {};

for (const fruit of fruits) {
  if (counts[fruit]) {
    counts[fruit] = counts[fruit] + 1;
  } else {
    counts[fruit] = 1;
  }
}
console.log(counts);

// Exercise 17: Find the intersection of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4, 5].
// Step 2: Create another array arr2 with values [4, 5, 6, 7].
// Step 3: Find the elements that exist in both arrays.
// Step 4: Store the result in a variable called intersection.
// Step 5: Log the result, which should be [4, 5].
const interArr1: number[] = [1, 2, 3, 4, 5];
const interArr2: number[] = [4, 5, 6, 7];

const intersection: number[] = interArr1.filter((num) => interArr2.includes(num));
console.log(intersection);

// Exercise 18: Flatten a nested array
// Step 1: Create an array with the values [1, [2, 3], [4, [5, 6]]].
// Step 2: Flatten it into a single-level array (try it without using .flat()).
// Step 3: Store the result in a variable called flattened.
// Step 4: Log the result, which should be [1, 2, 3, 4, 5, 6].
const nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];
const flattened: number[] = [];

for (const element of nestedArray) {
  if (Array.isArray(element)) {
    for (const subElement of element) {
      if (Array.isArray(subElement)) {
        for (const deepElement of subElement) {
          flattened.push(deepElement);
        }
      } else {
        flattened.push(subElement);
      }
    }
  } else {
    flattened.push(element);
  }
}
console.log(flattened);

// Exercise 19: Split an array into chunks
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5, 6, 7].
// Step 2: Write a function chunk(arr: number[], size: number): number[][].
// Step 3: Split the array into smaller arrays of the given size.
// Step 4: Log chunk(numbers, 3), which should be [[1, 2, 3], [4, 5, 6], [7]].
const numbers19: number[] = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr: number[], size: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk(numbers19, 3));

// Exercise 20: Find the second largest number
// Step 1: Create an array with the numbers [12, 45, 7, 45, 23, 8].
// Step 2: Find the second largest unique number (without sorting).
// Step 3: Store the result in a variable called secondLargest.
// Step 4: Log the result, which should be 23.
const numbers20: number[] = [12, 45, 7, 45, 23, 8];
let largest: number = 0;
let secondLargest: number = 0;

for (const num of numbers20) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num < largest && num > secondLargest) {
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

const grouped: Record<number, string[]> = {};

for (const student of students) {
  if (!grouped[student.grade]) {
    grouped[student.grade] = [];
  }
  grouped[student.grade].push(student.name);
}
console.log(grouped);

// Exercise 22: Sort objects by multiple fields
// Step 1: Use the students array from Exercise 25.
// Step 2: Sort the students by grade (highest first).
// Step 3: If two students have the same grade, sort them by name (A to Z).
// Step 4: Store the result in a new array (do not change the original).
// Step 5: Log the names, which should be ['Ivan', 'Ana', 'Maria', 'Petar'].
const sortedStudents: Student[] = [...students].sort((a, b) => {
  if (a.grade !== b.grade) {
    return b.grade - a.grade;
  }
  return a.name.localeCompare(b.name);
});

const sortedStudentNames: string[] = sortedStudents.map((student) => student.name);
console.log(sortedStudentNames);

// Exercise 23: Rotate an array
// Step 1: Create an array with the numbers [1, 2, 3, 4, 5].
// Step 2: Write a function rotate(arr: number[], k: number): number[].
// Step 3: Move the last k elements to the front of the array.
// Step 4: Log rotate(numbers, 2), which should be [4, 5, 1, 2, 3].
const numbers23: number[] = [1, 2, 3, 4, 5];

function rotate(arr: number[], k: number): number[] {
  const lastElements: number[] = arr.slice(arr.length - k);
  const firstElements: number[] = arr.slice(0, arr.length - k);
  return [...lastElements, ...firstElements];
}

console.log(rotate(numbers23, 2));

// Exercise 24: Use a tuple to return min and max
// Step 1: Create an array with the numbers [8, 3, 15, 1, 9].
// Step 2: Write a function minMax(arr: number[]): [min: number, max: number].
// Step 3: Find the smallest and largest numbers in one loop.
// Step 4: Destructure the result into min and max.
// Step 5: Log the result, which should be "Min: 1, Max: 15".
const numbers24: number[] = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  let minVal: number = arr[0];
  let maxVal: number = arr[0];

  for (const num of arr) {
    if (num < minVal) {
      minVal = num;
    }
    if (num > maxVal) {
      maxVal = num;
    }
  }

  return [minVal, maxVal];
}

const [min, max] = minMax(numbers24);
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

interface User {
  name: string;
  status: Status;
}

const users25: User[] = [
  { name: 'Nikolay', status: Status.Active },
  { name: 'Desislava', status: Status.Inactive },
  { name: 'Martin', status: Status.Pending },
  { name: 'Ralitsa', status: Status.Active },
  { name: 'Boris', status: Status.Inactive },
];

function getUsersByStatus(users: User[], status: Status): string[] {
  return users.filter((user) => user.status === status).map((user) => user.name);
}

console.log(getUsersByStatus(users25, Status.Active));
