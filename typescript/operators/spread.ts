// Run the file with the command:
// npx ts-node typescript/operators/spread.ts
// npx tsx typescript/operators/spread.ts

// Starting array
const arr1: number[] = [1, 2, 3];

// Using the spread operator (...) to copy elements from arr1
// and append new values (4 and 5)
const newArr: number[] = [...arr1, 4, 5];

console.log(newArr);
// Output: [1, 2, 3, 4, 5]

// Two separate objects
const a = { x: 1 };
const b = { y: 2 };

// Merging objects using spread operator
// Properties from both objects are combined into a new object
// If keys overlap, later ones overwrite earlier ones
const merge = { ...a, ...b };

console.log(merge);
// Output: { x: 1, y: 2 }

// Function expecting exactly 3 number arguments
function sum(a: number, b: number, c: number) {
  return a + b + c;
}

// 'as const' makes the array:
// - readonly (cannot be changed)
// - treated as a tuple [1, 2, 3] instead of number[]
const nums = [1, 2, 3] as const;

// typeof nums at runtime is still "object"
// (because arrays are objects in JavaScript)
console.log(typeof nums);
// Output: "object"

// Using spread operator to pass array elements as arguments
// Equivalent to: sum(1, 2, 3)
// This works because nums is a tuple of exactly 3 values
console.log(sum(...nums));
// Output: 6

// Combining arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

// ...first  -> unpacks 1, 2, 3
// ...second -> unpacks 4, 5, 6
// [ ]       -> collects all the elements into a new array
const combinedFirstSecond = [...first, ...second];

console.log('combinedFirstSecond', combinedFirstSecond);
// Output: combinedFirstSecond [ 1, 2, 3, 4, 5, 6 ]

// Important:
// The original arrays first and second are NOT changed.

// Copying an array
const original = [10, 20, 30];

// We create a NEW array with the same elements.
const copy = [...original];

console.log('copy', copy);
// Output: copy [ 10, 20, 30 ]

// Important:
// copy and original are two different arrays.
// If we change copy (for example, copy.push(40)),
// original stays [10, 20, 30].
// Note: spread makes a SHALLOW copy - nested objects or arrays
// inside are still shared between copy and original.

// Compare with: const copy = original;
// This does NOT create a copy. Both variables
// point to the same array in memory.

// Copying and updating an object
const originalUser = {
  name: 'Ivan',
  age: 25,
};

// ...originalUser -> copies all properties (name and age)
// age: 30         -> overwrites the copied age value
const updatedUser = {
  ...originalUser,
  age: 30,
};

console.log('updatedUser', updatedUser);
// Output: updatedUser { name: 'Ivan', age: 30 }

// originalUser is NOT changed:
// { name: 'Ivan', age: 25 }
