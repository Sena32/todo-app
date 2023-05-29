import {
  IsNotEmpty,
  IsNumber,
  IsString, MinLength
} from 'class-validator';
import { User } from '../entities/user.entity';


export class TaskDTO {
  
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  status: number;

  user?: User;

}
