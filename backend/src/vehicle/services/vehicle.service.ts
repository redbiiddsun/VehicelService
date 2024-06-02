import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto, userId: string) {

    return this.prismaService.vehicle.create({
      data: {
        name: createVehicleDto.name,
        platenumber: createVehicleDto.platenumber,
        plateprovince: createVehicleDto.plateprovince,
        userId: userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prismaService.vehicle.findMany({ where: { userId } });
  }

  findWithId(id: string, userId: string) {
    return this.prismaService.vehicle.findUnique({ where: { id, userId } });
  }

  async update(id: string, userId: string,updateVehicleDto: UpdateVehicleDto) {
    
    const exitiedVehicle = await this.findWithId(id, userId);
    if(!exitiedVehicle) throw new HttpException('Vehicle not found', HttpStatus.NOT_FOUND);

    return this.prismaService.vehicle.update({where: {id, userId: id}, data: updateVehicleDto});
  }

  async remove(id: string, userId: string) {

    const exitiedVehicle = await this.findWithId(id, userId);
    if(!exitiedVehicle) throw new HttpException('Vehicle not found', HttpStatus.NOT_FOUND);

    return this.prismaService.vehicle.delete({where: {id, userId}});
  }
}
