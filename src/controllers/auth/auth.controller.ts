import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request } from '@nestjs/common'
import { Public } from 'src/services/auth/auth.guard'
import { AuthService } from 'src/services/auth/auth.service'


@Controller()
@Public()
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  /* signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password)
  } */
  async login(@Body() credentials: { username: string; password: string }) {
    try {
      const user = await this.authService.signIn(credentials.username, credentials.password);
      // Se as credenciais forem válidas, você pode retornar informações do usuário ou um token JWT aqui
      if (user) {
        return { user };
      } else {
        throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
