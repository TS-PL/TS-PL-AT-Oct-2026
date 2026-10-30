// Run the file with the command:
// npx ts-node typescript/loops/for.in.ts
// npx tsx typescript/loops/for.in.ts

// Syntax:
// for (key in person) {
//   // code block to be executed
// }

// the for in loop iterates over a person object
// each iteration returns a key (x = fname, lname, age)
// the key is used to access the value of the key
// the value of the key is person[x] (John, Doe, 25)

// Example:
const person = { fname: 'John', lname: 'Doe', age: 25 };
let text: string = '';

for (const property in person) {
  text += person[property] + ', '; // person[property] = person.fname, person.lname, person.age
}

// for (const property in person) {
//   console.log(person[property as keyof typeof person]);  - if we have "strict": true in tsconfig.json
// }

console.log(text);

// for/in can also loop over the properties of an Array but only use when index order is NOT important, NOT a good practice, use for of instead
// for (variable in array) {
//   // code block to be executed
// }

// Example:
const numbers: number[] = [45, 4, 9, 16, 25];
let txt = '';

for (const x in numbers) {
  txt += numbers[x] + ', ';
}
console.log(txt);
