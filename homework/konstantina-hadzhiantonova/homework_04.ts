// Exercise 1
// Solution
{
  class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string) {
      this.name = name;
      this.age = 0;
      this.position = '';
    }

    getName(): string {
      return this.name;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  let employee: Employee = new Employee('Ivan Petrov');

  console.log(employee.getName());

  employee.changeName('Maria Ivanova');

  console.log(employee.getName());
}

// Exercise 2
// Solution
{
  interface WithID {
    id: number;
  }

  interface User extends WithID {
    name: string;
    age: number;
  }

  let user: User = {
    id: 1,
    name: 'Georgi Dimitrov',
    age: 29,
  };

  console.log(user);
}

// Exercise 3
// Solution
{
  class CarRental {
    readonly carType: string;
    private costPerDay: number;

    constructor(carType: string, costPerDay: number) {
      this.carType = carType;
      this.costPerDay = costPerDay;
    }

    setCostPerDay(newCost: number): void {
      this.costPerDay = newCost;
    }

    getCostPerDay(): number {
      return this.costPerDay;
    }

    rentCar(days: number): void {
      console.log(`Renting a ${this.carType} for ${days} days will cost: $${this.costPerDay * days}`);
    }
  }

  let hatchback: CarRental = new CarRental('Hatchback', 50);
  let sedan: CarRental = new CarRental('Sedan', 70);
  let suv: CarRental = new CarRental('SUV', 90);

  hatchback.rentCar(3);
  sedan.rentCar(5);
  suv.rentCar(2);

  suv.setCostPerDay(120);

  console.log(`New cost per day for SUV: $${suv.getCostPerDay()}`);

  suv.rentCar(2);
}

// Exercise 4
// Solution
{
  class Furniture {
    type: string;

    constructor(type: string = 'Teakwood') {
      this.type = type;
    }

    changeType(newType: string): void {
      this.type = newType;
    }
  }

  class Chair extends Furniture {
    private readonly legs: number = 4;

    constructor(type?: string) {
      super(type);
    }

    getLegs(): number {
      return this.legs;
    }
  }

  let firstChair: Chair = new Chair();
  let secondChair: Chair = new Chair('Oak');

  console.log(`Chair 1: Type - ${firstChair.type}, Legs - ${firstChair.getLegs()}`);
  console.log(`Chair 2: Type - ${secondChair.type}, Legs - ${secondChair.getLegs()}`);

  firstChair.changeType('Pine');

  console.log(`Chair 1: Type - ${firstChair.type}, Legs - ${firstChair.getLegs()}`);
}

// Exercise 5
// Solution
{
  abstract class Instrument {
    abstract playMusic(): void;
  }

  class Guitar extends Instrument {
    playMusic(): void {
      console.log('The guitar is playing music');
    }
  }

  class Piano extends Instrument {
    playMusic(): void {
      console.log('The piano is playing music');
    }
  }

  let guitar: Guitar = new Guitar();
  let piano: Piano = new Piano();

  guitar.playMusic();
  piano.playMusic();
}

// Exercise 6
// Solution
{
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

  let lion: Carnivore = new Carnivore('Lion');
  let deer: Herbivore = new Herbivore('Deer');
  let mammals: Mammal[] = [lion, deer];

  for (let mammal of mammals) {
    mammal.eat();
  }
}

// Exercise 7
// Solution
function waitTwoSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, 2000);
  });
}

waitTwoSeconds().then((result) => console.log(result));

// Exercise 8
// Solution
{
  async function runTask(): Promise<void> {
    let result: string = await waitTwoSeconds();

    console.log(result);
  }

  runTask();
}

// Exercise 9
// Solution
{
  function fetchUser(): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'Alice' });
      }, 1500);
    });
  }

  async function getUser(): Promise<void> {
    let user = await fetchUser();

    console.log(user.name);
  }

  getUser();
}

// Exercise 10
// Solution
{
  function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject('Something went wrong');
        }
      }, 1000);
    });
  }

  async function runFetch(): Promise<void> {
    try {
      let result: string = await fetchWithError();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  runFetch();
}

// Exercise 11
// Solution
{
  function stepOne(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 1 done');
      }, 1000);
    });
  }

  function stepTwo(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Step 2 done');
      }, 1000);
    });
  }

  async function runSteps(): Promise<void> {
    let firstResult: string = await stepOne();

    console.log(firstResult);

    let secondResult: string = await stepTwo();

    console.log(secondResult);
  }

  runSteps();
}
