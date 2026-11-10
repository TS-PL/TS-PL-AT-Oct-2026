// Homework 02
//npx tsx homework/margarita-mihaylova/homework02.ts
//npx ts-node homework/margarita-mihaylova/homework02.ts

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
// Step 1: Declare a boolean variable indicating whether a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isFemale: boolean = true;
if (isFemale) {
    console.log("The person is female.");
    } else {
        console.log("The person is male.");
}


// Exercise 2: Check if a number is between two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third numbers using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstValue: number = 4;
const secondValue: number = 2;
const thirdValue: number = 6;
if (firstValue > secondValue && firstValue < thirdValue) {
    console.log(`The number ${firstValue} is between ${secondValue} and ${thirdValue}`);
} else {
    console.log(`The number ${firstValue} is NOT between ${secondValue} and ${thirdValue}`);
}


// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const num1: number = 2;
const num2: number = 1;
const num3: number = 1;

if (num1 <= num2 && num1 <= num3) {
    if (num2 < num3) {
        console.log(`The numbers in ascending order are: ${num1}, ${num2}, ${num3}`);
    } else {
        console.log(`The numbers in ascending order are: ${num1}, ${num3}, ${num2}`);
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 < num3) {
        console.log(`The numbers in ascending order are: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`The numbers in ascending order are: ${num2}, ${num3}, ${num1}`);
    }
} else {
    //num3 is the smallest
    if (num1 <= num2) {
        console.log(`The numbers in ascending order are: ${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`The numbers in ascending order are: ${num3}, ${num2}, ${num1}`);
    }
}


// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const text : string = 'My test text';
if (text.length > 10) {
    console.log("The lenght of the entered text is greater that 10.");
} else {
    console.log("The lenght of the entered text is not greater that 10.");
}


// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const smallText: string = 'oob';
if (smallText.includes('B')) {
    console.log(`The string ${smallText} contains the letter 'B'`);
} else {
    console.log(`The string ${smallText} does NOT contain the letter 'B'`);
}


// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const age: number = 33;
const bestLap: number = 59.09;

if ( age >= 18 && age < 65 && bestLap < 60) {
    console.log(`Age ${age} and bestLap ${bestLap} is allowed to compete`);
} else {
    console.log(`Age ${age} and bestLap ${bestLap} is NOT allowed to compete`);
}
  


// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const stringArray: string[] = ['spring', 'SUMMER', 'auTuMn', 'WintEr'];
const toUpperCaseString = stringArray.map((word) => word.toUpperCase());
console.log(toUpperCaseString);


// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const wordsArray: string[] = ['beautiful', 'paradise', 'dry', 'cold', 'skinny'];
const longWordsArray: string[] = wordsArray.filter((word) => word.length > 5);
console.log(longWordsArray);


// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers: number[] = [65, 48, 1, 0, 59];
const max: number = numbers.reduce((max, num) => (num > max ? num : max));
console.log(max);


// Exercise 10: Calculate Total Price (map + reduce)
// Step 1: Declare a type Item with name, price, and quantity.
// Step 2: Create an array of items.
// Step 3: Use map() to calculate price × quantity for each item.
// Step 4: Use reduce() to sum all values.
// Step 5: Log the total.

type Item = {
    name : string;
    price: number; 
    quantity: number;
}

const itemsArr: Item[] = [
    {name: 'Apples', price: 3.5, quantity: 5 },
    {name: 'Pears', price: 4, quantity: 2 },
    {name: 'Grapes', price: 5, quantity: 1 },

]

const total = itemsArr
.map((item) => item.price * item.quantity)
.reduce((acc, item) => acc + item, 0);

console.log(total);


// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const duplicateValuesArr: number[] = [4, 6, 8, 5, 7, 3, 8, 6, 10];
const uniqueCallBack = function (uniqueValuesArr: number[], num: number) { 
 if (!uniqueValuesArr.includes(num)) {
    uniqueValuesArr.push(num)
 }
 return uniqueValuesArr;
}
const uniqueValues = duplicateValuesArr.reduce(uniqueCallBack, []);

console.log(uniqueValues);


// Exercise 12: Filter + Transform Users (filter + map – advanced)
// Step 1: Declare a type User with name and age.
// Step 2: Create an array of users.
// Step 3: Use filter() to keep only users over 18.
// Step 4: Use map() to extract their names.
// Step 5: Log the result.

type User = {
    name: string;

    age: number;
}

const users: User[] = [
    {name: 'Margi', age: 33}, 
    {name: 'Pesho', age: 16},
    {name: 'Angel', age: 46},
    {name: 'Klara', age: 17},
]

const adultUsers = users.filter (user => user.age >= 18).map(user => user.name);
console.log(adultUsers);


// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

const number13Arr = [10, 20, 10, 30, 40];
const uniqueNumbers = [...new Set(number13Arr)];
console.log(uniqueNumbers);


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

const arr1 = [1, 2, 3, 4];
const arr2  = [3, 4, 5];
const union = [...new Set([...arr1,...arr2])];
console.log(union);


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
// Step 1: Use the students array from Exercise 21.
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
