import { PrismaService } from 'src/prisma/prisma.service';
import { Conductor } from '@prisma/client';
import { CreateConductorDto, UpdateConductorDto } from 'src/dto/conductor.dto';
export declare class ConductorService {
    private prisma;
    constructor(prisma: PrismaService);
    findConductorById(id: number): Promise<Conductor | null>;
    findAllConductors(): Promise<Conductor[]>;
    createConductor(createConductorDto: CreateConductorDto): Promise<Conductor>;
    updateConductor(id: number, updateConductorDto: UpdateConductorDto): Promise<Conductor>;
    deleteConductor(id: number): Promise<Conductor>;
}
