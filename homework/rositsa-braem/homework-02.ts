// Homework 02

// Part 1: Conditional Statements

// Exercise 1: Use a boolean as an if/else condition
{
  const isFemale: boolean = true;

  if (isFemale) {
    console.log('The person is female');
  } else {
    console.log('The person is male');
  }
}
// Exercise 2: Check if a number is between two other numbers
{
  const first: number = 20;
  const second: number = 30;
  const third: number = 50;

  if (first > second && first < third) {
    console.log(`The number ${first} is between ${second} and ${third}`);
  } else {
    console.log(`The number ${first} is NOT between ${second} and ${third}`);
  }
}

// Exercise 3: Multiple number comparison
{
  const a: number = 4;
  const b: number = 8;
  const c: number = 3;

  if (a <= b && a <= c) {
    if (b <= c) {
      console.log(a, b, c);
    } else {
      console.log(a, c, b);
    }
  } else if (b <= a && b <= c) {
    if (a <= c) {
      console.log(b, a, c);
    } else {
      console.log(b, c, a);
    }
  } else {
    if (a <= b) {
      console.log(c, a, b);
    } else {
      console.log(c, b, a);
    }
  }
}

// Exercise 4: Check if a string has more than 10 characters
{
  const text: string = 'TypeScript is fun';

  if (text.length > 10) {
    console.log('The string has more than 10 characters');
  } else {
    console.log('The string has 10 or less characters');
  }
}

// Exercise 5: Check if a string contains the letter 'B'
{
  const str: string = 'BOX';

  if (str.includes('B')) {
    console.log(`The string ${str} contains the letter 'B'`);
  } else {
    console.log(`The string ${str} does NOT contain the letter 'B'`);
  }
}

// Exercise 6: Check if a client will be allowed in a karting competition.
{
  const age: number = 32;
  const bestLapTime: number = 59.3;

  console.log(`Age: ${age}`);
  console.log(`Best lap time: ${bestLapTime}`);

  if (age >= 18 && age < 65 && bestLapTime < 60) {
    console.log('The client is allowed to compete');
  } else {
    console.log('The client is NOT allowed to compete');
  }
}

// Part 2: Map, Filter, Reduce

// Exercise 7: Convert Strings to Uppercase (map)
{
  const words: string[] = ['raspberry', 'mango', 'kiwi'];
  const upperWords: string[] = words.map((word) => word.toUpperCase());

  console.log(upperWords);
}

// Exercise 8: Filter Long Words (filter)
{
  const words: string[] = ['fig', 'banana', 'lime', 'pineapple', 'grape', 'strawberry'];
  const longWords: string[] = words.filter((word) => word.length > 5);

  console.log(longWords);
}

// Exercise 9: Find Maximum Number (reduce)
{
  const numbers: number[] = [11, 93, 37, 5, 48];
  const max: number = numbers.reduce((acc, num) => (num > acc ? num : acc));

  console.log(max);
}

// Exercise 10: Calculate Total Price (map + reduce)
{
  type Item = {
    name: string;
    price: number;
    quantity: number;
  };

  const items: Item[] = [
    { name: 'Coffee', price: 6, quantity: 2 },
    { name: 'Milk', price: 1.5, quantity: 1 },
    { name: 'Apples', price: 0.8, quantity: 5 },
  ];

  const total: number = items
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0);

  console.log(total);
}

// Exercise 11: Get Unique Values (reduce)
{
  const numbers: number[] = [7, 7, 8, 9, 9, 10, 8];

  const unique: number[] = numbers.reduce((acc: number[], num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

  console.log(unique);
}

// Exercise 12: Filter + Transform Users (filter + map – advanced)
{
  type User = {
    name: string;
    age: number;
  };

  const users: User[] = [
    { name: 'Michael', age: 34 },
    { name: 'Emily', age: 15 },
    { name: 'James', age: 19 },
    { name: 'Sarah', age: 16 },
  ];

  const names: string[] = users.filter((user) => user.age > 18).map((user) => user.name);

  console.log(names);
}

// Exercise 13: Remove duplicate numbers from an array
{
  const numbers: number[] = [10, 20, 10, 30, 40];
  const result: number[] = [];

  for (const num of numbers) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  console.log(result);
}

// Exercise 14: Find the difference between two arrays
{
  const arr1: number[] = [1, 2, 3, 4];
  const arr2: number[] = [3, 4, 5];

  const difference: number[] = arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)));

  console.log(difference);
}

