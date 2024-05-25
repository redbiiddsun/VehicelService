import { User } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

type CreateUserType = Pick<
  User,
  'email' | 'firstname' | 'lastname' | 'password'
>;

export class CreateUserDto implements CreateUserType {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
