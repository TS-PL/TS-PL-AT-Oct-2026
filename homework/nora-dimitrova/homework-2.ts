// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-2.ts
// npx tsx homework/nora-dimitrova/homework-2.ts

// Homework 02

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

const firstNumber: number = 12;
const secondNumber: number = 10;
const thirdNumber: number = 15;

if (firstNumber > secondNumber || firstNumber > thirdNumber) {
    console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
    console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}


// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const a: number = 120;
const b: number = 100;
const c: number = 67;

if (a <= b && a <= c) {
    if (b <= c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if (b <= a && b <= c) {
    if (a <= c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else {
    if (a <= b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of the variable is greater than 10 using if/else statements.
// Step 3: Log the result.

const name: string = "Aleksandrina";
if (name.length > 10) {
    console.log("The name is greater than 10.");
} else {
    console.log("The name is not greater than 10.");
}

// Exercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3-character string to it.
// Step 2: Check if the string contains the letter 'B' using if/else statements.
// Step 3: Log the result like so:
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const dog: string = "Big"
if (dog.charAt(0) === ("B") || dog.charAt(1) === ("B") || dog.charAt(2) === ("B")) {
    console.log(`The string ${dog} contains the letter 'B'`);
} else {
    console.log(`The string ${dog} does NOT contains the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for the client's age (whole number) and best lap time (floating-point number).
// Step 2: Check if the client is older than or equal to 18 and younger than 65 (exclusive), and has a best lap time less than 60 seconds, using if-else statements.
// Step 3: Log the client's age, best lap time, and whether the client is allowed to compete or not.

const age: number = 27;
const lapTime: number = 95.5;

if (age >= 18 && age < 65 && lapTime < 60) {
    console.log(`Age: ${age}, Best Lap Time: ${lapTime}s. The client is ALLOWED to compete.`);
} else {
    console.log(`Age: ${age}, Best Lap Time: ${lapTime}s. The client is NOT ALLOWED to compete.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
// Step 1: Declare a variable and assign an array of strings to it.
// Step 2: Use the map() method to transform each string to uppercase.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

let words: string[] = ["dog", "cat", "fox"]
let newWords: string[] = words.map((word) => word.toUpperCase());
console.log(newWords);

// Exercise 8: Filter Long Words (filter)
// Step 1: Declare a variable and assign an array of words to it.
// Step 2: Use the filter() method to keep only words longer than 5 characters.
// Step 3: Store the result in a new variable.
// Step 4: Log the result.

const cars: string[] = ["Fiat", "Audy", "BMW", "Mercedes"]
const specialCars: string[] = cars.filter((car) => car.length > 5)
console.log(specialCars)

// Exercise 9: Find Maximum Number (reduce)
// Step 1: Declare a variable and assign an array of numbers to it.
// Step 2: Use the reduce() method to find the largest number.
// Step 3: Store the result in a variable.
// Step 4: Log the result.

const numbers: number[] = [1, 3, 5, 7, 9]
const maxNumber: number = numbers.reduce((maxNum, currentNum) => {
    return currentNum > maxNum ? currentNum : maxNum;
}, numbers[0]);
console.log(`The max number is: ${maxNumber}`);

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

const itemsArr: Item[] = [
    { name: "Book", price: 30, quantity: 2 },
    { name: "Pencil", price: 10, quantity: 1 },
    { name: "Coffee mug", price: 20, quantity: 3 },
];

const calculatePrice = itemsArr.map((itemArr) => itemArr.price * itemArr.quantity);
const allValues = calculatePrice.reduce((sum, current) => sum + current, 0);
console.log(allValues);


// Exercise 11: Get Unique Values (reduce)
// Step 1: Declare a variable and assign an array of numbers with duplicates.
// Step 2: Use the reduce() method to return only unique values.
// Step 3: Store the result in a new array.
// Step 4: Log the result.

const values: number[] = [20, 10, 20, 30, 50, 30, 40, 40];
// const uniqueValues = [...new Set(values)];
const uniqueValues = values.reduce((result: number[], current) => {
    if (!result.includes(current)) {
        result.push(current);
    }
    return result;
}, []);

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
};

const userArr: User[] = [
    { name: "Ana", age: 48 },
    { name: "Mimi", age: 23 },
    { name: "Kati", age: 12 },
];

const userFilter = userArr.filter(user => user.age > 18);
console.log(userFilter);
const names = userArr.map((name) => name.name);
console.log(names);


// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].

const arr: number[] = [10, 20, 10, 30, 40];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// Exercise 14: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].

const firstArr: number[] = [1, 2, 3, 4];
const secondArr: number[] = [3, 4, 5];
const onlyInFirstArr: number[] = firstArr.filter((number) => !secondArr.includes(number));
const onlyInSecondArr: number[] = secondArr.filter((number) => !firstArr.includes(number));
const difference: number[] = [...onlyInFirstArr, ...onlyInSecondArr];
console.log(difference);

// Exercise 15: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].

const fArr: number[] = [1, 2, 3, 4];
const sArr: number[] = [3, 4, 5];
const combineArr: number[] = [...fArr, ...sArr];
const union = [...new Set(combineArr)];
console.log(union);

// Exercise 16: Count occurrences of each element
// Step 1: Create an array with the values ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].
// Step 2: Count how many times each fruit appears.
// Step 3: Store the result in an object called counts with type Record<string, number>.
// Step 4: Log the result, which should be { apple: 3, banana: 2, orange: 1 }.

const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts: Record<string, number> = {};
for (const fruit of fruits) {
    counts[fruit] = (counts[fruit] || 0) + 1;
}
console.log();
