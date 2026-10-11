import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll() {
    return [];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
}
