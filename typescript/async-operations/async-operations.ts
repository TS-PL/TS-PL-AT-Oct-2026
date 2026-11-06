// Run the file with the command:
// npx ts-node typescript/async-operations/async-operations.ts
// npx tsx typescript/async-operations/async-operations.ts

// ---------------------------------------------------------------------
// EXAMPLE 1: Synchronous code – runs line by line
// ---------------------------------------------------------------------
// JavaScript (and TypeScript) is SINGLE-THREADED – it can do only one thing
// at a time. That's why these three lines ALWAYS run in exactly this
// order: first the first one, then the second, and finally the third.
console.log('Making coffee');
console.log('Drinking coffee');
console.log('Washing the cup');

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

console.log('Start');

// The program "freezes" for 3 seconds (3000 ms).
// Nothing else happens until blockFor finishes.
blockFor(3000);

// This line runs only AFTER the 3 seconds have passed.
console.log('End');

// ---------------------------------------------------------------------
// EXAMPLE 3: Non-blocking code with setTimeout
// ---------------------------------------------------------------------
console.log('Ordering a pizza');

// setTimeout says: "Run this function LATER, after X milliseconds".
// It takes two arguments:
//   1) a function (callback) – what to run;
//   2) a time in milliseconds – how long to wait.
// The program does NOT wait here – it moves on to the next line right away!
setTimeout(() => {
  // This code will run later
  console.log('The pizza has arrived');
}, 0);
// Note: even with 0 ms, the function does NOT run immediately!
// It is put "in a queue" and waits for all the synchronous code to finish.

// This line runs BEFORE 'The pizza has arrived',
// because it is regular (synchronous) code.
console.log('Watching a movie');
// Output: Ordering a pizza → Watching a movie → ... → The pizza has arrived

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
    console.log(`Done: ${name}`);

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
      console.log('All done!');
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
        reject(new Error('No such coffee'));
      } else {
        // Success: we return the text as the result.
        resolve(`Your ${type} is ready`);
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
    console.log('Thank you!');
  });
// Output: No such coffee → Thank you!
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

// ---------------------------------------------------------------------
// EXAMPLE 7: async / await – the modern way to work with Promises
// ---------------------------------------------------------------------
// The async keyword before a function means two things:
//   1) the function ALWAYS returns a Promise – even if we return a plain value;
//   2) inside it we are allowed to use await.
//
// Here we write return 42, but the caller actually gets Promise<number>.
// TypeScript makes us write the return type as Promise<number>, not number.
async function getNumber(): Promise<number> {
  return 42;
}

// await means: wait here until the Promise is ready, then give me its value.
// It pauses only THIS function – the rest of the program keeps running.
// Promise<void> means: the function returns nothing, but it is still async.
async function showNumber(): Promise<void> {
  // Wait for the result of getNumber.
  // Without await, number would be a Promise, not 42!
  const number = await getNumber();

  // Output: 42
  console.log(number);
}

// ---------------------------------------------------------------------
// EXAMPLE 8: .then() vs await – the same thing, written two ways
// ---------------------------------------------------------------------
// Way 1: with .then() – we pass a callback that runs when the value is ready.
getNumber().then((number) => {
  console.log(number); // 42
});

// Way 2: with await – the code reads top to bottom, like synchronous code.
// IMPORTANT: await can be used ONLY inside an async function.
async function example() {
  const number = await getNumber();
  console.log(number); // 42
}

// ---------------------------------------------------------------------
// EXAMPLE 9: delay – a reusable pause built from a Promise
// ---------------------------------------------------------------------
// delay returns a Promise that becomes fulfilled after ms milliseconds.
// setTimeout calls resolve for us when the time is up.
// We don't pass any value to resolve, so the type is Promise<void>.
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
// Usage: await delay(1000); → waits 1 second, then continues.
// Note: in real tests, avoid fixed pauses – wait for a condition instead.

// ---------------------------------------------------------------------
// EXAMPLE 10: Callback hell rewritten with async / await
// ---------------------------------------------------------------------
// This is the same step function from EXAMPLE 4, but WITHOUT a callback.
// Instead of calling next(), the function returns a Promise,
// so whoever calls it can simply await it.
async function stepFn(name: string, ms: number): Promise<void> {
  await delay(ms); // wait ms milliseconds
  console.log(`Done: ${name}`);
}

// Compare with EXAMPLE 4: no nesting, no drift to the right!
// Each await waits for the previous step to finish before starting the next one,
// so the order is guaranteed: Login → Profile → Orders.
async function morningRoutine(): Promise<void> {
  await stepFn('Login', 300);
  await stepFn('Profile', 200);
  await stepFn('Orders', 100);

  console.log('All done!');
}
// Output: Done: Login → Done: Profile → Done: Orders → All done!

