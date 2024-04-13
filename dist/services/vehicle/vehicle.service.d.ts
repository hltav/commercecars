import { PrismaService } from 'src/prisma/prisma.service';
import { Vehicle } from '@prisma/client';
import { CreateVehicleDto, UpdateVehicleDto } from 'src/dto/vehicle.dto';
export declare class VehicleService {
    private prisma;
    constructor(prisma: PrismaService);
    findVehicleById(id: number): Promise<any | null>;
    findAllVehicles(): Promise<any[]>;
    createVehicle(createVehicleDto: CreateVehicleDto): Promise<any>;
    updateVehicle(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle>;
    deleteVehicle(id: number): Promise<Vehicle>;
}
