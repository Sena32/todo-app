import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDTO } from '../dtos/task.dto';
import { UserDTO } from '../dtos/user.dto';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    try {
      const tasks = await this.repository.find({ relations: ['user'] });
      return tasks;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id: number): Promise<Task> {
    try {
      const task = await this.repository.findOne({
        where: { id },
        relations: ['user'],
      });
      return task;
    } catch (e) {
      console.log(e);
    }
  }

  async create(task: TaskDTO, user: UserDTO): Promise<Task> {
    const newTask = this.repository.create({
      ...task,
      user: user,
    });
    if (!newTask) {
      throw new Error('Task is not created!');
    }
    try {
      const task = await this.repository.save(newTask);
      return task;
    } catch (e) {
      console.log(e);
    }
  }

  async update(id: number, task: TaskDTO): Promise<Task> {
    try {
      const user = await this.repository.update(id, task);
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
