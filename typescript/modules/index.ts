// Re-export – we gather everything in one place,
// so other files can import from a single entry point
export * from './math';
export { default as UserService } from './user';
export type { User, Role } from './user';
