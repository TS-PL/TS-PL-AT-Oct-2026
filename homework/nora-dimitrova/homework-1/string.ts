// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-1/string.ts
// npx tsx homework/nora-dimitrova/homework-1/string.ts

// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
const name: string = "Nora";
// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
let isEmpty: boolean;
if (name === "") {
    isEmpty = true;
} else {
    isEmpty = false;
}
// Step 3: Log the result.
console.log(`The name is empty string: ${isEmpty}`)


// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
const word: string = "assigment";
// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
let isFirstLetterA: boolean = word.charAt(0) === "A";
// Step 3: Log the result.
console.log(isFirstLetterA)
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.


// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
const message: string = "TypeScript is fun";
// Step 2: Log the length of the string.
console.log(message.length);
// Step 3: Log the string in uppercase.
console.log(message.toUpperCase());
// Step 4: Log the string in lowercase.
console.log(message.toLowerCase());
// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
const favoriteLanguage: string = "Java";
// Step 6: Use a template literal to log the following sentence:
console.log(`"My favorite programming language is ${favoriteLanguage}."`);
// "My favorite programming language is ___."
