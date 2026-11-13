// Run the file with the command:
// npx ts-node homework/kremena-dimitrova/homework-03.ts
// npx tsx homework/kremena-dimitrova/homework-03.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
console.log('-----------1-------------');

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log('\n-----------2-------------');

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
console.log('\n-----------3-------------');

const n = 5;

for (let i = 1; i <= n; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '* ';
  }
  console.log(line.trim());
}

for (let i = n - 1; i >= 1; i--) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '* ';
  }
  console.log(line.trim());
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console
console.log('\n-----------4-------------');

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneNumbers.length; i++) {
  const original = phoneNumbers[i];

  const newNumber = original.replace(/^0/, '+359');

  console.log(`Original: ${original} | New: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
console.log('\n-----------5-------------');

const name: string = 'Alex';
const hour: number = 22;
const money: number = 25.5;
const isSick: boolean = false;

let activity: string = '';

if (isSick) {
  activity = 'stay at home and go to bed';
} else if (money > 20 && hour >= 21 && hour <= 24) {
  activity = 'watch a movie';
} else if (money >= 20) {
  activity = 'go to the cinema';
} else {
  activity = 'go to the park';
}

console.log('--- Person Details ---');
console.log(`Name: ${name}`);
console.log(`Hour: ${hour}:00`);
console.log(`Money: $${money.toFixed(2)}`);
console.log(`Is Sick: ${isSick}`);
console.log(`----------------------`);
console.log(`Decided Activity: ${activity}`);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
console.log('\n-----------6-------------');

enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

interface Client {
  name: string;
  accountType: AccountType;
}

const client1: Client = {
  name: 'John Doe',
  accountType: AccountType.Current,
};

const client2: Client = {
  name: 'Peter Parker',
  accountType: AccountType.FlexSave,
};

const client3: Client = {
  name: 'Dwayne Johnson',
  accountType: AccountType.Deposit,
};

const clients: Client[] = [client1, client2, client3];

for (let i = 0; i < clients.length; i++) {
  const currentClient = clients[i];
  const accountTypeName = AccountType[currentClient.accountType];
  console.log(
    `Client Name: ${currentClient.name} | Account Type: ${accountTypeName} (Value: ${currentClient.accountType})`,
  );
}

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")
console.log('\n-----------7-------------');

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  car_number: number,
  driver_name: string,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 2523, 'Petko');

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));
console.log('\n-----------8-------------');

function sum_2_numbers(number_1: number, number_2: number): number {
  const result = number_1 + number_2;
  return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function. Example:

/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} The product of a and b
 */

// function multiply(a: number, b: number): number {
//     return a * b;
// }

// Step 3: Call the function with and without a Middle Name to verify it works correctly
console.log('\n-----------9-------------');

/**
 * Prints a person's full name to the console
 * @param {string} firstName - The first name of the person
 * @param {string} lastName - The last name of the person
 * @param {string} [middleName] - The optional middle name of the person
 */
function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}

printFullName('Ivan', 'Petrov');

printFullName('Ivan', 'Petrov', 'Dimitrov');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly
console.log('\n-----------10-------------');

/**
 * Concatenates a person's first name, last name, and age, and provides a warning if arguments are missing.
 * @param {string} [firstName="John"] - The first name of the person
 * @param {string} [lastName="Doe"] - The last name of the person
 * @param {number} [age=18] - The age of the person
 * @returns {string} The concatenated result along with a warning message if any argument was missing
 */
function getPersonInfo(firstName?: string, lastName?: string, age?: number): string {
  let message = '';

  if (firstName === undefined || lastName === undefined || age === undefined) {
    message = 'Missing one or all arguments - first name, last name, or age ';
  }

  const resolvedFirstName = firstName !== undefined ? firstName : 'John';
  const resolvedLastName = lastName !== undefined ? lastName : 'Doe';
  const resolvedAge = age !== undefined ? age : 18;

  return `${message}First Name: ${resolvedFirstName}, Last Name: ${resolvedLastName}, Age: ${resolvedAge}`;
}

console.log('--- Call 1: With all arguments ---');
console.log(getPersonInfo('Maria', 'Ivanova', 25));

console.log('\n--- Call 2: With missing age ---');
console.log(getPersonInfo('Georgi', 'Petrov'));

console.log('\n--- Call 3: With missing all arguments ---');
console.log(getPersonInfo());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly
console.log('\n-----------11-------------');

/**
 * Prints a message expressing love for a programming language along with a reason/compliment.
 * @param {Object} params - The parameters object
 * @param {string} params.language - The programming language
 * @param {string} params.compliment - The reason or compliment why it is loved
 */
function praiseProgrammingLanguage({
  language,
  compliment,
}: {
  language: string;
  compliment: string;
}): void {
  console.log(`I love ${language} because ${compliment}`);
}

praiseProgrammingLanguage({
  language: 'TypeScript',
  compliment: 'it adds type safety to JavaScript and catches bugs early!',
});

praiseProgrammingLanguage({
  language: 'Python',
  compliment: 'its syntax is so clean, readable and easy to learn.',
});

praiseProgrammingLanguage({
  language: 'Java',
  compliment: 'its platform independence make it a solid choice for enterprise applications.',
});

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8
console.log('\n-----------12-------------');

/**
 * Counts the number of uppercase and lowercase characters in a given string.
 * @param {string} str - The input string to check
 * @returns {Object} An object containing uppercase and lowercase counts
 */
function countLetterCases(str: string): { uppercaseCount: number; lowercaseCount: number } {
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= 'A' && char <= 'Z') {
      uppercaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowercaseCount++;
    }
  }

  return { uppercaseCount, lowercaseCount };
}

const sampleString = 'Hello World';
const result = countLetterCases(sampleString);

console.log(`Sample string: "${sampleString}"`);
console.log(`Number of uppercase characters: ${result.uppercaseCount}`);
console.log(`Number of lowercase characters: ${result.lowercaseCount}`);

// Exercise 7 Hints:
// The order of the arguments in the "add_item_in_form" function call or the order of the parameters in the function should be fixed

// Exercise 8 Hints:
// 1. Missing closing bracket in the console log statement
// 2. A return statement is missing inside the function

// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts
