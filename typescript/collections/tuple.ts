// Run the file with the command:
// npx ts-node typescript/collections/tuple.ts
// npx tsx typescript/collections/tuple.ts

// Tuple: typed array with fixed length and a type per index
const ourTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2]);
console.log(ourTuple);

// Error: wrong order of types
// const ourTuple2: [number, boolean, string] = [false, "Coding God was mistaken", 5];
// console.log(ourTuple2);

// No type safety for index 3+ (push is allowed)
// ourTuple.push("Something new and wrong");
// console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2], typeof ourTuple[3]);
// console.log(ourTuple[3]);
// console.log(ourTuple);

// Readonly tuple: cannot be modified
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off'); // error
console.log(ourReadonlyTuple);

// Named tuple: labels add context
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

// Destructuring a tuple
const vehicles: [string, string, string] = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
// Same as:
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

console.log(vehicles);
console.log(car, truck, suv);

// Function returning a tuple
function getUserInfo(): [string, number] {
  return ['Alice', 30];
}

// Destructure the returned tuple
const [name, age] = getUserInfo();

console.log(`Name: ${name}, Age: ${age}`); // Name: Alice, Age: 30

// Optional element (?)
let secondCar: [string, number?] = ['Honda'];

console.log(secondCar); // ['Honda']

// Tuple as a function parameter
function printUser(user: [string, number]) {
  console.log(`User: ${user[0]}, Age: ${user[1]}`);
}

printUser(['Bob', 25]); // User: Bob, Age: 25

// Enum: values start from 0
enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}

// Tuple with an enum value
const person: [string, Role] = ['Alice', Role.Admin];

console.log(person.length); // 2

// map() returns number[], not a tuple
let tuple: [number, number] = [1, 2];
let result = tuple.map((num) => num + 2);

console.log(result); // [3, 4]

// Nested tuple
let nestedTuple: [number, [string, boolean]] = [42, ['Hello', true]];

console.log(nestedTuple); // [42, ['Hello', true]]

// Named tuple type alias
type Point = [x: number, y: number];

let p: Point = [10, 20];

console.log(p); // [10, 20]
