// Homework 03 - Collections and Loops

// Exercise 1: Loop over an array and log items only if the item's length is over 4 characters
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "white", "black"];

for (let i = 0; i < colors.length; i++) {
    if (colors[i].length > 4) {
        console.log(colors[i]);
    }
}

// Exercise 2: Log all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Exercise 3: Construct the pattern using a nested for loop
// The rows have 1, 2, 3, 4, 5, 4, 3, 2, 1 stars
for (let row = 1; row <= 9; row++) {
    let stars = 0;
    if (row <= 5) {
        stars = row;
    } else {
        stars = 10 - row;
    }
    let line = "";
    for (let j = 1; j <= stars; j++) {
        line = line + "* ";
    }
    console.log(line.trim());
}

// Exercise 4: Replace the leading "0" with "+359"
const phoneNumbers: string[] = ["0376829209", "04239982009", "0536829299"];

for (let i = 0; i < phoneNumbers.length; i++) {
    const original = phoneNumbers[i];
    const newNumber = original.replace("0", "+359");

    console.log("Original: " + original + " -> New: " + newNumber);
}

// Exercise 5: Decide on an evening activity
const personName: string = "Ivan";
const hour: number = 22;
const money: number = 25.5;
const isSick: boolean = false;

console.log("Name: " + personName);
console.log("Hour: " + hour);
console.log("Money: " + money);
console.log("Sick: " + isSick);

let activity = "";

if (!isSick && money >= 20) {
    activity = "go to the cinema";
} else if (!isSick && money < 20) {
    activity = "go to the park";
} else if (!isSick && money > 20 && hour >= 21 && hour <= 24) {
    activity = "watch a movie";
} else if (isSick) {
    activity = "stay at home and go to bed";
}

console.log("Activity: " + activity);

// Exercise 6: Use an Enum, Object type, and Arrays
enum AccountType {
    Current = 1,
    FlexSave = 4,
    Deposit = 2
}

const client1 = { name: "John Doe", accountType: AccountType.Current };
const client2 = { name: "Maria Ivanova", accountType: AccountType.FlexSave };
const client3 = { name: "Georgi Petrov", accountType: AccountType.Deposit };

const clients = [client1, client2, client3];

for (let i = 0; i < clients.length; i++) {
    console.log("Client: " + clients[i].name + ", account type: " + clients[i].accountType);
}

// Exercise 7: Fix the order of the parameters
function add_item_in_form(table_row: number, complain: string, client_name: string, car_number: number, driver_name: string) {
    console.log("Printing the row");
    console.log(table_row, complain, client_name, car_number, driver_name);
}

add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko");

// Exercise 8: Fix the errors
function sum_2_numbers(number_1: number, number_2: number) {
    const result = number_1 + number_2;
    return result;
}

console.log(sum_2_numbers(2, 3));

// Exercise 9: Print a full name with an optional middle name
/**
 * Prints a person's full name.
 * @param {string} firstName - the first name
 * @param {string} lastName - the last name
 * @param {string} [middleName] - the middle name (optional)
 */
function printFullName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        console.log(firstName + " " + middleName + " " + lastName);
    } else {
        console.log(firstName + " " + lastName);
    }
}

printFullName("Ivan", "Petrov", "Georgiev");
printFullName("Maria", "Ivanova");

// Exercise 10: Concatenate first name, last name, and age
/**
 * Returns the first name, last name, and age joined into one string.
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @returns {string} 
 */
function combineInfo(firstName?: string, lastName?: string, age?: number): string {
    if (!firstName || !lastName || !age) {
        return "Missing one or all arguments - first name, last name, or age";
    }
    return firstName + " " + lastName + " " + age;
}

console.log(combineInfo("Ivan", "Petrov", 25));
console.log(combineInfo("Ivan"));
console.log(combineInfo());

// Exercise 11: Print a compliment about a programming language
/**
 * @param {object} params 
 * @param {string} params.programmingLanguage -
 * @param {string} params.compliment 
 */
function loveLanguage({ programmingLanguage, compliment }: { programmingLanguage: string; compliment: string }) {
    console.log("I love " + programmingLanguage + " because " + compliment);
}

loveLanguage({ programmingLanguage: "JavaScript", compliment: "it runs in the browser" });
loveLanguage({ programmingLanguage: "Python", compliment: "it is easy to read" });
loveLanguage({ programmingLanguage: "TypeScript", compliment: "it helps me catch errors" });

// Exercise 12: Count uppercase and lowercase letters
/**
 * @param {string} text 
 * @returns {object}
 */
function countLetters(text: string) {
    let upper = 0;
    let lower = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= "A" && char <= "Z") {
            upper++;
        } else if (char >= "a" && char <= "z") {
            lower++;
        }
    }

    return { upper: upper, lower: lower };
}

const result = countLetters("Hello World");
console.log("Number of uppercase characters: " + result.upper);
console.log("Number of lowercase characters: " + result.lower);