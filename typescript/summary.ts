// Run the file with the command:
// npx ts-node typescript/summery.ts
// npx tsx typescript/summery.ts

/**
 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 * /

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of the two numbers
 */
function add(a, b) {
  return a + b;
}

/** @type {string} */
let name = 'Ivan';

/** @type {number[]} */
let score = [5, 6, 7];

/** @type {string | null} */
let email = null;

/**
 * Greets a user
 * @param {string} name - The user's name
 * @param {string} [greeting = 'Hello'] greeting - Greeting (optional)
 * @returns {string}
 */
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}`;
}

/**
 * Creates a user
 * @param {Object} user - User data
 * @param {string} user.name - Name
 * @param {number} user.age - Age
 */
function createUser(user) {
  /*...*/
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If b is 0
 * @example
 * divide(10, 2) // 5
 */
function divide(a, b) {
  if (b === 0) throw new Error('Not allowed');
  return a / b;
}

/**
 * Represents a bank account.
 */
export class BankAccount {
  /** Account owner */
  owner: string;
  /** Current balance */
  balance: number;

  /**
   * @param owner - Account owner
   * @param balance - Initial balance (defaults to 0)
   */
  constructor(owner: string, balance: number = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  /**
   * Deposits money.
   * @param amount - Amount
   */
  deposit(amount: number): void {
    this.balance += amount;
  }
}

/** User. */
export interface User {
  /** Unique identifier */
  id: number;
  /** Name */
  name: string;
}

/**
 * Finds a user by ID.
 * @param users - List of users
 * @param id - The ID to search for
 * @returns The found user or null
 */
export function findUser(users: User[], id: number): User | null {
  return users.find((u) => u.id === id) || null;
}
