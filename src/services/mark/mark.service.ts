import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Mark } from '@prisma/client'
import { CreateMarkDto, UpdateMarkDto } from 'src/dto/mark.dto'

@Injectable()
export class MarkService {
  constructor(private prisma: PrismaService) {}

  async findMarkById(id: number): Promise<Mark | null> {
    return this.prisma.mark.findUnique({
      where: { id },
    })
  }

  async findMarkByName(name: string): Promise<Mark | null> {
    return this.prisma.mark.findFirst({
      where: { name },
    })
  }

  async findAllMarks(): Promise<Mark[]> {
    return this.prisma.mark.findMany()
  }

  async createMark(createMarkDto: CreateMarkDto): Promise<Mark> {
    try {
      const existingMark = await this.findMarkByName(createMarkDto.name)
      if (existingMark) {
        throw new ConflictException('Mark with the same name already exists')
      }

      return await this.prisma.mark.create({
        data: createMarkDto,
      })
    } catch (error) {
      throw error
    }
  }

  async updateMark(id: number, updateMarkDto: UpdateMarkDto): Promise<Mark> {
    const Mark = await this.findMarkById(id)
    if (!Mark) {
      throw new NotFoundException('Mark not found')
    }
    return this.prisma.mark.update({
      where: { id },
      data: updateMarkDto,
    })
  }

  async deleteMark(id: number): Promise<Mark> {
    const Mark = await this.findMarkById(id)
    if (!Mark) {
      throw new NotFoundException('Mark not found')
    }
    return this.prisma.mark.delete({
      where: { id },
    })
  }
}
