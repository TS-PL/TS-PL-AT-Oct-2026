// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-1/boolean.ts
// npx tsx homework/nora-dimitrova/homework-1/boolean.ts


// Part 2 — Booleans (boolean)

// Exercise 6: Check login status
// Step 1: Create a boolean variable called isLoggedIn.
let isLoggedIn: boolean;

// Step 2: If isLoggedIn is true, log "Welcome!".
if (isLoggedIn = true) {
    console.log("Welcome!")
}

// Step 3: If isLoggedIn is false, log "Please log in.".
if (isLoggedIn = false) {
    console.log("Please log in.")
}


// Exercise 7: Check entry permission
// Step 1: Create a boolean variable called hasTicket and set it to true.
const hasTicket: boolean = true;

// Step 2: Create a boolean variable called isAdult and set it to false.
const isAdult: boolean = false;

// Step 3: Create a variable called canEnter that is true only if both hasTicket and isAdult are true.
let canEnter: boolean;

if (hasTicket && !isAdult) {
    canEnter = true;
} else {
    canEnter = false;
}

// Step 4: Log the value of canEnter.
console.log(`The value of canEnter is: ${canEnter}`)
