// Run the file with the command:
// npx ts-node typescript/primitive-types/number.ts

// ==========================================
// 1. NUMBER (NUMERIC DATA TYPE)
// ==========================================

// number is a primitive data type in TypeScript.
// It is used to store numbers.
//
// It can hold:
// - Positive numbers (for example 34)
// - Negative numbers (for example -102733)
// - Decimal numbers (for example 24.13)

// ==========================================
// 2. POSITIVE NUMBERS
// ==========================================

// We create a variable of type number.
// const means we cannot assign it
// a new value after it is created.
// : number specifies that the variable holds a number.

const positiveNumber: number = 34;

// We print the value to the console.
// Result: 34
console.log(positiveNumber);

// ==========================================
// 3. NEGATIVE NUMBERS
// ==========================================

// Negative numbers have a minus sign (-).
// The number type supports negative values too.

const negativeNumber: number = -102733;

// Result: -102733
console.log(negativeNumber);

// ==========================================
// 4. DECIMAL NUMBERS
// ==========================================

// number also supports numbers with a decimal part.
// In TypeScript we use a dot (.), not a comma.
//
// For example:
// 24.13 - correct
// 24,13 - not a decimal number literal

const numberWithDecimal: number = 24.13;

// Result: 24.13
console.log(numberWithDecimal);

// ==========================================
// 5. MATH OPERATIONS
// ==========================================

// We create two variables of type number.
//
// We use let instead of const, because later
// we will change their values with ++ and --.

let firstNumber: number = 5;
let secondNumber: number = 10;

// + (ADDITION)
// Adds the values of the two variables.
// 10 + 5 = 15
const add: number = secondNumber + firstNumber;

// - (SUBTRACTION)
// Subtracts the right number from the left one.
// Here: secondNumber - firstNumber
// 10 - 5 = 5
const subtract: number = secondNumber - firstNumber;

// * (MULTIPLICATION)
// Multiplies the two numbers.
// 10 * 5 = 50
const multiply: number = secondNumber * firstNumber;

// / (DIVISION)
// Divides the left number by the right one.
// Here: secondNumber / firstNumber
// 10 / 5 = 2
const divide: number = secondNumber / firstNumber;

// ** (EXPONENTIATION)
// Raises a number to a power.
//
// 10 ** 5 means:
// 10 * 10 * 10 * 10 * 10 = 100000

const exponent: number = secondNumber ** firstNumber;

// ==========================================
// 6. INCREMENT AND DECREMENT (++ / --)
// ==========================================

// ++ (INCREMENT)
// Increases the value of the variable by 1.
//
// firstNumber is initially 5.
//
// With firstNumber++ the old value (5)
// is returned first, and then it increases to 6.
//
// So:
// increment = 5
// firstNumber = 6

const increment: number = firstNumber++;

// -- (DECREMENT)
// Decreases the value of the variable by 1.
//
// secondNumber is initially 10.
//
// With secondNumber-- the old value (10)
// is returned first, and then it decreases to 9.
//
// So:
// decrement = 10
// secondNumber = 9

const decrement: number = secondNumber--;

// ==========================================
// 7. REMAINDER OF DIVISION (%)
// ==========================================

// % (REMAINDER)
// Returns the remainder of dividing two numbers.
//
// IMPORTANT:
// firstNumber is now 6 (after ++).
// secondNumber is now 9 (after --).
//
// 9 / 6 = 1 with a remainder of 3.
//
// Therefore:
// 9 % 6 = 3

const remainder: number = secondNumber % firstNumber;

// ==========================================
// 8. PRINTING THE RESULTS
// ==========================================

// We use console.log() to show
// the results of the math operations.
//
// Backticks (` `) let us
// use ${} to insert
// the value of a variable into text.
//
// This is called a Template Literal.

console.log(`add: ${add}`); // 15
console.log(`subtract: ${subtract}`); // 5
console.log(`multiply: ${multiply}`); // 50
console.log(`divide: ${divide}`); // 2
console.log(`exponent: ${exponent}`); // 100000

// Here we print the OLD values
// returned by the ++ and -- operators.
console.log(`increment: ${increment}`); // 5
console.log(`decrement: ${decrement}`); // 10

// The remainder of 9 % 6 is 3.
console.log(`remainder: ${remainder}`); // 3

// If we print the variables themselves,
// we will see their NEW values.
console.log(firstNumber); // 6
console.log(secondNumber); // 9

// ==========================================
// 9. MAXIMUM AND MINIMUM SAFE INTEGER
// ==========================================

// TypeScript uses the number type,
// which is based on JavaScript's Number.
//
// It has limits when representing
// very large integers.
//
// Number.MAX_SAFE_INTEGER is the largest
// positive integer that can be
// safely represented with the number type.
//
// Value: 9007199254740991

const maxSafeNumber = Number.MAX_SAFE_INTEGER;

// Number.MIN_SAFE_INTEGER is the smallest
// negative safe integer.
//
// Value: -9007199254740991

const minSafeNumber = Number.MIN_SAFE_INTEGER;

// We print the values to the console.
console.log(`maxSafeNumber: ${maxSafeNumber}`);
console.log(`minSafeNumber: ${minSafeNumber}`);
