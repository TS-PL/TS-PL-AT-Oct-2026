// Homework 02

// This line makes the file a module, so the variable names
export {};

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
let isMale: boolean = true;
if (isMale) {
  console.log("The person is male.");
} else {
  console.log("The person is female.");
}

// Exercise 2: Check if a number is between two other numbers
const firstNumber: number = 5;
const secondNumber: number = 1;
const thirdNumber: number = 10;
if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
const sortA: number = 7;
const sortB: number = 3;
const sortC: number = 5;
if (sortA <= sortB && sortB <= sortC) {
  console.log(sortA, sortB, sortC);
} else if (sortA <= sortC && sortC <= sortB) {
  console.log(sortA, sortC, sortB);
} else if (sortB <= sortA && sortA <= sortC) {
  console.log(sortB, sortA, sortC);
} else if (sortB <= sortC && sortC <= sortA) {
  console.log(sortB, sortC, sortA);
} else if (sortC <= sortA && sortA <= sortB) {
  console.log(sortC, sortA, sortB);
} else {
  console.log(sortC, sortB, sortA);
}

// Exercise 4: Check if a string has more than 10 characters
const longText: string = "Hello TypeScript";
if (longText.length > 10) {
  console.log("The string has more than 10 characters.");
} else {
  console.log("The string has 10 characters or less.");
}

// Exercise 5: Check if a string contains the letter 'B'
const threeCharString: string = "ABC";
if (threeCharString.includes("B")) {
  console.log(`The string ${threeCharString} contains the letter 'B'`);
} else {
  console.log(`The string ${threeCharString} does NOT contain the letter 'B'`);
}

// Exercise 6: Check if a client will be allowed in a karting competition
const clientAge: number = 25;
const bestLapTime: number = 55.4;
if (clientAge >= 18 && clientAge < 65 && bestLapTime < 60) {
  console.log(`Age: ${clientAge}, best lap time: ${bestLapTime}. The client is allowed to compete.`);
} else {
  console.log(`Age: ${clientAge}, best lap time: ${bestLapTime}. The client is NOT allowed to compete.`);
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
const fruits: string[] = ["apple", "banana", "cherry"];
const upperFruits: string[] = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// Exercise 8: Filter Long Words (filter)
const words: string[] = ["cat", "elephant", "dog", "giraffe", "bird", "crocodile"];
const longWords: string[] = words.filter((word) => word.length > 5);
console.log(longWords);

// Exercise 9: Find Maximum Number (reduce)
const numbersForMax: number[] = [4, 18, 7, 25, 12];
const maxNumber: number = numbersForMax.reduce((max, current) => {
  if (current > max) {
    return current;
  }
  return max;
}, numbersForMax[0]);
console.log(maxNumber);

// Exercise 10: Calculate Total Price (map + reduce)
type Item = {
  name: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  { name: "Book", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Notebook", price: 4, quantity: 3 },
];
const itemTotals: number[] = items.map((item) => item.price * item.quantity);
const totalPrice: number = itemTotals.reduce((sum, current) => sum + current, 0);
console.log(totalPrice);

// Exercise 11: Get Unique Values (reduce)
const numbersWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers: number[] = numbersWithDuplicates.reduce((result: number[], current) => {
  if (!result.includes(current)) {
    result.push(current);
  }
  return result;
}, []);
console.log(uniqueNumbers);

// Exercise 12: Filter + Transform Users (filter + map - advanced)
type User = {
  name: string;
  age: number;
};

const userList: User[] = [
  { name: "Ivan", age: 25 },
  { name: "Maria", age: 17 },
  { name: "Petar", age: 30 },
  { name: "Ana", age: 15 },
];
// Keep only users over 18, then take only their names
const adultUsers: User[] = userList.filter((user) => user.age > 18);
const adultNames: string[] = adultUsers.map((user) => user.name);
console.log(adultNames);

// Optional Exercises - (Intermediate Level)

// Exercise 13: Remove duplicate numbers from an array
const duplicateNumbers: number[] = [10, 20, 10, 30, 40];
const noDuplicates: number[] = duplicateNumbers.filter(
  (number, index) => duplicateNumbers.indexOf(number) === index
);
console.log(noDuplicates);

// Exercise 14: Find the difference between two arrays
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [3, 4, 5];
const onlyInArr1: number[] = arr1.filter((number) => !arr2.includes(number));
const onlyInArr2: number[] = arr2.filter((number) => !arr1.includes(number));
const difference: number[] = [...onlyInArr1, ...onlyInArr2];
console.log(difference);

// Exercise 15: Find the union of two arrays
const unionArr1: number[] = [1, 2, 3, 4];
const unionArr2: number[] = [3, 4, 5];
const combined: number[] = [...unionArr1, ...unionArr2];
const union: number[] = combined.filter((number, index) => combined.indexOf(number) === index);
console.log(union);

// Exercise 16: Count occurrences of each element
const fruitList: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counts: Record<string, number> = {};
for (const fruit of fruitList) {
  counts[fruit] = (counts[fruit] || 0) + 1;
}
console.log(counts);

// Exercise 17: Find the intersection of two arrays
const intersectionArr1: number[] = [1, 2, 3, 4, 5];
const intersectionArr2: number[] = [4, 5, 6, 7];
const intersection: number[] = intersectionArr1.filter((number) =>
  intersectionArr2.includes(number)
);
console.log(intersection);

// Exercise 18: Flatten a nested array
const nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];

function flatten(arr: any[]): number[] {
  const result: number[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // If the item is an array, flatten it too and add its numbers
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const flattened: number[] = flatten(nestedArray);
console.log(flattened);

// Exercise 19: Split an array into chunks
const numbersToChunk: number[] = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr: number[], size: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunk(numbersToChunk, 3));

// Exercise 20: Find the second largest number
const numbersForSecond: number[] = [12, 45, 7, 45, 23, 8];
let largestSoFar: number = -Infinity;
let secondSoFar: number = -Infinity;
for (const number of numbersForSecond) {
  if (number > largestSoFar) {
    secondSoFar = largestSoFar;
    largestSoFar = number;
  } else if (number > secondSoFar && number < largestSoFar) {
    secondSoFar = number;
  }
}
const secondLargest: number = secondSoFar;
console.log(secondLargest);

// Exercise 21: Group objects by a property
interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: "Ana", grade: 5 },
  { name: "Ivan", grade: 6 },
  { name: "Maria", grade: 5 },
  { name: "Petar", grade: 4 },
];

