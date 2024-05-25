import { User } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

type UpdateUserType = Pick<User, 'email' | 'firstname' | 'lastname'>;

export class UpdateUserDto implements UpdateUserType {
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
}
