// Run the file with the command:
// npx ts-node typescript/conditional-statement/switch.ts
// npx tsx typescript/conditional-statement/switch.ts

// switch Syntax:
const expression: number = 10 / 2;
const x: number = 1;
const y: number = 2;
const z: number = 99;
switch (expression) {
  case x:
    // code block to be executed if the expression matches x
    break; // stops the switch statement from executing any more cases after this one. Not necessary if last statement and no default case
  case y:
    // code block to be executed if the expression matches y
    break;
  case z:
    // code block to be executed if the expression matches z
    break;
  default:
  // code block to be executed if the expression doesn't match any cases
  // optional If no default case is specified and no cases match the expression, the switch statement will do nothing.
}

// Example:
switch (new Date().getDay()) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('Unknown day');
}

// Common Code Blocks
switch (new Date().getDay()) {
  case 4:
  case 5:
    console.log('Soon it is Weekend');
    break;
  case 0:
  case 6:
    console.log('Weekend!');
    break;
  default:
    console.log('Looking forward to the Weekend');
}
