import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { UserService } from '../users/users.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2d' },
    }), 
    
  ],
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService, UserService],
})
export class AuthModule {}

