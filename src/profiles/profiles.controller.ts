import { ApiTags } from '@nestjs/swagger';
import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Controller,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return { id, ...updateProfileDto };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
