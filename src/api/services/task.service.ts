import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDTO } from '../dtos/task.dto';
import { Task } from '../entities/task.entity';
// import { User } from '../entities/user.entity';
// import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    try {
      const tasks = await this.repository.find({});
      return tasks;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id:number): Promise<Task> {
    try {
      const task = await this.repository.findOne({where:{id}});
      return task;
    } catch (e) {
      console.log(e);
    }
  }

  async create(taskDTO: TaskDTO): Promise<Task> {
    try {
      const task = await this.repository.save(taskDTO);
      return task;
    } catch (e) {
      console.log(e);
    }
  }

  async update(id:number, taskDTO: TaskDTO): Promise<Task> {
    try {
      const user = await this.repository.update(id, taskDTO);
      return user as unknown as Task;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id: number): Promise<Task> {
    try {
      const task = await this.repository.delete(id);
      return task as unknown as Task;
    } catch (e) {
      console.log(e);
    }
  }
}
