// Homework 01

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
// Step 2: Add the two bigint values together.
// Step 3: Log the result.

const firstNumber: bigint = 10n;
const secondNumber: bigint = 9n;

const bigintSum: bigint = firstNumber + secondNumber;

console.log(bigintSum);


// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the product (start with 1).
// Step 3: Use a loop to multiply all the numbers in the array.
// Step 4: Log the final product.

const numbers: number[] = [10, 20, 30, 40];

const sum: number = numbers.reduce(
    (accumulator, number) => accumulator * number,
    1
);

console.log(sum);


// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.

type Student = {
    name: string;
    grade: number;
};

const students: Student[] = [
    { 
        name: "Alice", 
        grade: 90 
    },
    { 
        name: "Bob", 
        grade: 85 
    }
];

students.map((student) => {
    console.log(student.name);
});


// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
// Step 4: Call printId once with a number and once with a string.

function printId(id: string | number): void {
    console.log(id);
}

printId(1);
printId("2");


// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
// Step 2: Calculate the total time required to test all features.
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."

let name: string = "Ivan";
let numberOfFeatures: number = 3;

let totalTime: number = numberOfFeatures * 2;

console.log(`QA engineer ${name} will need ${totalTime} hours to test ${numberOfFeatures} features.`);


// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
// Step 6: Log both user objects.

type User = {
    id: number | string;
    name: string;
};

const userIvan: User = {
    id: 1,
    name: "Ivan"
};

const userMaria: User = {
    id: "2",
    name: "Maria"
};

console.log("Ivan: ", userIvan);
console.log("Maria: ", userMaria);



// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
// Step 2: Log the original values.
// Step 3: Swap their values.
// Step 4: Log the final values.

// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
// Step 3: Log the result.

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
// Step 3: Log the result.

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
// Step 2: Create another variable called quantity and assign it the value 3.
// Step 3: Calculate the total cost by multiplying price by quantity.
// Step 4: Log the total cost.

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.

// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in.".

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
// Step 2: Create a boolean variable called isAdult and set it to false.
// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
// Step 4: Log the value of canEnter.

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
// Step 3: Log the result.

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
// Step 3: Log the result.
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."
