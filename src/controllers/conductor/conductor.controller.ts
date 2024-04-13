import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { ConductorService } from 'src/services/conductor/conductor.service'
import { CreateConductorDto, UpdateConductorDto } from '../../dto/conductor.dto'
import { Public } from 'src/services/auth/auth.guard'

@Controller('conductors')
@Public()
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) {}

  @Post()
  create(@Body() createConductorDto: CreateConductorDto) {
    return this.conductorService.createConductor(createConductorDto)
  }

  @Get()
  findAll() {
    return this.conductorService.findAllConductors()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conductorService.findConductorById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConductorDto: UpdateConductorDto) {
    return this.conductorService.updateConductor(+id, updateConductorDto)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    /* return this.conductorService.deleteConductor(+id) */
    const deleted = this.conductorService.deleteConductor(+id)
    if (deleted) {
      return { message: 'Item removido com sucesso' }
    } else {
      return { message: 'Item não encontrado' }
    }
  }
}
