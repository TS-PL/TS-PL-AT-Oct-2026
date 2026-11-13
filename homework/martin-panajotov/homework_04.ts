// Homework 04

// ============================================================
// Part 1: OOP
// ============================================================

// Exercise 1 - Employee Info System (Class Basics)
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string) {
    this.name = name;
    this.age = 0;
    this.position = "";
  }

  getName(): string {
    return this.name;
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

const employee = new Employee("Ivan");
console.log("Ex1:", employee.getName());
employee.changeName("Maria");
console.log("Ex1:", employee.getName());

// Exercise 2 - User ID System
interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user: User = { id: 1, name: "Alice", age: 30 };
console.log("Ex2:", user);

// Exercise 3 - Car Rental Service
class CarRental {
  readonly carType: string;
  private costPerDay: number;

  constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  setCostPerDay(cost: number): void {
    this.costPerDay = cost;
  }

  getCostPerDay(): number {
    return this.costPerDay;
  }

  rentCar(days: number): void {
    const total = this.costPerDay * days;
    console.log(`Renting a ${this.carType} for ${days} days will cost: $${total}`);
  }
}

const hatchback = new CarRental("Hatchback", 50);
const sedan = new CarRental("Sedan", 70);
const suv = new CarRental("SUV", 100);

hatchback.rentCar(3);
sedan.rentCar(2);
suv.rentCar(5);

sedan.setCostPerDay(80);
sedan.rentCar(2);

// Exercise 4 - Furniture Factory
class Furniture {
  type: string = "Teakwood";
}

class Chair extends Furniture {
  private readonly legs: number = 4;

  constructor(type?: string) {
    super();
    if (type) {
      this.type = type;
    }
  }

  describe(): string {
    return `Type - ${this.type}, Legs - ${this.legs}`;
  }
}

const chair1 = new Chair();
console.log("Chair 1:", chair1.describe());

const chair2 = new Chair("Oak");
console.log("Chair 2:", chair2.describe());

//Exercise 5 - Music Instruments
abstract class Instrument {
  abstract playMusic(): void;
}

class Guitar extends Instrument {
  playMusic(): void {
    console.log("Guitar is playing music");
  }
}

class Piano extends Instrument {
  playMusic(): void {
    console.log("Piano is playing music");
  }
}

const guitar = new Guitar();
const piano = new Piano();
guitar.playMusic();
piano.playMusic();

//  Exercise 6 - Animal Kingdom
class Mammal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} eats food`);
  }
}

class Carnivore extends Mammal {
  eat(): void {
    console.log(`${this.name} is a carnivore and eats meat`);
  }
}

class Herbivore extends Mammal {
  eat(): void {
    console.log(`${this.name} is a herbivore and eats plants`);
  }
}

const lion = new Carnivore("Lion");
const cow = new Herbivore("Cow");
lion.eat();
cow.eat();

// ============================================================
// Part 2: Asynchronous Operations and Error Handling
// ============================================================

//Exercise 7 - Basic Promise with setTimeout
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done waiting!"), 2000);
  });
}

waitTwoSeconds().then((result) => console.log("Ex7:", result));

// Exercise 8 - async/await
async function runTask(): Promise<void> {
  const result = await waitTwoSeconds();
  console.log("Ex8:", result);
}

runTask();

//Exercise 9 - Simulating API Call
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1500);
  });
}

async function loadUser(): Promise<void> {
  const user = await fetchUser();
  console.log("Ex9:", user.name);
}

loadUser();

//  Exercise 10 - Error Handling 
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success!");
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
}

async function callWithError(): Promise<void> {
  try {
    const message = await fetchWithError();
    console.log("Ex10:", message);
  } catch (error) {
    console.log("Ex10:", error);
  }
}

callWithError();

//  Exercise 11 - Sequential Async Tasks 
function stepOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function stepTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

async function runSteps(): Promise<void> {
  const first = await stepOne();
  console.log("Ex11:", first);

  const second = await stepTwo();
  console.log("Ex11:", second);
}

runSteps();