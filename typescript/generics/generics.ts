// Run the file with the command:
// npx ts-node typescript/generics/generics.ts
// npx tsx typescript/generics/generics.ts

// 1. Generic function
// Without generics – we lose type information (any = "anything is allowed")
function identityAny(value: any): any {
  return value;
}

// With generics – <T> is a "type variable"
// The input type is preserved in the output
function identity<T>(value: T): T {
  return value;
}

// TypeScript automatically infers the type (type inference)
const num = identity(42); // num is of type number
const text = identity('Здравей'); // text is of type string

// We can also explicitly specify the type
const flag = identity<boolean>(true);

// 2. Generic function with arrays
// Returns the first element of an array of any type
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirst([10, 20, 30]); // number | undefined
const firstName = getFirst(['Мария', 'Петър']); // string | undefined

// 3. Multiple type parameters
// Two "type variables" – K and V
function makePair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const firstPair = makePair('възраст', 25); // [string, number]
const secondPair = makePair(1, true); // [number, boolean]

console.log(firstPair);
console.log(secondPair);

// 4. Generic interface
// Generic interface for a server response
// T describes what kind of data is inside
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

// A response containing a single product
const productResponse: ApiResponse<Product> = {
  success: true,
  data: { id: 1, title: 'Лаптоп', price: 1999 },
  message: 'Успешно',
};

// A response containing an array of strings
const namesResponse: ApiResponse<string[]> = {
  success: true,
  data: ['Анна', 'Георги'],
  message: 'Намерени са 2 имена',
};

// 5. Generic class
// Generic "Box" class that can store any type
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  // Returns the content
  getContent(): T {
    return this.content;
  }

  // Replaces the content – only with the same type!
  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const numberBox = new Box<number>(100);
numberBox.setContent(200); // OK
// numberBox.setContent("текст"); // Error

const stringBox = new Box('Sofia');
console.log(stringBox.getContent().toUpperCase()); // "SOFIA"

// 6. Constraints with extends
// We want T to always have a length property
interface HasLength {
  length: number;
}

// T must "extend" HasLength – i.e. it must have length
function logLength<T extends HasLength>(item: T): T {
  console.log(`Length: ${item.length}`);
  return item;
}

logLength('Здравей'); // string has length
logLength([1, 2, 3]); // arrays have length
logLength({ length: 10 }); // this object has length
// logLength(123);         // Error: number has no length

// 7. keyof: safe access to object properties
// K can ONLY be a property name of T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const student = { name: 'Елена', age: 21, city: 'Пловдив' };

const studentName = getProperty(student, 'name'); // string
const studentAge = getProperty(student, 'age'); // number
// getProperty(student, "salary"); // Error

// 8. Default type parameter
// If we don't specify a type, T defaults to string
interface Message<T = string> {
  from: string;
  content: T;
}

const simpleMsg: Message = { from: 'Иво', content: 'Здрасти!' }; // T = string
const numberMsg: Message<number> = { from: 'Система', content: 404 };

// 9. Built-in generics you already use
// Array<T> – the same as T[]
const scores: Array<number> = [95, 87, 100];

// Promise<T> – a promise that will resolve to a value of type T
async function fetchUserName(): Promise<string> {
  return 'Николай';
}

// Partial<T> – makes all properties optional
interface Settings {
  theme: string;
  language: string;
  notifications: boolean;
}

function updateSettings(changes: Partial<Settings>): void {
  console.log('Changes:', changes);
}

updateSettings({ theme: 'dark' }); // No need to pass everything

// Record<K, V> – an object with keys of type K and values of type V
const grades: Record<string, number> = {
  Математика: 6,
  История: 5,
};

// Readonly<T> – properties cannot be changed
const config: Readonly<Settings> = {
  theme: 'light',
  language: 'bg',
  notifications: true,
};
// config.theme = "dark"; // Error: read-only
