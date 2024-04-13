import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class AdminMiddleware implements NestMiddleware {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    use(req: any, res: any, next: any): Promise<void>;
}
