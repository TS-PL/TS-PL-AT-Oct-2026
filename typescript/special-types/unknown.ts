// Run the file with the command:
// npx ts-node typescript/special-types/never.ts
// npx tsx typescript/special-types/never.ts

// ==========================================
// 1. NEVER (SPECIAL DATA TYPE)
// ==========================================

// never is a special type in TypeScript.
//
// It means that a value
// can never exist.
//
// Unlike string, number or boolean,
// the never type has no allowed values at all.
//
// For example:
// string  -> 'Hello'
// number  -> 25
// boolean -> true or false
// never   -> no possible value
//
// IMPORTANT:
// never does NOT automatically mean
// that the program will throw an error.
//
// It is a type TypeScript uses to describe
// impossible values or situations.

// ==========================================
// 2. ERROR WHEN ASSIGNING TO NEVER
// ==========================================

// We try to create a variable
// of type never and assign true to it.
//
// This is not allowed.
//
// Reason:
// true is a value of type boolean,
// and never does not allow any values.

// const x: never = true;

// TypeScript will show an error:
// Type 'true' is not assignable to type 'never'.

// ==========================================
// 3. WHERE IS NEVER USED?
// ==========================================

// never appears less often in beginner
// TypeScript examples.
//
// It is mainly used for:
//
// - Functions that always throw an error.
// - Functions that never finish.
// - Checks for impossible cases.
// - More complex types and generics.
// - Forbidding certain properties.
//
// The easiest place to start is with functions
// that never return a result.

// ==========================================
// 4. A FUNCTION THAT ALWAYS THROWS AN ERROR
// ==========================================

// We create a function named throwError.
//
// function is the keyword for creating
// a function.
//
// message: string means that the function
// takes a text parameter.
//
// : never means that the function
// never finishes normally.
//
// Instead of returning a value, it always
// stops execution with throw.

function throwError(message: string): never {
  // throw is used to throw an error.
  //
  // new Error(message) creates an error
  // object with the given message.
  //
  // The function's execution stops.

  throw new Error(message);
}

// Example call:
//
// throwError('Something went wrong!');
//
// If we call the function without handling
// the error, the program will stop
// with the given message.
//
// That is why we leave the call as a comment.

// ==========================================
// 5. A FUNCTION WITH AN INFINITE LOOP
// ==========================================

// Another example of never is a function
// that never finishes.
//
// while is the keyword for creating a loop.
//
// while (true) means:
// "Run the loop while the condition is true."
//
// Since the condition is always true,
// the loop will never end on its own.

function infiniteLoop(): never {
  while (true) {
    // This code will run forever.
    //
    // There is no break or return
    // to stop the loop.
  }
}

// IMPORTANT:
// We do not call infiniteLoop(),
// because the program would stay in the loop
// and never move on to the next code.
//
// infiniteLoop();

// ==========================================
// 6. NEVER IN OBJECT PROPERTIES
// ==========================================

// TypeScript lets us use never
// to forbid a specific property
// in an object type.
//
// This is useful when we want
// an object to contain certain
// properties but not allow others.
//
// For example:
// We want the user to have a name,
// but not to have an id.

// ==========================================
// 7. CREATING A CUSTOM TYPE (TYPE)
// ==========================================

// type lets us create
// our own name for a type.
//
// Here we create a type named WithoutId.
//
// It describes the structure of an object
// that must contain name
// but must not contain id.

type WithoutId = {
  // id is a property name.
  //
  // ? means the property is optional.
  //
  // never means we cannot
  // assign a normal value to it.
  //
  // The combination id?: never is commonly
  // used to forbid id.
  //
  // With exactOptionalPropertyTypes: true,
  // even id: undefined is not allowed.

  id?: never;

  // name is a required property.
  //
  // : string means the value
  // must be text.
  //
  // Since there is no ?, name is required.

  name: string;
};

// ==========================================
// 8. CREATING AN OBJECT OF TYPE WithoutId
// ==========================================

// We create a constant named user.
//
// : WithoutId means the object
// must follow the rules of the type.
//
// In this case:
// - name is required.
// - id must not have a value.

const user: WithoutId = {
  name: 'John',

  // WRONG EXAMPLE:
  //
  // If we add id with a number value,
  // TypeScript will show an error.
  //
  // Reason:
  // id is declared as never.

  // id: 123
};

// We print the object.
//
// Result:
// { name: 'John' }

console.log(user);

// ==========================================
// 9. VOID (FUNCTION WITHOUT A RETURN VALUE)
// ==========================================

// void is another special type in TypeScript.
//
// It is most often used for functions
// that do not return a useful value.
//
// For example:
// - Printing a message.
// - Logging information.
// - Performing an action.
//
// The difference from never is important:
//
// void  -> the function can finish normally
//          without returning a useful value.
//
// never -> the function cannot finish
//          normally and return control.

/**
 * Prints a message to the console.
 *
 * The function takes no parameters.
 *
 * @returns void - does not return a useful value.
 */
function logMessage(): void {
  // We print text to the console.
  console.log('hello');

  // After console.log(), the function
  // finishes normally.
}

// We call the function.
//
// Result: hello

logMessage();

// ==========================================
// 10. THE MAIN DIFFERENCE BETWEEN NEVER AND VOID
// ==========================================

// void:
// The function performs its action
// and can finish normally.
//
// never:
// The function never finishes normally.
// For example, it always throws an error
// or runs an infinite loop.
//
// Remember:
//
// void  = no useful return value.
// never = finishing normally is impossible.
