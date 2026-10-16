// Run the file with the command:
// npx ts-node typescript/primitive-types/string.ts

// ==========================================
// 1. STRING (TEXT DATA TYPE)
// ==========================================

// string is a primitive data type in TypeScript.
// It is used to store text.
//
// Text can contain:
// - Letters
// - Digits
// - Spaces
// - Special characters
//
// Text values are placed in quotes.

// We create a constant of type string.
// : string specifies that the value is text.
// const means we cannot assign
// a new value to the variable.
//
// NOTE:
// In this file we write the types explicitly
// (: string, : number) for learning purposes.
// In real code, const x = 'Hello' is enough,
// because TypeScript infers the type
// automatically (see section 16).

const welcomeMessage: string = 'Hello, Maria!';

// ==========================================
// 2. TYPES OF QUOTES
// ==========================================

// In TypeScript we can use:
//
// ' ' - single quotes
// " " - double quotes
// ` ` - backticks
//
// All three can be used for text.
// Backticks also have additional
// features that we will look at later.

// We use double quotes on the outside
// so that we can place single
// quotes inside the text.

const quotes: string = "The car's name is 'BMW'";

// We print the text.
// Result: The car's name is 'BMW'
console.log('quotes', quotes);

// WRONG EXAMPLE:
//
// We cannot use unescaped
// double quotes inside text that is
// also wrapped in double quotes.
//
// The compiler will report a syntax error.

// const quotes2: string = "The car's name is "BMW"";

// ==========================================
// 3. ESCAPE CHARACTERS (SPECIAL CHARACTERS)
// ==========================================

// The backslash \ is used
// to write special characters in text.
//
// This is called escaping.
//
// For example, \' lets us use
// a single quote inside text
// wrapped in single quotes.

// We use \' for the apostrophe in car's.
// The double quotes around BMW don't need
// escaping, because the outer quotes are single.

const quotes2: string = 'The car\'s name is "BMW"';

// Result: The car's name is "BMW"
console.log('quotes2', quotes2);

// ==========================================
// 4. COMMONLY USED ESCAPE SEQUENCES
// ==========================================

// \n - new line
// \t - horizontal tab
// \' - single quote
// \" - double quote
// \\ - backslash

// New line example:
console.log('Hello\nMaria');

// Result:
// Hello
// Maria

// Tab example:
console.log('Name:\tMaria');

// Result: Name:    Maria

// ==========================================
// 5. STRING CONCATENATION (JOINING TEXT)
// ==========================================

// Concatenation means joining
// two or more pieces of text into one.
//
// For this we use the + operator.
//
// When + is used between string values,
// it joins them instead of adding numbers.

// We create two text variables.
const greeting: string = 'Hello';
const firstName: string = 'Maria';

// We join:
// 'Hello' + ', ' + 'Maria' + '!'
//
// Result: Hello, Maria!

console.log('greeting', greeting + ', ' + firstName + '!');

// ==========================================
// 6. STRING INTERPOLATION (TEMPLATE LITERALS)
// ==========================================

// Template Literals let us insert
// variable values directly into text.
//
// We use backticks: ` `
//
// Syntax:
// ${variableName}
//
// TypeScript replaces ${} with the actual value
// of the variable.
//
// This is often more readable than using +.

// firstName has the value 'Maria'.
// ${firstName} will be replaced with Maria.

const userWelcomeMessage: string = `Welcome, ${firstName}`;

// Result: Welcome, Maria
console.log('userWelcomeMessage', userWelcomeMessage);

// ==========================================
// 7. STRING METHODS (METHODS FOR WORKING WITH TEXT)
// ==========================================

// Methods are built-in functionality
// that we can use on a string.
//
// We call them with a dot (.)
//
// For example:
// firstName.charAt(0)
//
// Here charAt() is a string method.
//
// IMPORTANT:
// Strings are immutable - they cannot be changed.
// No string method changes the original string.
// Every method returns a NEW value,
// and the original stays the same.

// ==========================================
// 8. charAt() - GETTING A CHARACTER
// ==========================================

// charAt() returns the character at a given position.
//
// Positions in a string start at 0, not 1.
//
// For example, the word Maria:
//
// Character: M  a  r  i  a
// Index:     0  1  2  3  4
//
// charAt(0) returns the first character: M.

const firstLetter: string = firstName.charAt(0);

// Result: M
console.log('firstLetter', firstLetter);

// ==========================================
// 9. substring() - EXTRACTING PART OF A TEXT
// ==========================================

