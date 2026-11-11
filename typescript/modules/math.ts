// Named export – we can export multiple things from a single file
export const PI = 3.14159;

// Export a function that adds two numbers
export function add(a: number, b: number): number {
  return a + b;
}

// Export a function that multiplies two numbers
export function multiply(a: number, b: number): number {
  return a * b;
}

// This function is NOT exported – it is "private" to this module
// and cannot be used in other files
function internalHelper(): string {
  return 'Internal use';
}
