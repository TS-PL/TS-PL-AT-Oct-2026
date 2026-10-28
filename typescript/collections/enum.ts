// Run the file with the command:
// npx ts-node typescript/collections/enum.ts
// npx tsx typescript/collections/enum.ts

// Numeric enum: values auto-increment from 1
enum CardinalDirections {
  North = 1, // 1
  South, // 2
  East, // 3
  West, // 4
}

console.log(CardinalDirections.North); // 1
console.log(CardinalDirections.South); // 2
console.log(CardinalDirections.East); // 3
console.log(CardinalDirections.West); // 4

// Enum used as a type
const currentDirection: CardinalDirections = CardinalDirections.North;

console.log(currentDirection); // 1

// Numeric enum with custom values
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Unauthorized = 401,
  Accepted = 202,
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200

// String enum: each member needs a value
enum CardinalDirections2 {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

console.log(CardinalDirections2.North); // "North"
console.log(CardinalDirections2.South); // "South"
console.log(CardinalDirections2.East); // "East"
console.log(CardinalDirections2.West); // "West"

let direction = 'North'; // type is string
direction = 'Norrth'; // typo not caught

direction = CardinalDirections2.North; // enum prevents typos
