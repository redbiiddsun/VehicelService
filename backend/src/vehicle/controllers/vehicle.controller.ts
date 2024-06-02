import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';

import { Request } from 'express';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { ServiceService } from '../services/service.service';
import { VehicleService } from '../services/vehicle.service';
import { CreateServiceDto } from '../dto/create-service.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(
    private readonly vehicleService: VehicleService,
    private readonly serviceService: ServiceService,
  ) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto, @Req() req: Request) {
    return this.vehicleService.create(createVehicleDto, req.user.id);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.vehicleService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.vehicleService.findWithId(id, req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
    @Req() req: Request,
  ) {
    return this.vehicleService.update(id, req.user.id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    const userId = req.user.id;
    return this.vehicleService.remove(id, req.user.id);
  }

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
  findOneService(
    @Param('vehicleId') vehicleId: string,
    @Param('id') id: string,
  ) {
    return this.serviceService.findOneWithVehicleId(id, vehicleId);
  }

  @Patch(':id')
  updateService(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.serviceService.update(id, updateServiceDto);
  }

  @Delete(':id')
  removeService(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
