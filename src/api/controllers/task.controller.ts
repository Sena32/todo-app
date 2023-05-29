import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { TaskDTO } from '../dtos/task.dto';
import { TaskService } from '../services/task.service';

@Controller('v1/task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

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
  async create(@Body() task: TaskDTO) {
    const {user, ...rest} = task;
    try {
      const task = await this.service.create(rest, user);
      return task;
    } catch (e) {
      console.log(e);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: TaskDTO) {
    try {
      const newTask = await this.service.update(id, task);
      return newTask;
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
