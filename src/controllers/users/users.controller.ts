import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query } from '@nestjs/common'
import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto'
import { Public } from 'src/services/auth/auth.guard'
import { UserService } from 'src/services/users/users.service'

@Controller('users')
@Public()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAllUsers()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUserById(+id)
  }

  @Post(':email')
  findByEmail(@Query('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.updateUser(+id, updateUsersDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser(+id)
  }
}
