import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ServiceService } from '../services/service.service';


@Controller('vehicle/:vehicleId/service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  createService(
    @Param('vehicleId') vehicleId: string,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.serviceService.create(vehicleId, createServiceDto);
  }

  @Get()
  findAllService(@Param('vehicleId') vehicleId: string) {
    return this.serviceService.findAll(vehicleId);
  }

  @Get(':id')
  findOneService(@Param('vehicleId') vehicleId: string, @Param('id') id: string) {
    return this.serviceService.findOneWithVehicleId(id, vehicleId);
  }

  @Patch(':id')
  updateService(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(id, updateServiceDto);
  }

  @Delete(':id')
  removeService(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}