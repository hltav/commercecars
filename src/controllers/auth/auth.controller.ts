import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common'
import { Public } from 'src/services/auth/auth.guard'
import { AuthService } from 'src/services/auth/auth.service'

@Controller()
@Public()
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('auth/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password)
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
