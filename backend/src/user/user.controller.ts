// src/users/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { username: string; email: string; password: string }) {
    const { username, email, password } = body;
    return this.userService.createUser(username, email, password);
  }
}
