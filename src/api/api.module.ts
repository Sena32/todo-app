import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Task } from './entities/task.entity';
import { TaskService } from './services/task.service';
import { TaskController } from './controllers/task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Task])],
  controllers: [UserController, TaskController],
  providers: [UserService, TaskService],
})
export class ApiModule {}
