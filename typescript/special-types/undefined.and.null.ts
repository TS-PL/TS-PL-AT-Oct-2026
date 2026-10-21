// Run the file with the command:
// npx ts-node typescript/special-types/undefined.and.null.ts
// npx tsx typescript/special-types/undefined.and.null.ts

// undefined -> стойността не е зададена
// null -> умишлено няма стойност

const y: undefined = undefined;

//console.log(y);

const z: null = null;

//console.log(z);

let selectedUser: string | null = 'Alice';

//console.log(typeof selectedUser);

selectedUser = null;

//console.log(typeof selectedUser);

let functionName: string | undefined = 'Hello';

function greet(name?: string) {
  if (name) {
    console.log('name', typeof name);
  }
}

greet('text');

// typeof age -> number | undefined
type User = {
  name: string;
  age?: number;
};

const user1: User = {
  name: 'Ivan',
};

console.log('name', user1.name);
console.log('age', user1.age);

const user2: User = {
  name: 'Maria',
  age: 25,
};

console.log('name', user2.name);
console.log('age', user2.age);

let username: string | null = null;

if (username === null) {
  console.log('Нямаме избран потребител');
} else {
  console.log(username);
}
