"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let VehicleService = class VehicleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findVehicleById(id) {
        try {
            const vehicle = await this.prisma.vehicle.findUnique({
                where: { id },
                include: {
                    mark: true,
                    category: true,
                },
            });
            if (!vehicle) {
                throw new common_1.NotFoundException('Vehicle not found');
            }
            const vehicleResponse = {
                id: vehicle.id,
                chassis: vehicle.chassis,
                plate: vehicle.plate,
                renavam: vehicle.renavam,
                km: vehicle.km,
                model: vehicle.model,
                uf: vehicle.uf,
                price: vehicle.price,
                year: vehicle.year,
                mark: {
                    name: vehicle.mark.name,
                },
                category: {
                    name: vehicle.category.name,
                },
            };
            return vehicleResponse;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async findAllVehicles() {
        const vehicles = await this.prisma.vehicle.findMany({
            include: {
                mark: true,
                category: true,
            },
        });
        const vehiclesResponse = vehicles.map((vehicle) => ({
            id: vehicle.id,
            chassis: vehicle.chassis,
            plate: vehicle.plate,
            renavam: vehicle.renavam,
            km: vehicle.km,
            model: vehicle.model,
            uf: vehicle.uf,
            price: vehicle.price,
            year: vehicle.year,
            mark: {
                name: vehicle.mark.name,
            },
            category: {
                name: vehicle.category.name,
            },
        }));
        return vehiclesResponse;
    }
    async createVehicle(createVehicleDto) {
        console.log(createVehicleDto);
        try {
            const { markId, categoryId, ...vehicleData } = createVehicleDto;
            const mark = await this.prisma.mark.findUnique({
                where: { id: createVehicleDto.markId },
            });
            if (!mark) {
                throw new common_1.NotFoundException('Mark not found');
            }
            const category = await this.prisma.category.findUnique({
                where: { id: createVehicleDto.categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException('Category not found');
            }
            const createdVehicle = await this.prisma.vehicle.create({
                data: {
                    ...vehicleData,
                    mark: { connect: { id: markId } },
                    category: { connect: { id: categoryId } },
                },
                include: {
                    mark: true,
                    category: true,
                },
            });
            console.log(createdVehicle);
            const vehicleResponse = {
                id: createdVehicle.id,
                chassis: createdVehicle.chassis,
                plate: createdVehicle.plate,
                renavam: createdVehicle.renavam,
                km: createdVehicle.km,
                model: createdVehicle.model,
                uf: createdVehicle.uf,
                year: createdVehicle.year,
                mark: {
                    name: createdVehicle.mark.name,
                },
                category: {
                    name: createdVehicle.category.name,
                },
            };
            return vehicleResponse;
        }
        catch (error) {
            console.log(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException('Chassis or plate already exists');
            }
            else {
                throw new Error('Internal Server Error');
            }
        }
    }
    async updateVehicle(id, updateVehicleDto) {
        try {
            await this.findVehicleById(id);
            return this.prisma.vehicle.update({
                where: { id },
                data: updateVehicleDto,
                include: {
                    mark: true,
                    category: true,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async deleteVehicle(id) {
        try {
            const vehicle = await this.findVehicleById(id);
            return this.prisma.vehicle.delete({
                where: { id },
                include: {
                    mark: true,
                    category: true,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
};
exports.VehicleService = VehicleService;
exports.VehicleService = VehicleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VehicleService);
//# sourceMappingURL=vehicle.service.js.map