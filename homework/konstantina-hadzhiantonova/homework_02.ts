// Exercise 1
// Solution
{
  let isMale: boolean = true;

  if (isMale) {
    console.log('The person is male');
  } else {
    console.log('The person is female');
  }
}

// Exercise 2
// Solution
{
  let first: number = 15;
  let second: number = 10;
  let third: number = 20;

  if (first > second && first < third) {
    console.log(`The number ${first} is between ${second} and ${third}`);
  } else {
    console.log(`The number ${first} is NOT between ${second} and ${third}`);
  }
}

// Exercise 3
// Solution
{
  let a: number = 7;
  let b: number = 2;
  let c: number = 5;

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

// Exercise 4
// Solution
{
  let text: string = 'Hello world!';

  if (text.length > 10) {
    console.log('The string has more than 10 characters');
  } else {
    console.log('The string has 10 or less characters');
  }
}

// Exercise 5
// Solution
{
  let str: string = 'ABC';

  if (str.includes('B')) {
    console.log(`The string ${str} contains the letter 'B'`);
  } else {
    console.log(`The string ${str} does NOT contain the letter 'B'`);
  }
}

// Exercise 6
// Solution
{
  let age: number = 25;
  let bestLapTime: number = 58.4;

  console.log(`Age: ${age}`);
  console.log(`Best lap time: ${bestLapTime}`);

  if (age >= 18 && age < 65 && bestLapTime < 60) {
    console.log('The client is allowed to compete');
  } else {
    console.log('The client is NOT allowed to compete');
  }
}

// Exercise 7
// Solution
{
  let words: string[] = ['apple', 'banana', 'cherry'];
  let upperWords: string[] = words.map((word) => word.toUpperCase());

  console.log(upperWords);
}

// Exercise 8
// Solution
{
  let words: string[] = ['cat', 'elephant', 'dog', 'giraffe', 'house'];
  let longWords: string[] = words.filter((word) => word.length > 5);

  console.log(longWords);
}

// Exercise 9
// Solution
{
  let numbers: number[] = [4, 18, 7, 25, 3];
  let max: number = numbers.reduce((acc, num) => (num > acc ? num : acc));

  console.log(max);
}

// Exercise 10
// Solution
{
  type Item = {
    name: string;
    price: number;
    quantity: number;
  };

  let items: Item[] = [
    { name: 'Bread', price: 2, quantity: 3 },
    { name: 'Milk', price: 1.5, quantity: 2 },
    { name: 'Cheese', price: 6, quantity: 1 },
  ];

  let total: number = items
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0);

  console.log(total);
}

// Exercise 11
// Solution
{
  let numbers: number[] = [1, 2, 2, 3, 4, 4, 5];

  let unique: number[] = numbers.reduce((acc: number[], num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

  console.log(unique);
}

// Exercise 12
// Solution
{
  type User = {
    name: string;
    age: number;
  };

  let users: User[] = [
    { name: 'Ivan', age: 25 },
    { name: 'Maria', age: 16 },
    { name: 'Georgi', age: 30 },
    { name: 'Elena', age: 17 },
  ];

  let names: string[] = users.filter((user) => user.age > 18).map((user) => user.name);

  console.log(names);
}

// Exercise 13
// Solution
{
  let numbers: number[] = [10, 20, 10, 30, 40];
  let result: number[] = [];

  for (let num of numbers) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  console.log(result);
}

// Exercise 14
// Solution
{
  let arr1: number[] = [1, 2, 3, 4];
  let arr2: number[] = [3, 4, 5];

  let difference: number[] = arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)));

  console.log(difference);
}

// Exercise 15
// Solution
{
  let arr1: number[] = [1, 2, 3, 4];
  let arr2: number[] = [3, 4, 5];

  let combined: number[] = arr1.concat(arr2);
  let union: number[] = [];

  for (let num of combined) {
    if (!union.includes(num)) {
      union.push(num);
    }
  }

  console.log(union);
}

// Exercise 16
// Solution
{
  let fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  let counts: Record<string, number> = {};

  for (let fruit of fruits) {
    if (counts[fruit]) {
      counts[fruit]++;
    } else {
      counts[fruit] = 1;
    }
  }

  console.log(counts);
}

// Exercise 17
// Solution
{
  let arr1: number[] = [1, 2, 3, 4, 5];
  let arr2: number[] = [4, 5, 6, 7];

  let intersection: number[] = arr1.filter((num) => arr2.includes(num));

  console.log(intersection);
}

// Exercise 18
// Solution
{
  let nested: any[] = [1, [2, 3], [4, [5, 6]]];

  function flatten(arr: any[]): number[] {
    let result: number[] = [];

    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item));
      } else {
        result.push(item);
      }
    }

    return result;
  }

  let flattened: number[] = flatten(nested);

  console.log(flattened);
}

// Exercise 19
// Solution
{
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  function chunk(arr: number[], size: number): number[][] {
    let result: number[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }

  console.log(chunk(numbers, 3));
}

// Exercise 20
// Solution
{
  let numbers: number[] = [12, 45, 7, 45, 23, 8];
  let largest: number = -Infinity;
  let secondLargest: number = -Infinity;

  for (let num of numbers) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  console.log(secondLargest);
}

// Exercise 21
// Solution
interface Student {
  name: string;
  grade: number;
}

let students: Student[] = [
  { name: 'Ana', grade: 5 },
  { name: 'Ivan', grade: 6 },
  { name: 'Maria', grade: 5 },
  { name: 'Petar', grade: 4 },
];

let grouped: Record<number, string[]> = {};

for (let student of students) {
  if (!grouped[student.grade]) {
    grouped[student.grade] = [];
  }
  grouped[student.grade].push(student.name);
}

console.log(grouped);

// Exercise 22
// Solution
{
  let sorted: Student[] = [...students].sort((a, b) => {
    if (a.grade !== b.grade) {
      return b.grade - a.grade;
    }
    return a.name.localeCompare(b.name);
  });

  console.log(sorted.map((student) => student.name));
}

// Exercise 23
// Solution
{
  let numbers: number[] = [1, 2, 3, 4, 5];

  function rotate(arr: number[], k: number): number[] {
    let lastPart: number[] = arr.slice(arr.length - k);
    let firstPart: number[] = arr.slice(0, arr.length - k);

    return lastPart.concat(firstPart);
  }

  console.log(rotate(numbers, 2));
}

// Exercise 24
// Solution
{
  let numbers: number[] = [8, 3, 15, 1, 9];

  function minMax(arr: number[]): [min: number, max: number] {
    let min: number = arr[0];
    let max: number = arr[0];

    for (let num of arr) {
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    }

    return [min, max];
  }

  let [min, max] = minMax(numbers);

  console.log(`Min: ${min}, Max: ${max}`);
}

// Exercise 25
// Solution
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

  let users: User[] = [
    { name: 'Ivan', status: Status.Active },
    { name: 'Maria', status: Status.Inactive },
    { name: 'Georgi', status: Status.Active },
    { name: 'Elena', status: Status.Pending },
    { name: 'Petar', status: Status.Active },
  ];

  function getUsersByStatus(users: User[], status: Status): string[] {
    return users.filter((user) => user.status === status).map((user) => user.name);
  }

  console.log(getUsersByStatus(users, Status.Active));
}
