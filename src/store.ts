import { type User } from './types.ts';
import { randomUUID } from 'node:crypto';

export class Store {
  private users: User[] = [];

  getAllUSers() {
    return [...this.users];
  }

  createNewUser(userData: Omit<User, 'id'>) {
    const newUser: User = { id: randomUUID(), ...userData };
    this.users.push(newUser);
    return newUser;
  }
}
