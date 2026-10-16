// ==========================================
// INTRODUCTION TO TYPESCRIPT
// ==========================================

// Run the file with the command:
// npx ts-node typescript/introduction.ts

// ==========================================
// 1. DOCUMENTATION AND USEFUL RESOURCES
// ==========================================

// Official TypeScript documentation:
// https://www.typescriptlang.org/docs/handbook/intro.html

// JavaScript tutorials and examples:
// https://www.w3schools.com/js/default.asp

// Additional JavaScript materials:
// https://www.geeksforgeeks.org/javascript/?ref=shm

// ==========================================
// 2. FIRST PROGRAM - HELLO WORLD
// ==========================================

// console.log() is a function that prints
// information to the console (terminal).
//
// The text must be placed in quotes.
//
// Result: Hello World!

console.log('Hello World!');

// ==========================================
// 3. SEMICOLON (;)
// ==========================================

// The semicolon (;) marks
// the end of a statement.

console.log('Hello');
console.log('TypeScript');

// ==========================================
// 4. WHITE SPACES
// ==========================================

// Spaces and blank lines are used
// for better readability and code layout.
//
// For example, both forms work the same:

const firstValue = 5;
const secondValue = 10;

// It is recommended to leave spaces
// around operators to make code easier to read.
//
// IMPORTANT: Spaces are sometimes required
// to separate keywords and names.

// ==========================================
// 5. VARIABLES - var, let and const
// ==========================================

// A variable is a name we use to store
// and work with a value in the program.
//
// In JavaScript and TypeScript there are:
// var   - the old way to create variables
// let   - a variable whose value can change
// const - a variable that we cannot
//         assign a new value to

// var is the old way to declare variables.
// It has function scope, not block scope,
// which can lead to unexpected behavior.
//
// That's why in modern TypeScript we usually
// prefer let or const.

// var age: number = 5;

// ==========================================
// 6. VARIABLE NAMING RULES
// ==========================================

// Variable names should clearly
// describe the information they hold.
//
// Bad example:
// The name "a" doesn't tell us what it represents.
//
// TypeScript automatically determines the type number.

const a = 5;

// Result: 5
console.log(a);

// Better example:
// We use a descriptive variable name.

const userAge: number = 5;

console.log(userAge);

// In TypeScript we usually use camelCase.
//
// In camelCase:
// - The first word starts with a lowercase letter.
// - Each following word starts with an uppercase letter.
//
// Examples:
// firstName
// lastName
// userAge
// welcomeMessage

// ==========================================
// 7. EXPLICIT TYPE
// ==========================================

// TypeScript lets us set the type
// of a variable manually.
//
// This is called an explicit type annotation.
//
// : string means the variable
// must hold a text value.
//
// = assigns a value to the variable.

const welcomeMessage: string = 'Hello, Maria!';

// console.log() can take several arguments.
//
// The first argument is a text label.
// The second argument is the variable's value.

console.log('welcomeMessage', welcomeMessage);
console.log('welcomeMessage', welcomeMessage);
console.log('welcomeMessage', welcomeMessage);

// Result:
// welcomeMessage Hello, Maria!
// welcomeMessage Hello, Maria!
// welcomeMessage Hello, Maria!

// ==========================================
// 8. AUTOMATIC TYPE DETECTION
//    (TYPE INFERENCE)
// ==========================================

// TypeScript can automatically determine
// a variable's type from its value.
//
// This is called Type Inference.
//
// We don't always have to write : string,
// : number or : boolean.
//
// Since the value is text,
// TypeScript recognizes the type string.

const names = 'Dylan Burnt';

// typeof is an operator that checks
// the type of a value at runtime.
//
// Result: string

console.log(typeof names);

// ==========================================
// 9. VARIABLES WITH let (BLOCK SCOPE)
// ==========================================

// let creates a variable that we can
// assign new values to.
//
// Variables declared with let have block scope.
// This means they are available only
// inside the block {} where they are declared,
// and in its nested blocks.

// We declare a variable of type number.
// We don't assign it a value yet.

let myNumber: number;

// We assign the value 5.
myNumber = 5;

// We can declare a variable
// and assign it a value on one line.
//
// For example:
// let anotherNumber: number = 10;

// We change the value from 5 to 10.
// This is called reassignment.
//
// We don't use let again, because
// the variable is already declared.

myNumber = 10;

// Result: 10
console.log(myNumber);

// We cannot declare a variable again
// with the same name in the same block.
//
// For example, the following code will cause an error:
//
// let myNumber: number = 20;

// ==========================================
// 10. CONSTANTS WITH const
// ==========================================

// const is used when we don't want
// to assign a new value to the variable.
//
// When declaring with const, we must immediately
// give it an initial value.

const message: string = 'Welcome';

// Result: Welcome
console.log(message);

// The following code will cause an error,
// because we cannot assign a new value
// to a variable declared with const.
//
// message = 'Hello';

// IMPORTANT:
// const doesn't mean all data is immutable.
// For example, the contents of an object can change.
// const only prevents reassigning the variable itself.

// ==========================================
// 11. COMMENTS IN TYPESCRIPT
// ==========================================

// Comments are used for explanations in the code.
//
// They are not executed by the program.
// They help programmers understand
// what a piece of code does.

// SINGLE-LINE COMMENT
//
// Starts with two slashes: //
//
// Everything after // until the end of the line is a comment.
//
// In VS Code we can use:
// Ctrl + / (Windows/Linux)
// Cmd + / (macOS)

// MULTI-LINE COMMENT
//
// Starts with /* and ends with */
//
// Used for longer explanations.

/*
 * This is a multi-line comment.
 * We can write on several lines.
 * TypeScript will not execute this text.
 */

// ==========================================
// 12. DOCUMENTATION COMMENTS (JSDoc)
// ==========================================

// JSDoc is a special kind of comment.
//
// It starts with /** and ends with */
//
// It is used to document:
// - Functions
// - Classes
// - Parameters
// - Return values
//
// Editors like VS Code can
// show these descriptions as hints.

/**
 * An example function that demonstrates
 * how to create a function in TypeScript.
 *
 * The function takes no parameters
 * and returns no value.
 */
function myFunction() {
  // This is the body of the function.
  // Here we put the code that should
  // run when the function is called.
}

// ==========================================
// 13. FUNCTIONS
// ==========================================

// function is the keyword for creating
// a function.
//
// A function is a block of code
// that we can run many times.
//
// To call a function, we use
// its name followed by parentheses ().
//
// In this example the function prints nothing,
// because its body contains only comments.

myFunction();

// ==========================================
// 14. RESERVED KEYWORDS
// ==========================================

// TypeScript and JavaScript have special
// keywords that have a specific meaning.
//
// We cannot use them as ordinary
// variable names when they are reserved
// in that context.

// if
// Checks whether a given condition is true.

// else
// Runs another block of code
// if the condition in if is not met.

// switch
// Lets us choose between different cases.

// case
// Describes a specific case in a switch.

// break
// Stops a loop
// or exits a switch.

// for
// Creates a loop that can run
// a piece of code many times.

// function
// Used to declare a function.

// return
// Stops the function
// and can return a result.

// try
// Used for handling errors.
// It usually works together with catch or finally.
