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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUserById(id) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { id },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const userResponse = {
                id: user.id,
                username: user.name,
                email: user.email,
            };
            return userResponse;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async findAllUsers() {
        const users = await this.prisma.user.findMany();
        const usersResponse = users.map((user) => ({
            id: user.id,
            username: user.name,
            email: user.email,
            admin: user.admin,
        }));
        return usersResponse;
    }
    async findUserByEmail(email) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(createUsersDto) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(createUsersDto.password, saltRounds);
            const createdUser = await this.prisma.user.create({
                data: {
                    name: createUsersDto.name,
                    email: createUsersDto.email,
                    passwordHash: hashedPassword,
                    admin: createUsersDto.admin || false,
                },
            });
            const filteredUser = {
                id: createdUser.id,
                name: createdUser.name,
                email: createdUser.email,
            };
            return filteredUser;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException('Email already exists');
            }
            throw new Error('Internal Server Error');
        }
    }
    async updateUser(id, updateUsersDto) {
        try {
            await this.findUserById(id);
            return this.prisma.user.update({
                where: { id },
                data: updateUsersDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new Error('Internal Server Error');
        }
    }
    async deleteUser(id) {
        try {
            const user = await this.findUserById(id);
            return this.prisma.user.delete({
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=users.service.js.map