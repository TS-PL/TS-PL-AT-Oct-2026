// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-1/array.ts
// npx tsx homework/nora-dimitrova/homework-1/array.ts 

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
const numbers = [10, 20, 30, 40];
// Step 2: Create a variable to store the product (start with 1).
let product: number = 1;
// Step 3: Use a loop to multiply all the numbers in the array.
//first option:
for (const num of numbers) {
    product *= num;
}
// Step 4: Log the final product.
console.log(product);

//second option:
const num = [10, 20, 30, 40];
let product1: number = 1;
for (let i = 0; i < num.length; i++) {
    product1 = product1 * num[i];
}
console.log(product1);


// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
let students: { name: string; grade: number }[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 }
];
// Step 4: Use a loop to iterate through the array.
// Step 5: Log each student's name.
for (const student of students) {
    console.log(student.name);
}
