// Run the file with the command:
// npx ts-node homework/nora-dimitrova/homework-1/numeber.ts
// npx tsx homework/nora-dimitrova/homework-1/numeber.ts 

// Exercise 1: Swap variable values
// Step 1: Declare two variables and assign numeric values to them.
let firstNum: number = -1979;
let secondNum: number = 2026;
// Step 2: Log the original values.
console.log(firstNum);
console.log(secondNum);
// Step 3: Swap their values.
[firstNum, secondNum] = [secondNum, firstNum];
// Step 4: Log the final values.
console.log("Final values:", { firstNum, secondNum });


// Exercise 2: Check whether a number is even
// Step 1: Declare a variable and assign any number to it.
const a: number = 30;
// Step 2: Declare a boolean variable and use an expression to check whether the number is even.
const isEven: boolean = a % 2 === 0;
// Step 3: Log the result.
console.log(`The number is even: ${isEven}`);


// Exercise 3: Check whether a number is positive
// Step 1: Declare a variable and assign any number to it.
const b: number = -112;
// Step 2: Declare a boolean variable and check whether the number is greater than 0.
const isGreaterThanZero: boolean = b > 0;
// Step 3: Log the result.
console.log(`The number is greater than 0: ${isGreaterThanZero}`);


// Exercise 4: Calculate the total cost
// Step 1: Create a variable called price and assign it the value 19.99.
const price: number = 19.99;
// Step 2: Create another variable called quantity and assign it the value 3.
const quantity: number = 3;
// Step 3: Calculate the total cost by multiplying price by quantity.
const result: number = (price * quantity);
// Step 4: Log the total cost.
console.log(result);


// Exercise 5: Convert Celsius to Fahrenheit
// Step 1: Create a variable to store the temperature in Celsius.
const temperatureCelsius: number = 25;
// Step 2: Use the formula F = C * 9 / 5 + 32 to convert the temperature to Fahrenheit.
const temperatureFahrenheit = temperatureCelsius * 9 / 5 + 32;
// Step 3: Store the result in a variable.
const res: number = temperatureFahrenheit;
// Step 4: Log the temperature in Fahrenheit.
console.log(`The temperature in Fahrenheit is: ${res}`)
