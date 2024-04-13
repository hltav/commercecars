import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findUserById(id: number): Promise<any>;
    findAllUsers(): Promise<any[]>;
    findUserByEmail(email: string): Promise<any>;
    createUser(createUsersDto: CreateUsersDto): Promise<Partial<User>>;
    updateUser(id: number, updateUsersDto: UpdateUsersDto): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
