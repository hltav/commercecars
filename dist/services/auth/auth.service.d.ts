import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private prisma;
    constructor(usersService: UserService, jwtService: JwtService, prisma: PrismaService);
    signIn(email: string, password: string): Promise<{
        token: string;
    }>;
}
