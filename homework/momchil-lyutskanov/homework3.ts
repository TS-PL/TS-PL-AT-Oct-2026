// Homework 03 - Answers - Momchil Lyutskanov
// npx ts-node homework/momchil-lyutskanov/homework3.ts

// Part 1: Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red", "blue", "green", "yellow", "purple", "orange", "white", "black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (let index = 0; index < colors.length; index++) {
  const color = colors[index];

  if (color !== undefined && color.length > 4) {
    console.log(color);
  }
}

// Exercise 2: Write a script to log all numbers from 1 to 100 in the console using a loop

for (let number: number = 1; number <= 100; number++) {
  console.log(number);
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

for (let row = 1; row <= maxStars; row++) {
  let line: string = '';

  for (let star = 1; star <= row; star++) {
    line += star === 1 ? '*' : ' *';
  }

  console.log(line);
}

for (let row = maxStars - 1; row >= 1; row--) {
  let line: string = '';

  for (let star = 1; star <= row; star++) {
    line += star === 1 ? '*' : ' *';
  }

  console.log(line);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values: "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" at the beginning with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (let index = 0; index < phoneNumbers.length; index++) {
  const originalNumber = phoneNumbers[index];

  if (originalNumber === undefined) {
    continue;
  }

  const newNumber: string = originalNumber.replace(/^0/, '+359');

  console.log(`Original: ${originalNumber}, New: ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variables: name (string), hour (whole number), money (floating-point number), and whether the person is sick (boolean)
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - If the person is not sick and has at least 20 money, the activity is "go to the cinema"
// - If the person is not sick and has less than 20 money, the activity is "go to the park"
// - If the person is not sick, has more than 20 money, but it is late at night (hour is between 21 and 24), the activity is "watch a movie"
// - If the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity

{
  const name: string = 'Alex';
  const hour: number = 22;
  const money: number = 25.5;
  const isSick: boolean = false;

  let activity: string;

  if (isSick) {
    activity = 'stay at home and go to bed';
  } else if (money > 20 && hour >= 21 && hour <= 24) {
    activity = 'watch a movie';
  } else if (money >= 20) {
    activity = 'go to the cinema';
  } else {
    activity = 'go to the park';
  }

  console.log(`Name: ${name}, Hour: ${hour}, Money: ${money.toFixed(2)}, Sick: ${isSick}`);
  console.log(`Activity: ${activity}`);
}

// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

{
  enum AccountType {
    Current = 1,
    FlexSave = 4,
    Deposit = 2,
  }

  type Client = {
    name: string;
    accountType: AccountType;
  };

  const firstClient: Client = {
    name: 'John Doe',
    accountType: AccountType.Current,
  };

  const secondClient: Client = {
    name: 'Jane Smith',
    accountType: AccountType.FlexSave,
  };

  const thirdClient: Client = {
    name: 'Alex Brown',
    accountType: AccountType.Deposit,
  };

  const clients: Client[] = [firstClient, secondClient, thirdClient];

  for (let index = 0; index < clients.length; index++) {
    const client = clients[index];

    if (client === undefined) {
      continue;
    }

    console.log(`Name: ${client.name}, Account type: ${client.accountType}`);
  }
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
): void {
  console.log('Printing the row');
  console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);
add_item_in_form(2556, 'Driver smoked', 'Ivan', 'Petko', 2523);

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

{
  /**
   * Prints a person's full name, including a middle name when provided.
   * @param {string} firstName - The person's first name.
   * @param {string} lastName - The person's last name.
   * @param {string} [middleName] - The person's optional middle name.
   * @returns {void} Prints the name without returning a value.
   */
  function printFullName(firstName: string, lastName: string, middleName?: string): void {
    if (middleName !== undefined && middleName !== '') {
      console.log(`${firstName} ${middleName} ${lastName}`);
    } else {
      console.log(`${firstName} ${lastName}`);
    }
  }

  printFullName('John', 'Doe', 'Michael');
  printFullName('Jane', 'Smith');
}

// Exercise 10:
// Step 1: Define a function that returns concatenated strings: first name, last name, and age
// Step 2: Use JSDoc to add a description to the function
// Step 3: If the function is not called with arguments, it should return default values and the message: "Missing one or all arguments - first name, last name, or age"
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

{
  /**
   * Returns first name, last name, and age as one string.
   * Uses defaults and includes a message when any argument is missing.
   * @param {string} [firstName] - First name; defaults to "Unknown".
   * @param {string} [lastName] - Last name; defaults to "Unknown".
   * @param {number} [age] - Age; defaults to 0.
   * @returns {string} The details and, when needed, a missing-argument message.
   */
  function describePerson(firstName?: string, lastName?: string, age?: number): string {
    const hasMissingArguments: boolean =
      firstName === undefined || lastName === undefined || age === undefined;

    const resolvedFirstName: string = firstName ?? 'Unknown';
    const resolvedLastName: string = lastName ?? 'Unknown';
    const resolvedAge: number = age ?? 0;

    const details: string = `${resolvedFirstName} ${resolvedLastName}, Age: ${resolvedAge}`;

    if (hasMissingArguments) {
      return `${details} - Missing one or all arguments - first name, last name, or age`;
    }

    return details;
  }

  console.log(describePerson('John', 'Doe', 30));
  console.log(describePerson('John', 'Doe'));
  console.log(describePerson('John'));
  console.log(describePerson(undefined, 'Doe', 30));
  console.log(describePerson());
}

// Exercise 11:
// Step 1: Define a function that accepts 2 named parameters: programming language and compliment, and prints in the console a message: "I love {programming language} because {compliment}"
// Step 2: Use JSDoc to add a description to the function
// Step 3: Console log calls of the function a few times with different arguments to verify it works correctly

/**
 * Prints why a programming language is appreciated.
 * @param {string} programmingLanguage - The language to mention.
 * @param {string} compliment - The reason for loving that language.
 * @returns {void} Prints the message without returning a value.
 */
function complimentLanguage(programmingLanguage: string, compliment: string): void {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}

complimentLanguage('TypeScript', 'it helps catch type errors');
complimentLanguage('Python', 'its syntax is easy to read');
complimentLanguage('JavaScript', 'it makes web pages interactive');

// Exercise 12:
// Step 1: Define a function that accepts a string and calculates the number of uppercase and lowercase letters
// Hint: you can find hints at the end of this file
// Example: Sample string: "Hello World"
// Expected Output:
// Number of uppercase characters: 2
// Number of lowercase characters: 8

function countLetterCases(text: string): void {
  let uppercaseCount: number = 0;
  let lowercaseCount: number = 0;

  for (const character of text) {
    if (character >= 'A' && character <= 'Z') {
      uppercaseCount++;
    } else if (character >= 'a' && character <= 'z') {
      lowercaseCount++;
    }
  }

  console.log(`Number of uppercase characters: ${uppercaseCount}`);
  console.log(`Number of lowercase characters: ${lowercaseCount}`);
}

countLetterCases('Hello World');

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
