// Homework 01 - Ana Proycheva
// npx tsx homework/ani-proycheva/homework-01-ap.ts

// Part 1 — Numbers (number)

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
let numX: number = 3;
let numY: number = 9;

// Step 2: Log the original values.
console.log("numX before swap:", numX);
console.log("numY before swap:", numY);

// Step 3: Swap their values.
let temp: number = numX;
numX = numY;
numY = temp;

// Step 4: Log the final values.
console.log("numX after swap:", numX);
console.log("numY after swap:", numY);


// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
let number: number = 4;

// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
let isEven: boolean = number % 2 === 0;

// Step 3: Log the result.
console.log("Is the number even?", isEven);

// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
let number2: number = 0;

// Step 2: Declare a boolean variable and check whether the number is greater than 0.
let isPositive: boolean = number2 > 0;

// Step 3: Log the result.
console.log("Is the number positive?", isPositive);

// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
let price: number = 19.99;

// Step 2: Create another variable called quantity and assign it the value 3.
let quantity: number = 3;

// Step 3: Calculate the total cost by multiplying price by quantity.
let totalCost: number = price * quantity;

// Step 4: Log the total cost.
console.log("Total cost:", totalCost);

// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
let celsius: number = 10;

// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
// Step 3: Store the result in a variable.
let fahrenheit: number = celsius * 9 / 5 + 32;

// Step 4: Log the temperature in Fahrenheit.
console.log("Temperature in Fahrenheit:", fahrenheit);


// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean = false;

// Step 2: If isLoggedIn is true, log "Welcome!".
if (isLoggedIn) {
    console.log("Welcome!");
}

// Step 3: If isLoggedIn is false, log "Please log in.".else {
   else { 
    console.log("Please log in.");
  }

// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
let hasTicket: boolean = true;

// Step 2: Create a boolean variable called isAdult and set it to false.
let isAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
let canEnter: boolean = hasTicket && isAdult;

// Step 4: Log the value of canEnter.
console.log(canEnter);


// Part 3 — Strings (string)

// Exercise 8: Check whether a string is empty
// Step 1: Declare a variable and assign any string to it.
let myExample: string = "";

// Step 2: Declare a boolean variable and check whether the string is empty (an empty string is "").
let isEmpty: boolean = myExample === "";

// Step 3: Log the result.
console.log(isEmpty);

// Exercise 9: Check whether a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
let myString: string = "Appointment";

// Step 2: Declare a boolean variable and check whether the string starts with 'A'.
let startsWithA: boolean = myString.startsWith("A");

// Step 3: Log the result.
console.log(startsWithA);
// Note: The check is case-sensitive. "Apple" starts with 'A', but "apple" does not.

// Exercise 10: Perform string operations
// Step 1: Create a string variable called message with the value "TypeScript is fun".
let text: string = "TypeScript is fun";

// Step 2: Log the length of the string.
console.log(text.length);

// Step 3: Log the string in uppercase.
console.log(text.toUpperCase());

// Step 4: Log the string in lowercase.
console.log(text.toLowerCase());

// Step 5: Create a variable called favoriteLanguage and assign a programming language to it.
let favoriteLanguage: string = "TypeScript";

// Step 6: Use a template literal to log the following sentence:
// "My favorite programming language is ___."
console.log(`My favorite programming language is ${favoriteLanguage}.`);

// Part 4 — BigInt (bigint)

// Exercise 11: Add BigInt values
// Step 1: Create two variables of type bigint.
let bigIntX: bigint = 123456789n;
let bigIntY: bigint = 987654321n;

// Step 2: Add the two bigint values together.
let bigIntSum: bigint = bigIntX + bigIntY;

// Step 3: Log the result.
console.log(bigIntSum);

// Part 5 — Arrays (array)

// Exercise 12: Calculate the product of array elements
// Step 1: Create an array containing the numbers [10, 20, 30, 40].
let numbers: number[] = [10, 20, 30, 40];

// Step 2: Create a variable to store the product (start with 1).
let product: number = 1;

// Step 3: Use a loop to multiply all the numbers in the array.
for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i];
}

// Step 4: Log the final product.
console.log(product);


// Exercise 13: Create an array of student objects
// Step 1: Create an array called students.
let students: { name: string; grade: number }[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 }
];
// Step 2: Each object should have two properties: name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to iterate through the array.
for (let i = 0; i < students.length; i++) {


// Step 5: Log each student's name.
console.log(students[i].name);
}

// Part 6 — Functions and Types

// Exercise 14: Create a function with a union type
// Step 1: Create a function called printId.
// Step 2: The id parameter should accept either a string or a number (string | number).
// Step 3: Inside the function, log the value of id.
function printId(id: string | number): void {
    console.log(id);
}
// Step 4: Call printId once with a number and once with a string.
printId(100);
printId("Test string value");

// Exercise 15: Calculate the time a QA engineer needs to test multiple features
// Step 1: Declare two variables: the QA engineer's name (string) and the number of features to test (number). Assume each feature requires 2 hours of testing.
let qaName: string = "Ana";
let featuresNumber: number = 10;
let hoursFeature: number = 2;

// Step 2: Calculate the total time required to test all features.
let totalHours: number = featuresNumber * hoursFeature;

// Step 3: Use a template literal to log the QA engineer's name, the number of features, and the total time required.
// Example: "QA engineer {QA name} will need {total hours} hours to test {number of features} features."
console.log(`QA engineer ${qaName} will need ${totalHours} hours to test ${featuresNumber} features.`);

// Exercise 16: Use union types in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
type User = {
    id: number | string;
    name: string;
  };

// Step 4: Create one user object with a numeric id.
let user1: User = { id: 434345444, name: "Ana" };

// Step 5: Create another user object with a string id.
let user2: User = { id: "000438549", name: "John" };

// Step 6: Log both user objects.
console.log(user1);
console.log(user2);
