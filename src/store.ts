import { type User } from './types.ts';
import { randomUUID } from 'node:crypto';

export class Store {
  private users: User[] = [];

  getAllUsers() {
    return [...this.users];
  }

  getUserById(id: string): User | null {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;
    return { ...user };
  }

  createNewUser(userData: Omit<User, 'id'>): User {
    const newUser: User = { id: randomUUID(), ...userData };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedInfo: Omit<User, 'id'>): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    const updatedUser: User = {
      id,
      ...updatedInfo,
    };

    this.users[userIndex] = updatedUser;

    return { ...updatedUser };
  }
}
