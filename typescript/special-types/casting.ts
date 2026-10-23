// Run the file with the command:
// npx ts-node typescript/special-types/casting.ts
// npx tsx typescript/special-types/casting.ts

// Casting (type assertion) tells TypeScript to treat a value as a different type

// Casting with as
const x: unknown = 'hello';
console.log((x as string).length);

// casting with <>
const z: unknown = 'hello';
console.log((<string>z).length);

// casting doesn't change the runtime value, it just tells TypeScript to treat it as a different type
const y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

// force casting - to override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
const w = 'hello';
console.log(typeof w); // prints "string" (the runtime type; TypeScript infers the literal type 'hello')
// console.log(((w as unknown) as number).length); // compile error: type number has no property length
console.log((w as unknown as number) + 5); // w is not actually a number so 5 will be concatenated to the string instead of added to it.
