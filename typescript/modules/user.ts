// Export an interface so other files can use it
export interface User {
  id: number;
  name: string;
  email: string;
}

// Export a type alias as well
export type Role = 'admin' | 'editor' | 'viewer';

// Default export – there can be ONLY ONE per file
export default class UserService {
  private users: User[] = [];

  // Adds a new user
  addUser(user: User): void {
    this.users.push(user);
  }

  // Returns all users
  getAll(): User[] {
    return this.users;
  }
}
