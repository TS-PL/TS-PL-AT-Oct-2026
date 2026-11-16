// Homework 04

// Part 1: OOP

// Exercise 1 - Employee Info System (Class Basics)
// Step 1: Define a class named "Employee":
class Employee {

  // Properties - name: string, age: number, position: string
  public name: string;
  public age: number = 0;
  public position: string = '';

  // Constructor - requires a parameter name: string
  public constructor(name: string) {
    this.name = name;
  }

  // Methods - getName(): string
  public getName(): string {
    return this.name;
  }

  // Methods - changeName(newName: string): void
  public changeName(newName: string): void {
    this.name = newName;
  }
}

// Step 2: Create an object of the class Employee.
const employee = new Employee('Petar');

// Step 3: Call the method getName() and print the result to the console.
console.log(employee.getName());

// Step 4: Call the method changeName() and pass a new name as a parameter.
employee.changeName('Ivan');

// Step 5: Call the method getName() and print the result to the console.
console.log(employee.getName());

// Exercise 2 - User ID System (Interface Basics)
// Step 1: Define an interface named "WithID" with a property id: number.
interface WithID {
  id: number;
}

// Step 2: Define an interface named "User" that inherits from the "WithID" interface and adds properties name: string, age: number.
interface User extends WithID {
  name: string;
  age: number;
}

// Step 3: Create an object of the interface User and assign values to all properties.
const user: User = {
  id: 1,
  name: 'Petar',
  age: 25,
};

// Step 4: Print the object to the console.
console.log(user);

// Exercise 3 - Car Rental Service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay, and methods setCostPerDay, getCostPerDay, rentCar, and a constructor that sets the two properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The value of the carType property should not be changeable.
class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  public constructor(carType: string, costPerDay: number) {
    this.carType = carType;
    this.costPerDay = costPerDay;
  }

  public setCostPerDay(costPerDay: number): void {
    this.costPerDay = costPerDay;
  }

  public getCostPerDay(): number {
    return this.costPerDay;
  }

  public rentCar(days: number): void {
    const totalCost: number = this.costPerDay * days;
    console.log('Renting a ' + this.carType + ' for ' + days + ' days will cost: $' + totalCost);
  }
}

// Step 3: Create three objects of the class CarRental with different car types and costs, for example: Hatchback, Sedan, SUV.
const hatchback = new CarRental('Hatchback', 50);
const sedan = new CarRental('Sedan', 70);
const suv = new CarRental('SUV', 100);

// Step 4: Print the car rental details in the console by calling the method rentCar() for each object with a different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
hatchback.rentCar(3);
sedan.rentCar(2);
suv.rentCar(5);

// Step 5: Change the costPerDay for one of the car types and print the new rental details in the console.
hatchback.setCostPerDay(60);
console.log('New cost per day:', hatchback.getCostPerDay());
hatchback.rentCar(3);

// Exercise 4 - Furniture Factory (Inheritance)
class Furniture {
  public type: string;

  public constructor(type: string = 'Teakwood') {
    this.type = type;
  }
}

// Step 1: Create a class called "Chair" that inherits from the base class "Furniture".
class Chair extends Furniture {

  // Step 2: "Teakwood" should be the default type of furniture used by all furniture.
  // Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
  public constructor(type: string = 'Teakwood') {
    super(type);
  }

  // Step 4: The number of legs of a chair should be a property that cannot be altered outside the class.
  public readonly legs: number = 4;
}

// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
const chair1 = new Chair();
console.log('Chair 1: Type - ' + chair1.type + ', Legs - ' + chair1.legs);

// Step 6: Create another object of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"
const chair2 = new Chair('Oak');
console.log('Chair 2: Type - ' + chair2.type + ', Legs - ' + chair2.legs);

// Exercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "Instrument" with a method "playMusic".
abstract class Instrument {
  public abstract playMusic(): void;
}

// Step 2: Create two subclasses, "Guitar" and "Piano", that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
class Guitar extends Instrument {
  public playMusic(): void {
    console.log('The guitar is playing music');
  }
}

class Piano extends Instrument {
  public playMusic(): void {
    console.log('The piano is playing music');
  }
}

// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.
const guitar = new Guitar();
const piano = new Piano();

guitar.playMusic();
piano.playMusic();

// Exercise 6 - Animal Kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
class Mammal {
  public name: string;

  // Constructor that takes a name parameter and assigns it to a property called name.
  public constructor(name: string) {
    this.name = name;
  }