const grouped: Record<number, string[]> = {};
for (const student of students) {
  if (!grouped[student.grade]) {
    grouped[student.grade] = [];
  }
  grouped[student.grade].push(student.name);
}
console.log(grouped);

// Exercise 22: Sort objects by multiple fields
// I copy the array with [...students], so the original stays the same
const sortedStudents: Student[] = [...students].sort((student1, student2) => {
  if (student1.grade !== student2.grade) {
    return student2.grade - student1.grade;
  }
  return student1.name.localeCompare(student2.name);
});
console.log(sortedStudents.map((student) => student.name));

// Exercise 23: Rotate an array
const numbersToRotate: number[] = [1, 2, 3, 4, 5];

function rotate(arr: number[], k: number): number[] {
  if (arr.length === 0) {
    return arr;
  }
  const steps = k % arr.length;
  const lastPart = arr.slice(arr.length - steps);
  const firstPart = arr.slice(0, arr.length - steps);
  return [...lastPart, ...firstPart];
}

console.log(rotate(numbersToRotate, 2));

// Exercise 24: Use a tuple to return min and max
const numbersForMinMax: number[] = [8, 3, 15, 1, 9];

function minMax(arr: number[]): [min: number, max: number] {
  let smallest = arr[0];
  let biggest = arr[0];
  for (const number of arr) {
    if (number < smallest) {
      smallest = number;
    }
    if (number > biggest) {
      biggest = number;
    }
  }
  return [smallest, biggest];
}

const [min, max] = minMax(numbersForMinMax);
console.log(`Min: ${min}, Max: ${max}`);

// Exercise 25: Filter by an enum value
enum Status {
  Active,
  Inactive,
  Pending,
}

// I named it StatusUser, because the name User is already used in Exercise 12
interface StatusUser {
  name: string;
  status: Status;
}

const statusUsers: StatusUser[] = [
  { name: "Ivan", status: Status.Active },
  { name: "Maria", status: Status.Inactive },
  { name: "Petar", status: Status.Active },
  { name: "Ana", status: Status.Pending },
  { name: "Georgi", status: Status.Inactive },
];

function getUsersByStatus(users: StatusUser[], status: Status): string[] {
  const names: string[] = [];
  for (const user of users) {
    if (user.status === status) {
      names.push(user.name);
    }
  }
  return names;
}

console.log(getUsersByStatus(statusUsers, Status.Active));