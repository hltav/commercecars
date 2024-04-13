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
exports.MarkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let MarkService = class MarkService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMarkById(id) {
        return this.prisma.mark.findUnique({
            where: { id },
        });
    }
    async findMarkByName(name) {
        return this.prisma.mark.findFirst({
            where: { name },
        });
    }
    async findAllMarks() {
        return this.prisma.mark.findMany();
    }
    async createMark(createMarkDto) {
        try {
            const existingMark = await this.findMarkByName(createMarkDto.name);
            if (existingMark) {
                throw new common_1.ConflictException('Mark with the same name already exists');
            }
            return await this.prisma.mark.create({
                data: createMarkDto,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async updateMark(id, updateMarkDto) {
        const Mark = await this.findMarkById(id);
        if (!Mark) {
            throw new common_1.NotFoundException('Mark not found');
        }
        return this.prisma.mark.update({
            where: { id },
            data: updateMarkDto,
        });
    }
    async deleteMark(id) {
        const Mark = await this.findMarkById(id);
        if (!Mark) {
            throw new common_1.NotFoundException('Mark not found');
        }
        return this.prisma.mark.delete({
            where: { id },
        });
    }
};
exports.MarkService = MarkService;
exports.MarkService = MarkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MarkService);
//# sourceMappingURL=mark.service.js.map