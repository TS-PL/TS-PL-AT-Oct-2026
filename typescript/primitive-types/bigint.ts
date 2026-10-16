// Run the file with the command:
// npx ts-node typescript/primitive-types/bigint.ts

// bigint is a primitive data type in TypeScript.
// It is used for working with very large integers
// that can exceed the limits of the number type.

// To create a bigint, we add the letter "n"
// at the end of the integer.

// Example 1: Positive bigint number

// We can also create a bigint with BigInt().
// The function converts the given value to a bigint.
// let positiveBigint: bigint = BigInt("3000000000000000000");

// Here we create a positive bigint number.
// "const" means we cannot assign a new
// value to the variable after it is created.
// ": bigint" specifies the variable's type.
// "n" at the end shows that the number is of type bigint.
const positiveBigint: bigint = 3000000000000000000n;

// typeof checks the type of a given value.
// Result in the console: "bigint"
console.log(typeof positiveBigint);

// We print the value of the positive number.
// Result: 3000000000000000000n
console.log(positiveBigint);

// Example 2: Negative bigint number

// bigint can also store negative integers.
// We use the minus sign (-) in front of the number.
// The letter "n" is required again
// when we write a bigint as a number literal.
const negativeBigint: bigint = -7000000000000000000n;

// We print the negative bigint number.
// Result: -7000000000000000000n
console.log(negativeBigint);

// Example 3: bigint does NOT support decimal numbers

// bigint can hold only integers.
// We cannot use a decimal point
// and a fractional part, for example .24.

// The following code is invalid and will cause an error,
// so it is left as a comment.

// const bigintDecimal: bigint = 5000000000000000000.24n;
// console.log(bigintDecimal);

// Correct version without a decimal part:
const validBigint: bigint = 5000000000000000000n;

console.log(validBigint);
