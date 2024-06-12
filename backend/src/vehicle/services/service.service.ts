import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  create(vehicleId: string, createServiceDto: CreateServiceDto) {
    createServiceDto.vehicleId = vehicleId;

    if (createServiceDto.serviceDate)
      createServiceDto.serviceDate = new Date(createServiceDto.serviceDate);

    return this.prismaService.service.create({
      data: createServiceDto,
    });
  }

  findAll(vehicleId: string) {
    return this.prismaService.service.findMany({
      where: { vehicleId },
      include: { vehicles: true },
    });
  }

  findOneWithVehicleId(id: string, vehicleId: string) {
    return this.prismaService.service.findUnique({
      where: { id, vehicleId },
      // include: { vehicles: true },
    });
  }

  findOne(id: string) {
    return this.prismaService.service.findUnique({
      where: { id },
      // include: { vehicles: true },
    });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const currentService = await this.findOne(id);
    if (!currentService)
      throw new HttpException('Service not found', HttpStatus.NOT_FOUND);

    if (updateServiceDto.serviceDate)
      updateServiceDto.serviceDate = new Date(updateServiceDto.serviceDate);

    return this.prismaService.service.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  async remove(id: string) {
    const currentService = await this.findOne(id);
    if (!currentService)
      throw new HttpException('Service not found', HttpStatus.NOT_FOUND);

    return this.prismaService.service.delete({ where: { id } });
  }
}
