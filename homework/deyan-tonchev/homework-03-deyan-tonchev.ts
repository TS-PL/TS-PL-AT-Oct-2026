// npx tsx homework/deyan-tonchev/homework-03-deyan-tonchev

// // //Използвай последователно await, когато следващата стъпка зависи от предишната.

// // // Използвай Promise.all(), когато задачите са независими и могат да се изпълнят едновременно.

// // //Това е най-честият въпрос на интервю за async/await и Promise.all().

// Run the file with the command:
// npx ts-node typescript/oop/class.ts
// npx tsx typescript/oop/class.ts

// Homework 03

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

//Declare an array
const colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

//Select members with more than 4 chars
for (let i = 0; i < colorArr.length; i++) {
  if (colorArr[i].length > 4) {
    console.log(colorArr[i]);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

// //Print from 1 to 100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

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
//Print stars from 1 to 5
for (let i = 1; i <= 5; i++) {
  let text = '';
  //Add stars to the row
  for (let j = 1; j <= i; j++) {
    text += '* ';
  }
  //Print the row
  console.log(text);
}
//Print 4 to 1 stars
for (let i = 4; i >= 1; i--) {
  let text = '';
  //Add stars to row
  for (let j = 1; j <= i; j++) {
    text += '* ';
  }
  //Print
  console.log(text);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

//Declare an array
const phoneArr = ['0376829209', '04239982009', '0536829299'];

for (let i = 0; i < phoneArr.length; i++) {
  //Store original number
  const originalNumber = phoneArr[i];
  //Create updated number - remove 0 and add +359
  const updatedNumber = '+359' + originalNumber.slice(1);
  //Print result
  console.log('originalNumber', originalNumber);
  console.log('updatedNumber', updatedNumber);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity
//Declare variables
const name: string = 'Max';
const hour: number = 23;
const money: number = 22;
const isSick: boolean = false;

//Check evening activity
if (isSick) {
  console.log(`Person: ${name} is sick:${isSick} -  stay at home and go to bed`);
} else if (money < 20) {
  console.log(`Person: ${name} is sick:${isSick} has money: ${money} - go to the park`);
} else if (money > 20 && hour >= 21 && hour <= 24) {
  console.log(`Person: ${name}  has money: ${money} and the hour is:${hour} - watch a movie`);
} else {
  console.log(`Person: ${name} is sick:${isSick} has money:${money} - go to cinema`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

// Declare account types
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

// Declare client type
type Client = {
  name: string;
  accountType: AccountType;
};

// Create clients
const client1: Client = {
  name: 'Petar Petrov',
  accountType: AccountType.Current,
};

const client2: Client = {
  name: 'Ivan Ivanov',
  accountType: AccountType.FlexSave,
};

const client3: Client = {
  name: 'Marin Marinov',
  accountType: AccountType.Deposit,
};

// Store clients in an array
const clients: Client[] = [client1, client2, client3];

// Loop through the array and print clients
for (let i = 0; i < clients.length; i++) {
  console.log('Name:', clients[i].name);
  console.log('Account Type:', clients[i].accountType);
}

// Part 2: Functions

// Exercise 7:
// Fix the following code to print the same message each time the function is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

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

function sum_2_numbers(number_1: number, number_2: number) {
  return number_1 + number_2;
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
 *Prints first name, midlle name and last name - middle name is optional
 * @param firstName
 * @param middleName
 * @param lastName
 */
function printNames(firstName: string, lastName: string, middleName?: string): void {
  //console.log(`${firstName} ${middleName} ${lastName}`);
  //Check if middle name is available
  if (middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}
//Print with middle name
printNames('Petar ', 'Marinov ', 'Petrov');
//Print without middle name
printNames('Petar ', 'Marinov');

// Petar  Petrov Marinov
// Petar  Marinov

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Return first name, last name and age of the person
 * If no arguments are passed - returns default value
 * @param fname
 * @param lname
 * @param age
 */

function personInfo(fname: string = 'Unknown', lname: string = 'Unknown', age: number = 0): string {
  //Check for missing arguments
  if (fname === 'Unknown' || lname === 'Unknown' || age === 0) {
    console.log('Missing one or all arguments - first name, last name or age');
  }

  return fname.concat(' ', lname).concat(', age ', age.toString());
}

console.log(personInfo('Petar ', 'Ivanov ', 28));
console.log(personInfo('Petar '));
console.log(personInfo());

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Ptints a message about a programing language
 * @param language Programing language
 * @param compliment Reason why you like it
 */

function languageFn(language: string, compliment: string): void {
  console.log(`I love ${language} because ${compliment}`);
}

//Call function with different arguments
languageFn('Typescript', 'is fun');
languageFn('Typescript', 'is popular');
languageFn('Javascript', 'is similar to Typescript');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

//Declare a function
function letterCount(text: string) {
  let upperCase = 0;
  let lowerCase = 0;
  //Loop the string
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    //Check for upper or lower
    if (char >= 'A' && char <= 'Z') {
      upperCase++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCase++;
    }
  }
  //Return counts
  return [upperCase, lowerCase];
}
//Call function and store the result
const result = letterCount('Hello World');
//Print result for uppercase count
console.log('Uppercase:', result[0]);
//Print result for lower case count
console.log('Lowercase:', result[1]);

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
