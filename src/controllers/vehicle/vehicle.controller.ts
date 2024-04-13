import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { VehicleService } from 'src/services/vehicle/vehicle.service'
import { CreateVehicleDto, UpdateVehicleDto } from '../../dto/vehicle.dto'
import { Public } from 'src/services/auth/auth.guard'

@Controller('vehicles')
@Public()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.createVehicle(createVehicleDto)
  }

  @Get()
  findAll() {
    return this.vehicleService.findAllVehicles()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleService.findVehicleById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.updateVehicle(+id, updateVehicleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleService.deleteVehicle(+id)
  }
}
