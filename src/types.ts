export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export type StatusCode = 200 | 201 | 204 | 400 | 404 | 500;
