import { VehicleService } from 'src/services/vehicle/vehicle.service';
import { CreateVehicleDto, UpdateVehicleDto } from '../../dto/vehicle.dto';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    create(createVehicleDto: CreateVehicleDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<{
        id: number;
        chassis: string;
        plate: string;
        renavam: string;
        km: number;
        model: string;
        uf: string;
        price: string;
        year: number;
        markId: number;
        categoryId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        chassis: string;
        plate: string;
        renavam: string;
        km: number;
        model: string;
        uf: string;
        price: string;
        year: number;
        markId: number;
        categoryId: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
