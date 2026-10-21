// Run the file with the command:
// npx ts-node typescript/primitive-types/boolean.ts
// npx tsx typescript/primitive-types/boolean.ts

// ==========================================
// 1. BOOLEAN (BOOLEAN DATA TYPE)
// ==========================================

// boolean is a primitive data type in TypeScript.
// It can hold only two values:
// true  - true (correct)
// false - false (incorrect)

// We create a variable of type boolean.
// true means the person is old enough.
const isOldEnough: boolean = true;

// false means the person doesn't have a driver's license.
const hasLicense: boolean = false;

// ==========================================
// 2. CONDITIONAL CHECKS (if / else)
// ==========================================

// if checks whether a given condition is true.
// If the condition is true, it runs the code in if.
// If the condition is false, it runs the code in else.

// We check whether the person is old enough.
if (isOldEnough) {
  // This code runs because isOldEnough is true.
  console.log('You can drink alcohol');
} else {
  // This code runs only if isOldEnough is false.
  console.log("You can't drink alcohol");
}

// Result: You can drink alcohol

// We check whether the person has a driver's license.
if (hasLicense) {
  // Runs if hasLicense is true.
  console.log('You can drive a car');
} else {
  // Runs if hasLicense is false.
  // In our case, hasLicense is false.
  console.log("You can't drive a car");
}

// Result: You can't drive a car

// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================

// We create two variables of type number.
const firstNumber: number = 5;
const secondNumber: number = 10;

// Comparison operators compare two values.
// The result of the comparison is true or false.

// > means "greater than".
// We check whether 5 is greater than 10.
// 5 > 10 -> false
const isGreater: boolean = firstNumber > secondNumber;

// < means "less than".
// We check whether 5 is less than 10.
// 5 < 10 -> true
const isLower: boolean = firstNumber < secondNumber;

// === means "strictly equal".
// It checks whether both the values and the types are the same.
// 5 === 10 -> false
const isEqual: boolean = firstNumber === secondNumber;

// !== means "strictly not equal".
// It checks whether the values or the types are different.
// 5 !== 10 -> true
const isNotEqual: boolean = firstNumber !== secondNumber;

// >= means "greater than or equal to".
// 5 >= 10 -> false
const isGreaterOrEqual: boolean = firstNumber >= secondNumber;

// <= means "less than or equal to".
// 5 <= 10 -> true
const isLowerOrEqual: boolean = firstNumber <= secondNumber;

// We print the results to the console.
console.log('isGreater: ', isGreater); // false
console.log('isLower: ', isLower); // true
console.log('isEqual: ', isEqual); // false
console.log('isNotEqual: ', isNotEqual); // true
console.log('isGreaterOrEqual: ', isGreaterOrEqual); // false
console.log('isLowerOrEqual: ', isLowerOrEqual); // true

// ==========================================
// 4. LOGICAL OPERATORS (AND / OR)
// ==========================================

// Logical operators let us
// combine two or more conditions.

// && means AND.
// It returns true only if BOTH conditions are true.

// First condition: 5 === 5 -> true
// Second condition: 10 === 10 -> true
// true && true -> true

const areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;

// || means OR.
// It returns true if AT LEAST ONE condition is true.
// It returns false if both conditions are false.

// First condition: 6 === 5 -> false
// Second condition: 11 === 10 -> false
// false || false -> false

const isAnyNumberEqualTo: boolean = 6 === firstNumber || 11 === secondNumber;

// We print the results.
console.log('areNumbersEqualTo: ', areNumbersEqualTo); // true
console.log('isAnyNumberEqualTo: ', isAnyNumberEqualTo); // false

// ==========================================
// 5. LOGICAL OPERATOR NOT (!)
// ==========================================

// ! means NOT.
// It is used to flip a boolean value.
//
// !true  -> false
// !false -> true

// First we compare:
// firstNumber === secondNumber
// 5 === 10 -> false

// Then ! flips the result:
// !false -> true

// The parentheses () determine which condition
// is evaluated first.

const areNotEqual: boolean = !(firstNumber === secondNumber);

// We print the result.
console.log('areNotEqual: ', areNotEqual); // true