// substring() returns part of a given string.
//
// Syntax:
// substring(startIndex, endIndex)
//
// The start index is included.
// The end index is NOT included.
//
// For example:
// Maria
// 01234
//
// substring(0, 2) takes the characters
// at positions 0 and 1.
//
// Result: Ma

const firstNameSubstring: string = firstName.substring(0, 2);

// Result: Ma
console.log('firstNameSubstring', firstNameSubstring);

// ==========================================
// 10. length - LENGTH OF A TEXT
// ==========================================

// length returns the length of a given string.
//
// It is a property, not a method.
// That's why we do NOT use parentheses ().
//
// Spaces and punctuation marks
// are counted too.
//
// For example:
// 'Hello, Maria!' contains 13 characters.

const welcomeMessageLength: number = welcomeMessage.length;

// We use a Template Literal to show
// the length of the text in a message.

const lengthMessage: string = `My welcome message length is ${welcomeMessageLength}`;

// Result: My welcome message length is 13
console.log('lengthMessage', lengthMessage);

// ==========================================
// 11. GETTING THE LAST CHARACTER
// ==========================================

// When we don't know in advance how many
// characters the text contains, we can
// use the length property.
//
// Indexes start at 0.
//
// So the last character is
// at position length - 1.
//
// For example:
// 'Maria' has a length of 5.
// The last character is at index 4.

const lastLetterOfWelcomeMessage: string = welcomeMessage[welcomeMessageLength - 1];

// Result: !
console.log('lastLetterOfWelcomeMessage', lastLetterOfWelcomeMessage);

// IMPORTANT:
// If the string is empty, this approach will return
// undefined, because there is no last character.

// ==========================================
// 12. toUpperCase() and toLowerCase()
// ==========================================

// toUpperCase() converts all letters
// to uppercase.
//
// toLowerCase() converts all letters
// to lowercase.
//
// Like all string methods (see section 7),
// they don't change the original string.
// Instead, they return a new text.

// We convert the text to uppercase.
const welcomeMessageUpper: string = welcomeMessage.toUpperCase();

// Result: HELLO, MARIA!
console.log('welcomeMessageUpper', welcomeMessageUpper);

// The original string is unchanged.
// Result: Hello, Maria!
console.log('welcomeMessage', welcomeMessage);

// We convert the text to lowercase.
const welcomeMessageLower: string = welcomeMessage.toLowerCase();

// Result: hello, maria!
console.log('welcomeMessageLower', welcomeMessageLower);

// ==========================================
// 13. trim(), trimStart() and trimEnd()
// ==========================================

// These methods remove whitespace
// from the start and/or end of the text.
//
// trim()      - from both sides
// trimStart() - from the start only
// trimEnd()   - from the end only
//
// Whitespace includes spaces,
// tabs and new lines.

// Text with extra spaces.
const welcomeMessageWithSpaces: string = '   Hello, Maria!   ';

// We remove the spaces from both sides.
const welcomeMessageTrimmed: string = welcomeMessageWithSpaces.trim();

// Result: 'Hello, Maria!'
console.log('welcomeMessageTrimmed', welcomeMessageTrimmed);

// ==========================================
// 14. indexOf() and lastIndexOf()
// ==========================================

// indexOf() searches for text inside another string.
//
// If it finds the text, it returns
// the index of its first occurrence.
//
// If it doesn't find it, it returns -1.
//
// lastIndexOf() searches for the last occurrence.
//
// Indexes start at 0.

// Text: Hello, Maria!
//
// H e l l o ,   M a r i a !
// 0 1 2 3 4 5 6 7 8 9 10 11 12
//
// Maria starts at index 7.

const indexOfMaria: number = welcomeMessage.indexOf('Maria');

// Result: 7
console.log('indexOfMaria', indexOfMaria);

// Example with text that doesn't exist.
const indexOfJohn: number = welcomeMessage.indexOf('John');

// Result: -1
console.log('indexOfJohn', indexOfJohn);

// ==========================================
// 15. search() - SEARCHING IN TEXT
// ==========================================

// search() searches for text or a pattern in a string.
//
// Like indexOf(), it returns the index
// of the first match found.
//
// If there is no match, it returns -1.
//
// The main difference is that search()
// also supports regular expressions (RegExp).
//
// Regular expressions allow
// more complex pattern-based searching.

const searchString: string = 'Hello, Maria!';

// We search for the text Maria.
const searchStringIndex: number = searchString.search('Maria');

// Result: 7
console.log('searchStringIndex', searchStringIndex);

// Example with a regular expression:
// /maria/i
//
// The letter i means the search
// is case-insensitive.

const searchWithRegex: number = searchString.search(/maria/i);

// Result: 7
console.log('searchWithRegex', searchWithRegex);