// ---------------------------------------------------------------------
// EXAMPLE 11: Sequential vs parallel
// ---------------------------------------------------------------------
// SEQUENTIAL: the second delay starts only AFTER the first one finishes.
// Total time = 1 s + 2 s = about 3 seconds.
// Use it when the next step NEEDS the result of the previous one
// (e.g. log in first, then open the profile).
async function sequential() {
  await delay(1000); // wait 1 second
  await delay(2000); // then wait another 2 seconds
}
// We wait about 3 seconds in total.

// PARALLEL: Promise.all starts ALL Promises at the same time
// and waits until EVERY one of them is finished.
// Total time = the slowest one = about 2 seconds.
// Use it when the tasks do NOT depend on each other
// (e.g. load the products and the categories at the same time).
// IMPORTANT: if even ONE Promise is rejected, Promise.all is rejected too.
async function parallel() {
  await Promise.all([delay(1000), delay(2000)]);
}
// We wait about 2 seconds in total.

// ---------------------------------------------------------------------
// EXAMPLE 12: fetch – getting REAL data from a server (API)
// ---------------------------------------------------------------------
// Until now we only SIMULATED a server with setTimeout.
// fetch sends a real HTTP request over the internet and returns a Promise.
// We use the free test API https://fakestoreapi.com (no login needed).
//
// The Product interface describes what one product from the API looks like.
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

// GET request – read ONE product by its id.
async function getProduct(id: number): Promise<Product> {
  // Step 1: send the request and wait for the response.
  // response contains the status (200, 404, ...) and headers, but NOT the data yet.
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  // IMPORTANT: fetch does NOT throw an error on 404 or 500!
  // It throws only if there is no connection at all.
  // That's why we check response.ok ourselves (true for statuses 200–299).
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  // Step 2: read the body of the response and turn the JSON text into an object.
  // .json() is ALSO async, so we need a second await.
  // The Product type tells TypeScript what shape we EXPECT – it does not check
  // the real data at runtime, so a QA test should still verify the fields.
  const data: Product = await response.json();

  return data;
}
// Try it:
// getProduct(1).then((product) => console.log(product.title));

// GET request – read ALL products and keep only the cheap ones.
async function getCheapProducts(maxPrice: number): Promise<Product[]> {
  const response = await fetch(`https://fakestoreapi.com/products`);

  // Product[] means an array of Product objects.
  const products: Product[] = await response.json();

  // .filter() keeps only the elements for which the function returns true.
  // Here: only the products with price less than or equal to maxPrice.
  return products.filter((product) => {
    return product.price <= maxPrice;
  });
}
// Try it:
// getCheapProducts(20).then((products) => console.log(products.length));

// POST request – SEND new data to the server (create a product).
async function addProduct(title: string, price: number): Promise<Product> {
  // The second argument of fetch is an options object.
  const response = await fetch(`https://fakestoreapi.com/products`, {
    // method – what kind of request this is. The default is GET,
    // so for creating data we must write 'POST' explicitly.
    method: 'POST',

    // headers – extra information about the request.
    // 'Content-Type: application/json' tells the server that we are sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },

    // body – the data we send. The server expects TEXT,
    // so JSON.stringify turns our object into a JSON string.
    // { title, price } is short for { title: title, price: price }.
    body: JSON.stringify({
      title,
      price,
      category: 'electronics',
    }),
  });

  // The server returns the created product (with a new id).
  // We return the Promise from .json() directly – the caller will await it.
  return response.json();
}
// Try it:
// addProduct('Test laptop', 999).then((product) => console.log('addProduct: id:', product.id));
// Note: fakestoreapi is a test API – the product is NOT really saved (well at least when I tested it lately).

// ---------------------------------------------------------------------
// EXAMPLE 13: try / catch / finally with async / await
// ---------------------------------------------------------------------
// With .then() we handle errors with .catch() (see EXAMPLE 5).
// With await we use the familiar try / catch / finally instead.
async function main(): Promise<void> {
  try {
    // If any of these awaits fails, we jump straight to catch.
    const product = await getProduct(1);
    console.log(`Product: ${product.title} – ${product.price} BGN`);

    const cheap = await getCheapProducts(20);
    console.log(cheap);
    console.log(`Cheap products: ${cheap.length}`);
  } catch (error) {
    // error is of type unknown, so we check that it's an Error before using .message.
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`);
    }
  } finally {
    // Runs ALWAYS – on success and on error.
    console.log('Finished with the API requests.');
  }
}

//main();
