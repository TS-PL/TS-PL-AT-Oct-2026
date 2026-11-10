// Homework 03
// npx ts-node homework/betina-mladenova/homework3.ts
// npx tsx homework/betina-mladenova/homework3.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

console.log('- SOLUTION EXCERCISE 1:');

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (const color of colors) {
  if (color.length > 4) {
    console.log(color);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

console.log('- SOLUTION EXCERCISE 2:');

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

console.log('- SOLUTION EXCERCISE 3:');

for (let i: number = 0; i < 5; i++) {
  let starsCount = '';
  for (let j: number = 0; j <= i; j++) {
    starsCount = starsCount + '*';
  }
  console.log(starsCount);
}

for (let i: number = 4; i > 0; i--) {
  let starsCount = '';
  for (let j: number = 1; j <= i; j++) {
    starsCount = starsCount + '*';
  }
  console.log(starsCount);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

console.log('- SOLUTION EXCERCISE 4:');

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
let newPhoneNumbers: string[] = [];

for (const num of phoneNumbers) {
  newPhoneNumbers.push(num.replace('0', '+359'));
}

console.log('Original phone numbers:', phoneNumbers);
console.log('Phone numbers format changed:', newPhoneNumbers);

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

console.log('- SOLUTION EXCERCISE 5:');

let name: string = 'Betina';
let hour: number = 12;
let money: number = 150.0;
let isSick: boolean = false;

if (!isSick && money >= 20) {
  console.log(`${name} will be going to the cinema.`);
} else if (!isSick && money < 20) {
  console.log(`${name} will be going to the park.`);
} else if (!isSick && money >= 20 && hour >= 21 && hour <= 24) {
  console.log(`${name} will be watching a movie.`);
} else if (isSick) {
  console.log(`${name} will stay home and go to bed.`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

console.log('- SOLUTION EXCERCISE 6:');

enum AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

interface Client {
  name: string;
  accountType: AccountTypes;
}

const client1: Client = {
  name: 'Alex',
  accountType: AccountTypes.Current,
};

const client2: Client = {
  name: 'Maria',
  accountType: AccountTypes.FlexSave,
};

const client3: Client = {
  name: 'Ivana',
  accountType: AccountTypes.Deposit,
};

const arrayOfClients: Client[] = [client1, client2, client3];

for (let i = 0; i < arrayOfClients.length; i++) {
  console.log(
    `Client's name is ${arrayOfClients[i].name} and account type is ${arrayOfClients[i].accountType}`,
  );
}

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

console.log('- SOLUTION EXCERCISE 7:');

function add_item_in_form(
  table_row: number,
  complain: string,
  client_name: string,
  driver_name: string,
  car_number: number,
) {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);

// Exercise 8:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

console.log('- SOLUTION EXCERCISE 8:');

function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
// Step 1: Define a function that prints in the console a person's First Name, Middle Name, and Last Name, where the Middle Name is optional
// Step 2: Use JSDoc to add a description to the function.
// Step 3: Call the function with and without a Middle Name to verify it works correctly

/**
 * Print person's first, middle and last name
 * @param {string} firstName - person's first name
 * @param {string} lastName - person's last name
 * @param {string} [middleName] - person's middle name - optional parameter
 * @returns {void} Prints the person name
 */

console.log('- SOLUTION EXCERCISE 9:');

function printUserName(firstName: string, lastName: string, middleName?: string) {
  if (!middleName) {
    console.log(`Person's name is ${firstName} ${lastName}`);
  } else {
    console.log(`Person's name is ${firstName} ${middleName} ${lastName}`);
  }
}

printUserName('Ivan', 'Ivanov');
printUserName('Maria', 'Petrova', 'Vasileva');

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

console.log('- SOLUTION EXCERCISE 10:');

/**
 * Print person's first, middle and last name
 * @param {string} [firstName] - person's first name - optional
 * @param {string} [lastName] - person's last name - optional
 * @param {number} [age] - person's age - optional
 * @returns {void} Prints the person's name and age
 */

function concat(firstName?: string, lastName?: string, age?: number) {
  if (firstName === undefined || lastName === undefined || age === undefined) {
    console.log('Missing one or all arguments - first name, last name, or age');

    const defaultFName = firstName ?? 'John';
    const defaultLName = lastName ?? 'Doe';
    const defaultAge = age ?? 20;

    console.log('Default concat:', defaultFName + defaultLName + defaultAge);
  } else {
    console.log("Concatenated person's name is:", firstName + lastName + age);
  }
}

concat('Ivan', 'Ivanov', 35);
concat();
concat('Desi');
concat('Pepi', 'Petrov');

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

console.log('- SOLUTION EXCERCISE 11:');

/**
 * Print person's first, middle and last name
 * @param {string} programmingLang - programming language
 * @param {string} compliment - compliment message
 * @returns {string} Returns the message "I love {programming language} because {compliment}"
 */

function printFavLang(programmingLang: string, compliment: string): string {
  return `I love ${programmingLang} because ${compliment}`;
}

console.log(printFavLang('Language X', 'Test compliment'));
console.log(printFavLang('', ''));
console.log(printFavLang('TS', "it's cool"));

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

console.log('- SOLUTION EXCERCISE 12:');

function calcUpperAndLowerCase(stringParam: string) {
  let upperCount: number = 0;
  let lowerCount: number = 0;
  for (let i: number = 0; i < stringParam.length; i++) {
    if (stringParam[i] >= 'A' && stringParam[i] <= 'Z') {
      upperCount++;
    } else if (stringParam[i] >= 'a' && stringParam[i] <= 'z') {
      lowerCount++;
    }
  }

  return [
    'Number of uppercase characters: ' + upperCount,
    'Number of lowercase characters: ' + lowerCount,
  ];
}

console.log(calcUpperAndLowerCase('Hello World'));
