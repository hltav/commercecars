import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstants } from 'src/services/auth/constants'

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req, res, next) {
    const token = req.headers.authorization

    if (!token) {
      throw new UnauthorizedException()
    }

    try {
      const payload = await this.jwtService.verifyAsync(token.replace('Bearer ', ''), {
        secret: jwtConstants.secret
      })

      if (payload.isAdmin) {
        req.user = payload
        next()
      } else {
        throw new UnauthorizedException()
      }
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
