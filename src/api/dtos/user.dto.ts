import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { Address } from '../entities/address.entity';
import { Task } from '../entities/task.entity';

const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  @Length(11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  address?: Address;

  tasks?: Task[];
}
