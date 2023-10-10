import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Category } from '@prisma/client'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findCategoryById(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
    })
  }

  async findCategoryByName(name: string): Promise<Category | null> {
    return this.prisma.category.findFirst({
      where: { name },
    })
  }

  async findAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany()
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const existingCategory = await this.findCategoryByName(createCategoryDto.name)
      if (existingCategory) {
        throw new ConflictException('Category with the same name already exists')
      }

      return await this.prisma.category.create({
        data: createCategoryDto,
      })
    } catch (error) {
      throw error
    }
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findCategoryById(id)
    if (!category) {
      throw new NotFoundException('Category not found')
    }
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    })
  }

  async deleteCategory(id: number): Promise<Category> {
    const category = await this.findCategoryById(id)
    if (!category) {
      throw new NotFoundException('Category not found')
    }
    return this.prisma.category.delete({
      where: { id },
    })
  }
}
