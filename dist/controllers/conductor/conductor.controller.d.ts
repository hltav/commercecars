import { ConductorService } from 'src/services/conductor/conductor.service';
import { CreateConductorDto, UpdateConductorDto } from '../../dto/conductor.dto';
export declare class ConductorController {
    private readonly conductorService;
    constructor(conductorService: ConductorService);
    create(createConductorDto: CreateConductorDto): Promise<{
        id: number;
        name: string;
        cpf: string;
        rg: string;
        cnh: string;
        phone: string;
        address: string;
        houseNumber: string;
        district: string;
        state: string;
        city: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        cpf: string;
        rg: string;
        cnh: string;
        phone: string;
        address: string;
        houseNumber: string;
        district: string;
        state: string;
        city: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        cpf: string;
        rg: string;
        cnh: string;
        phone: string;
        address: string;
        houseNumber: string;
        district: string;
        state: string;
        city: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateConductorDto: UpdateConductorDto): Promise<{
        id: number;
        name: string;
        cpf: string;
        rg: string;
        cnh: string;
        phone: string;
        address: string;
        houseNumber: string;
        district: string;
        state: string;
        city: string;
        created_at: Date;
        updated_at: Date;
    }>;
    delete(id: number): {
        message: string;
    };
}
