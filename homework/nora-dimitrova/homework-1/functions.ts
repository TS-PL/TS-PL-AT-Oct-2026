// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-1/functions.ts
// npx tsx homework/nora-dimitrova/homework-1/functions.ts

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
function printId(id: string | number): void {
    // Step 3: Вътре във функцията логваме стойността на id
    console.log(id);
}
// Step 4: Call printId once with a number and once with a string.
printId(79);
printId("ABCD");


// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
const qaName: string = "Nora";
const featuresCount: number = 5;
const hoursPerFeature: number = 2;
// Step 2: Calculate the total time required to test all features.
const totalHours: number = featuresCount * hoursPerFeature;
// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."
console.log(`QA engineer ${qaName} will need ${totalHours} hours to test ${featuresCount} features.`);


// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = {
    id: number | string;
    name: string;
};
// Step 4: Create one user object with a numeric id.
const user1: User = {
    id: 100,
    name: "Anna"
};
// Step 5: Create another user object with a string id.
const user2: User = {
    id: "USR-200",
    name: "Greta"
};
// Step 6: Log both user objects.
console.log(user1);
console.log(user2);
