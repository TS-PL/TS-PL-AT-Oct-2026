// Run the file with the command:
// npx ts-node typescript/special-types/any.ts
// npx tsx typescript/special-types/any.ts

// ==========================================
// 1. ANY (SPECIAL DATA TYPE)
// ==========================================

// any is a special type in TypeScript.
//
// It allows a single variable
// to hold values of different types.
//
// For example:
// - string  (text)
// - number  (number)
// - boolean (true or false)
// - array   (array)
// - object  (object)
//
// When we use any, TypeScript
// skips the usual type checks
// for that value.
//
// This means we can assign
// different data types to one variable
// without TypeScript showing an error.
//
// IMPORTANT:
// any does not guarantee that the code will work
// correctly at runtime.
//
// That is why it is recommended to avoid any
// when we know what data type we are using.

// ==========================================
// 2. EXAMPLE WITHOUT ANY (BOOLEAN)
// ==========================================

// We create a variable of type boolean.
//
// boolean can only contain:
// true  - truth
// false - falsehood
//
// TypeScript checks whether we assign
// values of the correct type.

let booleanVariable: boolean = true;

// WRONG EXAMPLE:
//
// We try to assign text (string)
// to a variable of type boolean.
//
// This is not allowed, because the variable
// expects the value true or false.
//
// TypeScript will show an error:
// Type 'string' is not assignable to type 'boolean'.

// booleanVariable = "string";

// WRONG EXAMPLE:
//
// Math.round() is a method that rounds
// a number to the nearest integer.
//
// For example:
// Math.round(4.7) -> 5
// Math.round(4.2) -> 4
//
// The method expects an argument of type number.
//
// But booleanVariable is of type boolean.
//
// That is why TypeScript will show an error:
// Argument of type 'boolean' is not
// assignable to parameter of type 'number'.

// Math.round(booleanVariable);

// typeof checks the actual type
// of a value at runtime.
//
// Here the value is true.
//
// Result: boolean

console.log(typeof booleanVariable); // boolean

// ==========================================
// 3. EXAMPLE WITH ANY (WITHOUT THE USUAL CHECK)
// ==========================================

// We create a variable of type any.
//
// Unlike boolean, any allows us
// to assign values of different types.
//
// TypeScript will not show an error
// just because we change the type of the value.

let anyVariable: any = true;

// Initially the value is true.
//
// typeof checks the real type of the value.
//
// IMPORTANT:
// any is a TypeScript type, but typeof
// returns the type of the current JavaScript value.
//
// Result: boolean

console.log(typeof anyVariable); // boolean

// ==========================================
// 4. ASSIGNING A STRING
// ==========================================

// We change the value from boolean to string.
//
// With a variable of type boolean, this
// would cause an error.
//
// But with any, it is allowed.

anyVariable = 'string';

// Result: string
console.log(typeof anyVariable); // string

// ==========================================
// 5. ASSIGNING A NUMBER
// ==========================================

// We change the value from string to number.
//
// TypeScript allows this,
// because the variable is of type any.

anyVariable = 10;

// Result: number
console.log(typeof anyVariable); // number

// ==========================================
// 6. ASSIGNING AN ARRAY
// ==========================================

// An array is a data structure
// that stores multiple values.
//
// For example:
// [10, 20, 30]
//
// Here we assign an array to anyVariable.
//
// This is allowed, because the type is any.

anyVariable = [10, 20, 30];

// IMPORTANT:
// typeof returns "object" for arrays,
// not "array".
//
// This is a quirk of JavaScript.

console.log(typeof anyVariable); // object

// ==========================================
// 7. USING Math.round() WITH ANY
// ==========================================

// Math.round() rounds a number.
//
// It normally expects an argument of type number.
//
// But when we pass a variable of type any,
// TypeScript does not check whether it
// actually contains a number.
//
// That is why the following code will not give
// a TypeScript error for an incompatible type.

Math.round(anyVariable);

// IMPORTANT:
// At this moment anyVariable contains an array:
// [10, 20, 30]
//
// JavaScript will try to convert
// the array to a number.
//
// This array cannot be converted
// to a valid number.
//
// That is why Math.round() returns NaN.
//
// NaN means "Not a Number".
//
// This shows why any can be dangerous:
// TypeScript does not detect the problem in advance,
// but the result may be unexpected.

console.log(Math.round(anyVariable)); // NaN

// ==========================================
// 8. CHECKING THE LAST TYPE
// ==========================================

// The last assigned value is an array.
//
// typeof returns "object" for arrays.

console.log(typeof anyVariable); // object

// ==========================================
// 9. WHY SHOULD WE AVOID ANY?
// ==========================================

// Using any reduces TypeScript's ability
// to detect errors in the code.
//
// For example:
// If we know a value is a number,
// it is better to use number.
//
// If we know it is text, we use string.
//
// If it is true or false, we use boolean.
//
// This way TypeScript can protect us
// from many errors before the code even runs.

const userAge: number = 25;
const userName: string = 'Maria';
const isStudent: boolean = true;
