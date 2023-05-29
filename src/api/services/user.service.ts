import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      const users = await this.repository.find({});
      return users;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id:number): Promise<User> {
    try {
      const user = await this.repository.findOne({where:{id}});
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async create(userDTO: UserDTO): Promise<User> {
    try {
      const user = await this.repository.save(userDTO);
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async update(id:number, userDTO: UserDTO): Promise<User> {
    try {
      const user = await this.repository.update(id, userDTO);
      return user as unknown as User;
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const user = await this.repository.delete(id);
      return user as unknown as User;
    } catch (e) {
      console.log(e);
    }
  }
}
