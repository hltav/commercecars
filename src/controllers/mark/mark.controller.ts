import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { MarkService } from 'src/services/mark/mark.service'
import { CreateMarkDto, UpdateMarkDto } from '../../dto/mark.dto'
import { Public } from 'src/services/auth/auth.guard'

@Controller('marks')
@Public()
export class MarkController {
  constructor(private readonly markService: MarkService) {}

  @Post()
  create(@Body() createMarkDto: CreateMarkDto) {
    return this.markService.createMark(createMarkDto)
  }

  @Get()
  findAll() {
    return this.markService.findAllMarks()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.markService.findMarkById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMarkDto: UpdateMarkDto) {
    return this.markService.updateMark(+id, updateMarkDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.markService.deleteMark(+id)
  }
}
