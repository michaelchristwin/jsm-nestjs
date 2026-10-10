import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
const users = [
  { id: 1, name: 'Constantine' },
  { id: 2, name: 'Nurhaci' },
];

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return users;
  }
  @Get('/search')
  getUserByName(@Query('name') name: string) {
    return users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return { data: CreateUserDto, message: 'user created successfully' };
  }
}
