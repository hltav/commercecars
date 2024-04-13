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
exports.ConductorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ConductorService = class ConductorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findConductorById(id) {
        try {
            const conductor = await this.prisma.conductor.findUnique({
                where: { id },
            });
            if (!conductor) {
                throw new common_1.NotFoundException('Conductor not found');
            }
            return;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async findAllConductors() {
        return this.prisma.conductor.findMany();
    }
    async createConductor(createConductorDto) {
        try {
            return await this.prisma.conductor.create({
                data: createConductorDto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException('CPF already exists');
            }
            throw new Error('Internal Server Error');
        }
    }
    async updateConductor(id, updateConductorDto) {
        try {
            await this.findConductorById(id);
            return this.prisma.conductor.update({
                where: { id },
                data: updateConductorDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async deleteConductor(id) {
        try {
            const conductor = await this.findConductorById(id);
            return this.prisma.conductor.delete({
                where: { id },
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
exports.ConductorService = ConductorService;
exports.ConductorService = ConductorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConductorService);
//# sourceMappingURL=conductor.service.js.map