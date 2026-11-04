// Run the file with the command:
// npx ts-node typescript/async-operations/async-operations.ts
// npx tsx typescript/async-operations/async-operations.ts

// ---------------------------------------------------------------------
// EXAMPLE 1: Synchronous code – runs line by line
// ---------------------------------------------------------------------
// JavaScript (and TypeScript) is SINGLE-THREADED – it can do only one thing
// at a time. That's why these three lines ALWAYS run in exactly this
// order: first the first one, then the second, and finally the third.
console.log('Правя си кафе');
console.log('Пия кафе');
console.log('Мия чашата');

// ---------------------------------------------------------------------
// EXAMPLE 2: Blocking code – the program "freezes"
// ---------------------------------------------------------------------
// The blockFor function takes a number of milliseconds (ms) and returns NOTHING (void).
// 1000 milliseconds = 1 second.
function blockFor(ms: number): void {
  // Date.now() returns the current time in milliseconds.
  // We calculate the moment when we should stop waiting.
  const end = Date.now() + ms;

  // The loop runs again and again until we reach the "end" moment.
  // This is called "busy waiting".
  while (Date.now() < end) {
    // The process is busy waiting here
    // IMPORTANT: while the loop is running, NOTHING else can run –
    // no other code, no timers, no clicks in the browser.
  }
}

console.log('Начало');

// The program "freezes" for 3 seconds (3000 ms).
// Nothing else happens until blockFor finishes.
blockFor(3000);

// This line runs only AFTER the 3 seconds have passed.
console.log('Край');

// ---------------------------------------------------------------------
// EXAMPLE 3: Non-blocking code with setTimeout
// ---------------------------------------------------------------------
console.log('Поръчвам си пица');

// setTimeout says: "Run this function LATER, after X milliseconds".
// It takes two arguments:
//   1) a function (callback) – what to run;
//   2) a time in milliseconds – how long to wait.
// The program does NOT wait here – it moves on to the next line right away!
setTimeout(() => {
  // This code will run later
  console.log('Пицата пристигна');
}, 0);
// Note: even with 0 ms, the function does NOT run immediately!
// It is put "in a queue" and waits for all the synchronous code to finish.

// This line runs BEFORE 'Пицата пристигна',
// because it is regular (synchronous) code.
console.log('Гледам филм');
// Output: Поръчвам си пица → Гледам филм → ... → Пицата пристигна

// ---------------------------------------------------------------------
// EXAMPLE 4: Callback hell – "a hell of nested functions"
// ---------------------------------------------------------------------
// Callback = a function we pass to another function
// so it can be called later ("call me back when you're ready").
//
// The step function takes:
//   name – the name of the step (text);
//   ms   – how many milliseconds the step "takes";
//   next – a callback function that will be called when the step finishes.
//          The type () => void means: a function with no parameters that returns nothing.
function step(name: string, ms: number, next: () => void): void {
  setTimeout(() => {
    // Backticks ` ` let us insert a value with ${...}
    console.log(`Готово: ${name}`);

    // The step is done – call the next one.
    next();
  }, ms);
}

// Each step depends on the previous one: first Login,
// then Profile, then Orders.
// That's why each next step is NESTED inside the previous one.
// Notice how the code "drifts" to the right – this is called "callback hell".
// With 10 steps the code becomes very hard to read and maintain.
// The solution is Promises and async/await (see the next examples).
step('Login', 300, () => {
  step('Profile', 200, () => {
    step('Orders', 100, () => {
      console.log('Всичко е готово!');
    });
  });
});

// ---------------------------------------------------------------------
// EXAMPLE 5: Promise – a "promise" of a value in the future
// ---------------------------------------------------------------------
// A Promise is like a receipt at a café: you don't have the coffee yet,
// but you have a "promise" that you'll get it (or be told they're out of it).
//
// A Promise has 3 states:
//   pending   – waiting (the coffee is being made);
//   fulfilled – success (the coffee is ready) → resolve is called;
//   rejected  – failure (no such coffee) → reject is called.
//
// Promise<string> means: "I promise that in the end I'll return text (a string)".
function orderCoffee(type: string): Promise<string> {
  // We create a new Promise. It receives a function with two parameters:
  //   resolve – we call it on SUCCESS and pass the result;
  //   reject  – we call it on ERROR and pass the error.
  return new Promise((resolve, reject) => {
    // We simulate that making the coffee takes 500 ms (half a second).
    setTimeout(() => {
      if (type === 'decaf') {
        // Failure: we create an error object with a descriptive message.
        reject(new Error('Няма такова кафе'));
      } else {
        // Success: we return the text as the result.
        resolve(`Твоето ${type} е готово`);
      }
    }, 500);
  });
}

// We use the Promise with a chain of methods:
orderCoffee('decaf')
  // .then(...) runs ONLY on success (resolve).
  // message is the value passed to resolve.
  .then((message) => {
    console.log(message);
  })
  // .catch(...) runs ONLY on error (reject).
  // error is the object passed to reject; .message is the text of the error.
  // Here catch will run, because we ordered 'decaf'.
  .catch((error) => {
    console.log(error.message);
  })
  // .finally(...) ALWAYS runs – both on success and on error.
  // Useful for "cleaning up" (e.g. hiding a loading indicator).
  .finally(() => {
    console.log('Благодаря!');
  });
// Output: Няма такова кафе → Благодаря!
// Try it: replace 'decaf' with 'latte' and see what gets printed.

// ---------------------------------------------------------------------
// EXAMPLE 6: A typed Promise (interface)
// ---------------------------------------------------------------------
// An interface describes the "shape" of an object – which fields it has and their types.
// Every user (User) must have:
//   id   – a number;
//   name – text.
interface User {
  id: number;
  name: string;
}

// Promise<User> means: "I promise that in the end I'll return an object of type User".
// This way TypeScript knows exactly what data we'll get and helps us with hints
// and error checking (e.g. if we type user.nme instead of user.name).
function getUser(id: number): Promise<User> {
  // We only use resolve here, because there is no error in this example.
  return new Promise((resolve) => {
    // We simulate a request to a server that takes 500 ms.
    setTimeout(() => {
      // We return an object that matches the User interface.
      resolve({
        id: id,
        name: 'Maria',
      });
    }, 500);
  });
}

// We call getUser with id = 2 and, when the data "arrives",
// we print it. user is automatically of type User.
getUser(2).then((user) => console.log(user));
// Output: { id: 2, name: 'Maria' }
