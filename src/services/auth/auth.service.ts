import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  /* async signIn(email, password) {
    const user = await this.usersService.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash)

     if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect password')
    }

    const payload = { sub: user.userId, email: user.email }
    return {
      token: await this.jwtService.signAsync(payload),
      
    }
  } */

  async signIn(email: string, password: string): Promise<{ token: string }> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.passwordHash);

      if (!passwordMatch) {
        throw new UnauthorizedException('Incorrect password');
      }

      const payload = { sub: user.id, email: user.email };
      const token = await this.jwtService.signAsync(payload);

      console.log('Token gerado com sucesso:', token); // Adicione esta linha para verificar se o token está sendo gerado corretamente

      return { token };
    } catch (error) {
      console.error('Erro ao tentar fazer o login:', error); // Adicione esta linha para ver se há erros durante o processo de login
      throw new UnauthorizedException('Failed to sign in');
    }
  }

}


