// Run the file with the command:
// npx ts-node typescript/collections/set.ts
// npx tsx typescript/collections/set.ts

// Original array with duplicate values ('5' appears twice)
const arr = ['1', '2', '3', '4', '5', '5'];

// Using Set to remove duplicates
// A Set automatically keeps only unique values
// Spread operator (...) converts the Set back into an array
const unique = [...new Set(arr)];

console.log(unique);
// Output: ['1', '2', '3', '4', '5']

// Function to check if an array contains duplicates
function hasDuplicates(numbers: number[]): boolean {
  // new Set(numbers).size -> number of unique elements
  // numbers.length -> total number of elements
  // If they differ, duplicates exist
  return new Set(numbers).size !== numbers.length;
}

console.log('hasDuplicates:', hasDuplicates([1, 2, 3, 4, 5]));
// Output: hasDuplicates: false

// Function to create a union of two arrays
// Union = all unique elements from both arrays
function union(a: number[], b: number[]): number[] {
  // [...a, ...b] merges both arrays
  // new Set(...) removes duplicates
  // [...] converts the Set back to an array
  return [...new Set([...a, ...b])];
}

console.log(union([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
