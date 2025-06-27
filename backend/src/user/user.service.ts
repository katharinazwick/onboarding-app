import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

export interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(name: string): User {
    const newUser: User = { id: uuidv4(), name };
    this.users.push(newUser);
    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | { message: string } {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const user = this.users.find((user) => user.id === id);
    return user || { message: "User nicht gefunden" };
  }
}
