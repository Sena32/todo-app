import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO } from '../dtos/user.dto';
import { validate } from 'class-validator';

@Controller('v1/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Body() userDto: UserDTO) {
    validate(userDto).then((err) => {
      if (err) {
        return err;
      } else {
        return;
      }
    });
    try {
      const user = await this.service.create(userDto);
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UserDTO) {
    try {
      const user = await this.service.update(id, userDto);
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      return await this.service.delete(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
