import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from 'src/controllers/vehicle/vehicle.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
