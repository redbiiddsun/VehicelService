import { Vehicle } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

type CreateVehicleType = Omit<Vehicle, 'id' | 'createdAt' | 'userId'>;

export class CreateVehicleDto implements Vehicle {
  id: string;
  userId: string;
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  platenumber: string;

  @IsString()
  @IsNotEmpty()
  plateprovince: string;

}
