import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Vehicle, Prisma } from '@prisma/client'
import { CreateVehicleDto, UpdateVehicleDto } from 'src/dto/vehicle.dto'

@Injectable()
export class VehicleService {
  constructor(private prisma: PrismaService) {}

  async findVehicleById(id: number): Promise<any | null> {
    try {
      const vehicle = await this.prisma.vehicle.findUnique({
        where: { id },
        include: {
          mark: true,
          category: true,
        },
      })
      if (!vehicle) {
        throw new NotFoundException('Vehicle not found')
      }

      const vehicleResponse = {
        id: vehicle.id,
        chassis: vehicle.chassis,
        plate: vehicle.plate,
        renavam: vehicle.renavam,
        km: vehicle.km,
        model: vehicle.model,
        uf: vehicle.uf,
        price: vehicle.price,
        year: vehicle.year,
        mark: {
          name: vehicle.mark.name,
        },
        category: {
          name: vehicle.category.name,
        },
      }

      return vehicleResponse
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new Error('Internal Server Error')
    }
  }

  async findAllVehicles(): Promise<any[]> {
    const vehicles = await this.prisma.vehicle.findMany({
      include: {
        mark: true,
        category: true,
      },
    })

    const vehiclesResponse = vehicles.map((vehicle) => ({
      id: vehicle.id,
      chassis: vehicle.chassis,
      plate: vehicle.plate,
      renavam: vehicle.renavam,
      km: vehicle.km,
      model: vehicle.model,
      uf: vehicle.uf,
      price: vehicle.price,
      year: vehicle.year,
      mark: {
        name: vehicle.mark.name,
      },
      category: {
        name: vehicle.category.name,
      },
    }))

    return vehiclesResponse
  }

  async createVehicle(createVehicleDto: CreateVehicleDto): Promise<any> {
    console.log(createVehicleDto)
    try {
      const { markId, categoryId, ...vehicleData } = createVehicleDto

      const mark = await this.prisma.mark.findUnique({
        where: { id: createVehicleDto.markId },
      })
      if (!mark) {
        throw new NotFoundException('Mark not found')
      }

      const category = await this.prisma.category.findUnique({
        where: { id: createVehicleDto.categoryId },
      })
      if (!category) {
        throw new NotFoundException('Category not found')
      }

      const createdVehicle = await this.prisma.vehicle.create({
        data: {
          ...vehicleData,
          mark: { connect: { id: markId } },
          category: { connect: { id: categoryId } },
        },
        include: {
          mark: true,
          category: true,
        },
      })

      console.log(createdVehicle)

      const vehicleResponse = {
        id: createdVehicle.id,
        chassis: createdVehicle.chassis,
        plate: createdVehicle.plate,
        renavam: createdVehicle.renavam,
        km: createdVehicle.km,
        model: createdVehicle.model,
        uf: createdVehicle.uf,
        year: createdVehicle.year,
        mark: {
          name: createdVehicle.mark.name,
        },
        category: {
          name: createdVehicle.category.name,
        },
      }

      return vehicleResponse
    } catch (error) {
      console.log(error)

      if (error instanceof NotFoundException) {
        throw error
      } else if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('Chassis or plate already exists')
      } else {
        throw new Error('Internal Server Error')
      }
    }
  }

  async updateVehicle(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    try {
      await this.findVehicleById(id)
      return this.prisma.vehicle.update({
        where: { id },
        data: updateVehicleDto,
        include: {
          mark: true,
          category: true,
        },
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }

      throw new Error('Internal Server Error')
    }
  }

  async deleteVehicle(id: number): Promise<Vehicle> {
    try {
      const vehicle = await this.findVehicleById(id)
      return this.prisma.vehicle.delete({
        where: { id },
        include: {
          mark: true,
          category: true,
        },
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }

      throw new Error('Internal Server Error')
    }
  }
}
