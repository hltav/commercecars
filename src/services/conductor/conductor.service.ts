import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Conductor, Prisma } from '@prisma/client'
import { CreateConductorDto, UpdateConductorDto } from 'src/dto/conductor.dto'

@Injectable()
export class ConductorService {
  constructor(private prisma: PrismaService) {}

  async findConductorById(id: number): Promise<Conductor | null> {
    try {
      const conductor = await this.prisma.conductor.findUnique({
        where: { id },
      })
      if (!conductor) {
        throw new NotFoundException('Conductor not found')
      }
      return conductor
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new Error('Internal Server Error')
    }
  }

  async findAllConductors(): Promise<Conductor[]> {
    return this.prisma.conductor.findMany()
  }

  async createConductor(createConductorDto: CreateConductorDto): Promise<Conductor> {
    try {
      return await this.prisma.conductor.create({
        data: createConductorDto,
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('CPF already exists')
      }

      throw new Error('Internal Server Error')
    }
  }

  async updateConductor(id: number, updateConductorDto: UpdateConductorDto): Promise<Conductor> {
    try {
      await this.findConductorById(id)
      return this.prisma.conductor.update({
        where: { id },
        data: updateConductorDto,
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error 
      }
      
      throw new Error('Internal Server Error') 
    }
  }

  async deleteConductor(id: number): Promise<Conductor> {
    try {
      const conductor = await this.findConductorById(id)
      return this.prisma.conductor.delete({
        where: { id },
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error 
      }
     
      throw new Error('Internal Server Error') 
    }
  }
}
