import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User, Prisma } from '@prisma/client'
import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: number): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      })
      if (!user) {
        throw new NotFoundException('User not found')
      }

      const userResponse = {
        id: user.id,
        username: user.name,
        email: user.email,
      }

      return userResponse
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new Error('Internal Server Error')
    }
  }

  async findAllUsers(): Promise<any[]> {
    const users = await this.prisma.user.findMany()

    const usersResponse = users.map((user) => ({
      id: user.id,
      username: user.name,
      email: user.email,
      admin: user.admin,
    }))

    return usersResponse
  }

  async findUserByEmail(email: string): Promise<any> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
      })
      return user
    } catch (error) {
      throw error
    }
  }

  async createUser(createUsersDto: CreateUsersDto): Promise<Partial<User>> {
    try {
      const saltRounds = 10

      const hashedPassword = await bcrypt.hash(createUsersDto.password, saltRounds)

      const createdUser = await this.prisma.user.create({
        data: {
          name: createUsersDto.name,
          email: createUsersDto.email,
          passwordHash: hashedPassword,
          admin: createUsersDto.admin,
        },
      })

      const filteredUser: Partial<User> = {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
      }

      return filteredUser
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('Email already exists')
      }

      throw new Error('Internal Server Error')
    }
  }

  async updateUser(id: number, updateUsersDto: UpdateUsersDto): Promise<User> {
    try {
      await this.findUserById(id)
      return this.prisma.user.update({
        where: { id },
        data: updateUsersDto,
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }

      throw new Error('Internal Server Error')
    }
  }

  async deleteUser(id: number): Promise<User> {
    try {
      const user = await this.findUserById(id)
      return this.prisma.user.delete({
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
