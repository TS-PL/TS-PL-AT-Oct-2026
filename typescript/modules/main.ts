// Run the file with the command:
// npx ts-node typescript/modules/main.ts
// npx tsx typescript/modules/main.ts

// 1) Importing specific (named) exports – the names must match
import { add, multiply, PI } from './math';

// 2) Importing with a new name (alias) using "as"
import { add as sum } from './math';

// 3) Importing EVERYTHING from the module as a single object
import * as MathUtils from './math';

// 4) Importing a default export – we can choose the name ourselves
import UserService from './user';

// 5) Importing only types – they disappear after compilation to JavaScript
import type { User, Role } from './user';

console.log(add(2, 3)); // 5
console.log(sum(10, 20)); // 30
console.log(MathUtils.multiply(4, 5)); // 20
console.log(MathUtils.PI); // 3.14159

// Create an instance of the class imported as a default export
const service = new UserService();

// Use the imported User type
const ivan: User = { id: 1, name: 'Иван', email: 'ivan@example.com' };
service.addUser(ivan);

// Use the imported Role type
const myRole: Role = 'admin';

console.log(service.getAll());
