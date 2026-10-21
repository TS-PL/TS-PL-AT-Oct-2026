// Run the file using the command:
// npx ts-node typescript/functions/functions.ts
// npx tsx typescript/functions/functions.ts

// ==========================================
// 1. What is a Function?
// ==========================================

// A function is a block of code that performs a task.

// A function does NOT execute automatically.
// We need to call it by its name.

// General syntax:

// function name(parameter1, parameter2) {
//   // Code that will be executed
// }

// ==========================================
// 2. The simplest function - void
// ==========================================

// We create a function named printHello.

function printHello(): void {
  console.log('Hello!');
}

// Explanation:
// function -> declares a function
// printHello -> the name of the function
// () -> no parameters
// : void -> the function does not return a value
// {} -> the body of the function

// Call the function:
printHello();

// Output:
// Hello!

// Important:
// void means that the function does not return a value.
// It can perform actions such as console.log().

// ==========================================
// 3. Function with parameters and return
// ==========================================

// We create a function that multiplies two numbers.

function multiply(a: number, b: number): number {
  return a * b;
}

// Explanation:
// a: number -> the first parameter is a number
// b: number -> the second parameter is a number
// : number -> the function returns a number
// return -> returns the result of the multiplication

console.log(multiply(5, 10)); // 50

// How does it work?
// a = 5
// b = 10
// 5 * 10 = 50
// return 50

// Important:
// return returns a value from the function.
// Once return is executed, the function ends.

// ==========================================
// 4. Optional Parameters
// ==========================================

// The ? symbol means that the parameter
// is optional (not required).

function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// a and b are required parameters.
// c is an optional parameter.

// If we do not provide c, its value
// will be undefined.

// (c || 0) means:
// If c is undefined or another falsy value,
// use 0 instead.

console.log(add(5, 10)); // 15

// a = 5
// b = 10
// c = undefined -> we use 0
// 5 + 10 + 0 = 15

console.log(add(5, 10, 20)); // 35

// a = 5
// b = 10
// c = 20
// 5 + 10 + 20 = 35

// A more precise approach is to use ??:
// return a + b + (c ?? 0);

// ?? uses 0 only when c is
// null or undefined.

// ==========================================
// 5. Default Parameters
// ==========================================

// We can assign a default value
// to a parameter.

function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}

// Explanation:
// value -> the number we raise to a power
// exponent -> the power (exponent)
// = 10 -> the default value
// ** -> the exponentiation operator

console.log(pow(5)); // 9765625

// Since we do not provide an exponent,
// TypeScript uses 10.

// 5 ** 10 = 9765625

console.log(pow(2, 3)); // 8

// Here we provide exponent = 3.
// 2 ** 3 = 2 * 2 * 2 = 8

// Important:
// A default parameter has a predefined value.
// If we do not provide an argument,
// that default value is used.
