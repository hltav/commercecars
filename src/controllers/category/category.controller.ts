import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { CategoryService } from 'src/services/category/category.service'
import { CreateCategoryDto, UpdateCategoryDto } from '../../dto/category.dto'
import { Public } from 'src/services/auth/auth.guard'

@Controller('categories')
@Public()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAllCategories()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findCategoryById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(+id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(+id)
  }
}
