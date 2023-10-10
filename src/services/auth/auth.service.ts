import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(email, password) {
    const user = await this.usersService.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash)

    console.log(passwordMatch)

    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect password')
    }

    const payload = { sub: user.userId, email: user.email }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
