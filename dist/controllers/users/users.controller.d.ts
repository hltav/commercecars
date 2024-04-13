import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto';
import { UserService } from 'src/services/users/users.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    create(createUsersDto: CreateUsersDto): Promise<Partial<{
        id: number;
        email: string;
        name: string;
        passwordHash: string;
        admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    findByEmail(email: string): Promise<any>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<{
        id: number;
        email: string;
        name: string;
        passwordHash: string;
        admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        passwordHash: string;
        admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
