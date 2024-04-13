export declare class CreateVehicleDto {
    chassis: string;
    plate: string;
    renavam: string;
    km: number;
    price: string;
    model: string;
    uf: string;
    year: number;
    markId: number;
    categoryId: number;
}
export declare class UpdateVehicleDto {
    km?: number;
    uf?: string;
    price: string;
    markId?: number;
    categoryId?: number;
}
