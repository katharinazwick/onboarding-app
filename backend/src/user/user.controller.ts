import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // erstellen und abrufen der User
  @Post()
  createUser(@Body("name") name: string) {
    return this.userService.createUser(name);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(":id")
  getUserById(@Param("id") id: string) {
    return this.userService.getUserById(id);
  }
}
