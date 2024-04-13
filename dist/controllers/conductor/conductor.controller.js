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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConductorController = void 0;
const common_1 = require("@nestjs/common");
const conductor_service_1 = require("../../services/conductor/conductor.service");
const conductor_dto_1 = require("../../dto/conductor.dto");
const auth_guard_1 = require("../../services/auth/auth.guard");
let ConductorController = class ConductorController {
    constructor(conductorService) {
        this.conductorService = conductorService;
    }
    create(createConductorDto) {
        return this.conductorService.createConductor(createConductorDto);
    }
    findAll() {
        return this.conductorService.findAllConductors();
    }
    findOne(id) {
        return this.conductorService.findConductorById(+id);
    }
    update(id, updateConductorDto) {
        return this.conductorService.updateConductor(+id, updateConductorDto);
    }
    delete(id) {
        const deleted = this.conductorService.deleteConductor(+id);
        if (deleted) {
            return { message: 'Item removido com sucesso' };
        }
        else {
            return { message: 'Item não encontrado' };
        }
    }
};
exports.ConductorController = ConductorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [conductor_dto_1.CreateConductorDto]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, conductor_dto_1.UpdateConductorDto]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "delete", null);
exports.ConductorController = ConductorController = __decorate([
    (0, common_1.Controller)('conductors'),
    (0, auth_guard_1.Public)(),
    __metadata("design:paramtypes", [conductor_service_1.ConductorService])
], ConductorController);
//# sourceMappingURL=conductor.controller.js.map