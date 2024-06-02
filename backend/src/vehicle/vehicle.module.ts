import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServiceService } from './services/service.service';
import { VehicleController } from './controllers/vehicle.controller';
import { VehicleService } from './services/vehicle.service';


@Module({
  imports: [PrismaModule],
  controllers: [VehicleController],
  providers: [VehicleService, ServiceService],
})
export class VehicleModule {}