  // Method "eat" that logs "{name} eats food".
  public eat(): void {
    console.log(this.name + ' eats food');
  }
}

// Step 2: Create two subclasses, "Carnivore" and "Herbivore", that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{name} is a carnivore and eats meat" or "{name} is a herbivore and eats plants".
class Carnivore extends Mammal {
  public override eat(): void {
    console.log(this.name + ' is a carnivore and eats meat');
  }
}

class Herbivore extends Mammal {
  public override eat(): void {
    console.log(this.name + ' is a herbivore and eats plants');
  }
}

// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.
const lion = new Carnivore('Lion');
const deer = new Herbivore('Deer');

lion.eat();
deer.eat();

// Part 2: Asynchronous Operations and Error Handling

// Exercise 7 - Basic Promise with setTimeout
// Step 1: Create a function named "waitTwoSeconds".
// Step 2: Make the function return a Promise<string>.
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {

    // Step 3: Inside the Promise, use setTimeout to delay for 2000 milliseconds.
    setTimeout(() => {

      // Step 4: After the delay, resolve the Promise with the message "Done waiting!".
      resolve('Done waiting!');
    }, 2000);
  });
}

// Step 5: Call the function and log the result using .then().
waitTwoSeconds().then((result) => {
  console.log(result);
});

// Exercise 8 - Using async/await
// Step 1: Use the "waitTwoSeconds" function from Exercise 1.
// Step 2: Create an async function named "runTask".
async function runTask(): Promise<void> {

  // Step 3: Inside the function, use await to wait for "waitTwoSeconds".
  // Step 4: Store the result in a variable.
  const result = await waitTwoSeconds();

  // Step 5: Print the result to the console.
  console.log(result);
}

// Step 6: Call the "runTask" function.
runTask();

// Exercise 9 - Simulating API Call
// Step 1: Create a function named "fetchUser".
// Step 2: Make it return a Promise with type { id: number; name: string }.
function fetchUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {

    // Step 3: Use setTimeout to delay execution for 1500 milliseconds.
    setTimeout(() => {

      // Step 4: Resolve the Promise with an object: { id: 1, name: "Alice" }.
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

// Step 5: Create an async function to call "fetchUser".
async function printUserName(): Promise<void> {

  // Step 6: Use await to get the result.
  const fetchedUser = await fetchUser();

  // Step 7: Print the user's name to the console.
  console.log(fetchedUser.name);
}

printUserName();

// Exercise 10 - Error Handling with async/await
// Step 1: Create a function named "fetchWithError".
// Step 2: Make it return a Promise<string>.
function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {

    // Step 3: Use setTimeout with a delay of 1000 milliseconds.
    setTimeout(() => {

      // Step 4: Inside setTimeout, randomly decide:
      //         - Resolve with "Success!" OR
      //         - Reject with "Something went wrong".
      if (Math.random() >= 0.5) {
        resolve('Success!');
      } else {
        reject('Something went wrong');
      }
    }, 1000);
  });
}

// Step 5: Create an async function to call "fetchWithError".
async function runWithError(): Promise<void> {

  // Step 6: Use try/catch to handle the result.
  try {
    const result = await fetchWithError();

    // Step 7: Print the success message if resolved.
    console.log(result);
  } catch (error) {

    // Step 8: Print the error message if rejected.
    console.log(error);
  }
}

runWithError();

// Exercise 11 - Sequential Async Tasks
// Step 1: Create a function named "stepOne" that returns a Promise<string>.
function stepOne(): Promise<string> {

  // Step 2: Inside it, use setTimeout to resolve "Step 1 done" after 1000 ms.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 1 done');
    }, 1000);
  });
}

// Step 3: Create another function named "stepTwo" that returns a Promise<string>.
function stepTwo(): Promise<string> {

  // Step 4: Inside it, use setTimeout to resolve "Step 2 done" after 1000 ms.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Step 2 done');
    }, 1000);
  });
}

// Step 5: Create an async function named "runSteps".
async function runSteps(): Promise<void> {

  // Step 6: Use await to call "stepOne" and store the result.
  const firstResult = await stepOne();

  // Step 7: Print the result.
  console.log(firstResult);

  // Step 8: Use await to call "stepTwo" and store the result.
  const secondResult = await stepTwo();

  // Step 9: Print the result.
  console.log(secondResult);
}

// Step 10: Call the "runSteps" function.
runSteps();
