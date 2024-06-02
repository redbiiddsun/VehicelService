import { Service } from '@prisma/client';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateServiceDto implements Service {
  id: string;

  vehicleId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  miles: number;

  @IsString()
  @IsOptional()
  details: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsNumber()
  @IsOptional()
  cost: number;

  @IsDateString()
  @IsOptional()
  serviceDate: Date;

  createdAt: Date;
}
