//npx tsx homework-3-dimitar-ivanov.ts
// Homework 03

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
console.log('Exercise 1 ' + '='.repeat(30));
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met
const ex1ColorArr: string[] = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'white',
  'black',
];
for (const color of ex1ColorArr) {
  if (color.length > 4) {
    console.log(color);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop
console.log('Exercise 2 ' + '='.repeat(30));
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Exercise 3: Write a script to construct the following pattern using a nested for loop:
console.log('Exercise 3 ' + '='.repeat(30));
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
const ex3Cols: number = 5;

for (let i = 1; i <= ex3Cols; i++) {
  console.log('* '.repeat(i));

  if (i === ex3Cols) {
    for (let j = ex3Cols - 1; j >= 1; j--) {
      console.log('* '.repeat(j));
    }
  }
}

// Exercise 4: Phone number area code substitution
console.log('Exercise 4 ' + '='.repeat(30));
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console
const ex4OriginalNumbers: string[] = ['0376829209', '04239982009', '0536829299'];
const ex4ReplacedNumbers: string[] = [];

for (const number of ex4OriginalNumbers) {
  ex4ReplacedNumbers.push(number.replace('0', '+359'));
}

for (let i = 0; i < ex4OriginalNumbers.length; i++) {
  console.log(`Original number: ${ex4OriginalNumbers[i]}; New number: ${ex4ReplacedNumbers[i]}`);
}

// Exercise 5: Decide on an evening activity
console.log('Exercise 5 ' + '='.repeat(30));
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
const ex5Name: string = 'Bobi';
const ex5Hour: number = 22;
const ex5Money: number = 32.5;
const ex5IsSick: boolean = false;
let ex5Activity: string = '';

if (ex5IsSick) {
  ex5Activity = 'stay at home and go to bed';
} else if (ex5Money >= 20 && ex5Hour < 21) {
  ex5Activity = 'go to the cinema';
} else if (ex5Money >= 20 && ex5Hour >= 21 && ex5Hour <= 24) {
  ex5Activity = 'watch a movie';
} else if (ex5Money < 20) {
  ex5Activity = 'go to the park';
}

let ex5DetailsAndActivity: string = `Name: ${ex5Name} \nIs sick: ${ex5IsSick} \nMoney: ${ex5Money} \nHour: ${ex5Hour} \nActivity: ${ex5Activity}`;
console.log(ex5DetailsAndActivity);

// Exercise 6: Use an Enum, Object type, and Arrays
console.log('Exercise 6 ' + '='.repeat(30));
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
enum Ex6AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

type Ex6Client = {
  name: string;
  accountType: Ex6AccountTypes;
};

const ex6Client1: Ex6Client = {
  name: 'John Doe',
  accountType: Ex6AccountTypes.Deposit,
};

const ex6Client2: Ex6Client = {
  name: 'Simon Carter',
  accountType: Ex6AccountTypes.Current,
};

const ex6Client3: Ex6Client = {
  name: 'John Rambo',
  accountType: Ex6AccountTypes.FlexSave,
};

const ex6AllClients: Ex6Client[] = [];
ex6AllClients.push(ex6Client1, ex6Client2, ex6Client3);

for (const client in ex6AllClients) {
  const name = ex6AllClients[client].name;
  const accountTypeNumber = ex6AllClients[client].accountType;
  const accountTypeText = Ex6AccountTypes[accountTypeNumber];

  console.log(`Name: ${name}; Account type: ${accountTypeNumber} (${accountTypeText}).`);
}

// Part 2: Functions

// Exercise 7:
console.log('Exercise 7 ' + '='.repeat(30));
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
console.log('Exercise 8 ' + '='.repeat(30));
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3));

function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9:
console.log('Exercise 9 ' + '='.repeat(30));
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
 * Prints a person's full name in the console
 * @param {string} firstName - the person's first name
 * @param {string} lastName - the person's last name
 * @param {string} middleName - the person's middle name (optional)
 * @returns {void} Nothing; the full name is printed in the console
 */

function ex9PrintNames(firstName: string, lastName: string, middleName?: string) {
  const names: string =
    middleName !== undefined
      ? firstName + ' ' + middleName + ' ' + lastName
      : firstName + ' ' + lastName;
  console.log(names);
}

ex9PrintNames('Jon', 'Jovi');
ex9PrintNames('Jon', 'Jovi', 'Bon');

// Exercise 10:
console.log('Exercise 10 ' + '='.repeat(30));
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Returns a person's first name, last name and age as one string
 * @param {string} firstName - the person's first name (optional, default "[first name]")
 * @param {string} lastName - the person's last name (optional, default "[last name]")
 * @param {number} age - the person's age (optional, default 0)
 * @returns {string} The full info, plus a warning message if any argument is missing
 */
function ex10GetPersonInfo(firstName?: string, lastName?: string, age?: number): string {
  const argAreMissing: boolean =
    firstName === undefined || lastName === undefined || age === undefined;

  const info: string = `${firstName ?? '[first name]'} ${lastName ?? '[last name]'} ${age ?? 0}`;

  if (argAreMissing) {
    return `${info} - Missing one or all arguments - first name, last name, or age`;
  }
  return info;
}

console.log(ex10GetPersonInfo('Pepo', 'Petrov', 25));
console.log(ex10GetPersonInfo('Pepo', 'Petrov'));
console.log(ex10GetPersonInfo('Pepo'));
console.log(ex10GetPersonInfo());

// Exercise 11:
console.log('Exercise 11 ' + '='.repeat(30));
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly
/**
 * Prints a message saying a compliment about a programming language
 * @param {string} programmingLanguage - the programming language
 * @param {string} compliment - your compliment for the specific language
 * @returns {void} Nothing; the message is printed in the console
 */
function ex11PrintsProgrammingLanguageAndCompliment(
  programmingLanguage: string,
  compliment: string,
) {
  console.log(`I love ${programmingLanguage} because ${compliment}.`);
}

ex11PrintsProgrammingLanguageAndCompliment('TypeScript', 'It is a JavaScript on steroids');

// Exercise 12:
console.log('Exercise 12 ' + '='.repeat(30));
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8
function ex12CountUpperAndLowerCaseLetters(text: string): [upper: number, lower: number] {
  let upperCaseLettersCount: number = 0;
  let lowerCaseLettersCount: number = 0;

  for (const letter of text) {
    if (letter !== letter.toLowerCase()) {
      upperCaseLettersCount++;
    } else if (letter !== letter.toUpperCase()) {
      lowerCaseLettersCount++;
    }
  }

  return [upperCaseLettersCount, lowerCaseLettersCount];
}

const [ex12Upper, ex12Lower] = ex12CountUpperAndLowerCaseLetters('I like TypeScript!');
console.log(`Number of uppercase characters: ${ex12Upper}`);
console.log(`Number of lowercase characters: ${ex12Lower}`);

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
