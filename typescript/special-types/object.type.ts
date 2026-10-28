// Run the file with the command:
// npx ts-node typescript/special-types/object.type.ts
// npx tsx typescript/special-types/object.type.ts

// Object type defined inline
const car: { type: string; model: string; year: number } = {
  type: 'BMW',
  model: 'X5',
  year: 2020,
};

console.log(car); // { type: 'BMW', model: 'X5', year: 2020 }

// Optional property (?): mileage can be omitted
const truck: { type: string; mileage?: number } = {
  type: 'Volvo',

  //mileage // not required
};

console.log(truck); // { type: 'Volvo' }