// Exercise 15: Find the union of two arrays
{
  const arr1: number[] = [1, 2, 3, 4];
  const arr2: number[] = [3, 4, 5];

  const combined: number[] = arr1.concat(arr2);
  const union: number[] = [];

  for (const num of combined) {
    if (!union.includes(num)) {
      union.push(num);
    }
  }

  console.log(union);
}

// Exercise 16: Count occurrences of each element
{
  const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const counts: Record<string, number> = {};

  for (const fruit of fruits) {
    if (counts[fruit]) {
      counts[fruit]++;
    } else {
      counts[fruit] = 1;
    }
  }

  console.log(counts);
}

// Exercise 17: Find the intersection of two arrays
{
  const arr1: number[] = [1, 2, 3, 4, 5];
  const arr2: number[] = [4, 5, 6, 7];

  const intersection: number[] = arr1.filter((num) => arr2.includes(num));

  console.log(intersection);
}

// Exercise 18: Flatten a nested array
{
  const nested: any[] = [1, [2, 3], [4, [5, 6]]];

  function flatten(arr: any[]): number[] {
    let result: number[] = [];

    for (const item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item);
      }
    }

    return result;
  }

  const flattened: number[] = flatten(nested);

  console.log(flattened);
}

// Exercise 19: Split an array into chunks
{
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  function chunk(arr: number[], size: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }

  console.log(chunk(numbers, 3));
}

// Exercise 20: Find the second largest number
{
  const numbers: number[] = [12, 45, 7, 45, 23, 8];
  let largest: number = -Infinity;
  let secondLargest: number = -Infinity;

  for (const num of numbers) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  console.log(secondLargest);
}

// Exercise 21: Group objects by a property
interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
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
{
  const sorted: Student[] = [...students].sort((a, b) => {
    if (a.grade !== b.grade) {
      return b.grade - a.grade;
    }
    return a.name.localeCompare(b.name);
  });

  console.log(sorted.map((student) => student.name));
}

// Exercise 23: Rotate an array
{
  const numbers: number[] = [1, 2, 3, 4, 5];

  function rotate(arr: number[], k: number): number[] {
    const lastPart: number[] = arr.slice(arr.length - k);
    const firstPart: number[] = arr.slice(0, arr.length - k);

    return lastPart.concat(firstPart);
  }

  console.log(rotate(numbers, 2));
}

// Exercise 24: Use a tuple to return min and max
{
  const numbers: number[] = [8, 3, 15, 1, 9];

  function minMax(arr: number[]): [min: number, max: number] {
    let min: number = arr[0];
    let max: number = arr[0];

    for (const num of arr) {
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    }

    return [min, max];
  }

  const [min, max] = minMax(numbers);

  console.log(`Min: ${min}, Max: ${max}`);
}

// Exercise 25: Filter by an enum value
enum Status {
  Active,
  Inactive,
  Pending,
}

{
  interface User {
    name: string;
    status: Status;
  }

  const users: User[] = [
    { name: 'Nikolay', status: Status.Pending },
    { name: 'Desislava', status: Status.Active },
    { name: 'Stoyan', status: Status.Inactive },
    { name: 'Kalina', status: Status.Active },
    { name: 'Boris', status: Status.Active },
  ];

  function getUsersByStatus(users: User[], status: Status): string[] {
    return users.filter((user) => user.status === status).map((user) => user.name);
  }

  console.log(getUsersByStatus(users, Status.Active));
}
