// Homework 03 - Collections and Loops
//npx tsx homework/margarita-mihaylova/homework03.ts
//npx ts-node homework/margarita-mihaylova/homework03.ts

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (const color of colors) {
  if (color.length > 4) {
    console.log(color);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

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

for (let i = 1; i <= 5; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }
  console.log(pattern);
}

for (let i = 4; i >= 1; i--) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }
  console.log(pattern);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
for (const number of phoneNumbers) {
  const newPnoneNumber: string = '+359' + number.substring(1);
  console.log(`Original number: ${number}; New pnone number: ${newPnoneNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

const name2: string = 'Margi';
const hour: number = 12;
const money: number = 99.99;
const isSick: boolean = false;
let activity: string;

if (isSick) {
  //console.log(`Person ${name2} has ${money} money. The time is ${time} and stay at home and go to bed`);
  activity = 'stays at home and go to bed';
} else if (money < 20) {
  activity = 'goes to the park';
} else if (money >= 20 && hour >= 21 && hour <= 24) {
  activity = 'watches a movie';
} else {
  activity = 'goes to the cinema';
}

console.log(
  `Person ${name2} has ${money} money, the time is ${hour}, is sick is ${isSick} and (s)he ${activity}`,
);

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log //the name and account type of each client in the console

enum Accounts {
  Current = 1,
  Deposit = 2,
  FlexSave = 4,
}

type Client = {
  name: string;
  account: Accounts;
};

const client1: Client = {
  name: 'Ivan Ivanov',
  account: Accounts.Current,
};

const client2: Client = {
  name: 'Petar Petrov',
  account: Accounts.Deposit,
};

const client3: Client = {
  name: 'Russi Russev',
  account: Accounts.FlexSave,
};

const clientsArr: Client[] = [client1, client2, client3];

for (const client of clientsArr) {
  console.log(`Name: ${client.name} and account type is ${Accounts[client.account]}`);
}

// Functions

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

function sum_2_numbers(number_1: number, number_2: number) {
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
/**
 * Print person’s names

 * @param {string} firstName - person's firt name 
 * @param {string | undefined} middleName - optional parameter - person's middle name
 * @param {string} lastName - person's last name
 */

function printPersonName(firstName: string, lastName: string, middleName?: string): void {
  if (middleName) {
    console.log(
      `Person's first name : ${firstName}, middleName : ${middleName}, last name : ${lastName}`,
    );
  } else {
    console.log(`Person's first name : ${firstName}, last name : ${lastName}`);
  }
}

printPersonName('Margarita', 'Mihaylova', 'Spasova');
printPersonName('Margarita', 'Mihaylova');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Concatenates first name, last name and age
 * @param {string} fname - person's first name, optional parameter
 * @param {string} lname - person's last name, optional parameter
 * @param {number} age - person's age, optional parameter
 * @returns {string} - conactenated result as string
 */
function concatenate(
  fname: string = 'unknown',
  lname: string = 'unknown',
  age: number = -1,
): string {
  if (fname === 'Missing first name' || lname === 'Missing last name' || age === -1) {
    return `First name ${fname}, last name ${lname}, or age ${age} - missing one or all arguments`;
  } else {
    return `First name ${fname}, last name ${lname}, age ${age}`;
  }
}

console.log(concatenate('Margi', 'Mihaylova', 33));
console.log(concatenate('margi', '', 3));
console.log(concatenate('Margi'));
console.log(concatenate());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Print a compliment to a programming language
 * @param {string} language - programming language
 * @param {string} compliment - compliment to print
 */

type ProgrammingLanguage = {
  language: string;
  compliment: string;
};
function greet({ language, compliment }: ProgrammingLanguage) {
  console.log(`I love ${language} because ${compliment}`);
}

greet({ language: 'Java', compliment: 'it is logical' });
greet({ compliment: 'cathes errors early', language: 'Typescript' });
greet({ language: '', compliment: '' });

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countLetters(text: string): [number, number] {
  let upperCases: number = 0;
  let lowerCases: number = 0;

  for (const char of text) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      upperCases++;
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      lowerCases++;
    }
  }
  return [upperCases, lowerCases];
}

const [upperCases, lowerCases] = countLetters('Hello World');

console.log(`Number of uppercase characters: ${upperCases}`);
console.log(`Number of lowercase characters: ${lowerCases}`);

// Exercise 7 Hints:
// The order of the arguments in the "add_item_in_form" function call or the order of the // parameters in the function should be fixed

// Exercise 8 Hints:
// 1. Missing closing bracket in the console log statement
// 2. A return statement is missing inside the function

// Exercise 12 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of uppercase and lowercase letters
// 3. Use an if statement to check if a character is uppercase or lowercase and increment the respective counter
// 4. Use a collection as a return value to return both counts
