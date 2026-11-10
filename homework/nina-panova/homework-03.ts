// Homework 03

//npx ts-node homework/nina-panova/homework-03.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    console.log(colors[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let i: number = 1; i <= 100; i++) {
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

const maxStars: number = 5;

for (let i: number = 1; i <= maxStars; i++) {
  let row: string = '';
  for (let j: number = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

for (let i: number = maxStars - 1; i >= 1; i--) {
  let row: string = '';
  for (let j: number = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let i: number = 0; i < phoneNumbers.length; i++) {
  const originalNumber: string = phoneNumbers[i];

  let formattedNumber: string = originalNumber;
  if (originalNumber.startsWith('0')) {
    formattedNumber = '+359' + originalNumber.slice(1);
  }

  console.log(`Original: ${originalNumber} -> New: ${formattedNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

const personName: string = 'Иван';
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

console.log(`Name: ${personName}, Hour: ${hour}, Money: ${money.toFixed(2)}, Sick: ${isSick}`);
console.log(`Decided activity: ${activity}`);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

// Part 2: Functions

enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type Client = {
  name: string;
  accountType: AccountType;
};

const client1: Client = {
  name: 'John Doe',
  accountType: AccountType.Current,
};

const client2: Client = {
  name: 'Jane Smith',
  accountType: AccountType.FlexSave,
};

const client3: Client = {
  name: 'Peter Brown',
  accountType: AccountType.Deposit,
};

const clients: Client[] = [client1, client2, client3];

for (let i: number = 0; i < clients.length; i++) {
  const currentClient: Client = clients[i];
  console.log(
    `Client: ${currentClient.name}, Account Type: ${AccountType[currentClient.accountType]} (${currentClient.accountType})`,
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

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, driver_name, car_number);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

function sum_2_numbers(number_1: number, number_2: number): number {
  const result: number = number_1 + number_2;
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

/**
 * Prints a person's First Name, optional Middle Name, and Last Name in the console.
 * @param {string} firstName - The person's first name.
 * @param {string} lastName - The person's last name.
 * @param {string} [middleName] - The person's optional middle name.
 * @returns {void}
 */
function printFullName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}

printFullName('Иван', 'Петров', 'Георгиев');
printFullName('Мария', 'Иванова');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Concatenates a person's first name, last name, and age into a single string.
 * Returns default values and a warning message if any argument is missing.
 * @param {string} [firstName="John"] - The person's first name.
 * @param {string} [lastName="Doe"] - The person's last name.
 * @param {number} [age=30] - The person's age.
 * @returns {string} The concatenated details or a missing arguments message with defaults.
 */
function getPersonDetails(
  firstName: string = 'John',
  lastName: string = 'Doe',
  age: number = 30,
): string {
  if (arguments.length < 3) {
    return `Missing one or all arguments - first name, last name, or age. Default: ${firstName} ${lastName}, Age: ${age}`;
  }

  return `${firstName} ${lastName}, Age: ${age}`;
}

console.log(getPersonDetails('Иван', 'Петров', 25));
console.log(getPersonDetails('Мария', 'Иванова'));
console.log(getPersonDetails('Георги'));
console.log(getPersonDetails());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Prints a message expressing love for a programming language along with a compliment.
 * @param {object} params - The named parameters object.
 * @param {string} params.programmingLanguage - The name of the programming language.
 * @param {string} params.compliment - The reason or compliment for the language.
 * @returns {void}
 */
function praiseLanguage({
  programmingLanguage,
  compliment,
}: {
  programmingLanguage: string;
  compliment: string;
}): void {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}

praiseLanguage({ programmingLanguage: 'TypeScript', compliment: 'it catches errors early' });
praiseLanguage({ programmingLanguage: 'JavaScript', compliment: 'it runs everywhere' });
praiseLanguage({ programmingLanguage: 'Python', compliment: 'it has clean syntax' });

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

/**
 * Calculates and logs the number of uppercase and lowercase letters in a given string.
 * @param {string} text - The input string to analyze.
 * @returns {void}
 */
function countLetters(text: string): void {
  let uppercaseCount: number = 0;
  let lowercaseCount: number = 0;

  for (let i: number = 0; i < text.length; i++) {
    const char: string = text[i];

    if (char >= 'A' && char <= 'Z') {
      uppercaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowercaseCount++;
    }
  }

  console.log(`Number of uppercase characters: ${uppercaseCount}`);
  console.log(`Number of lowercase characters: ${lowercaseCount}`);
}

countLetters('Hello World');

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
