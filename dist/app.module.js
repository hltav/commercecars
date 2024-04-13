"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const conductor_controller_1 = require("./controllers/conductor/conductor.controller");
const vehicle_controller_1 = require("./controllers/vehicle/vehicle.controller");
const users_controller_1 = require("./controllers/users/users.controller");
const mark_controller_1 = require("./controllers/mark/mark.controller");
const category_controller_1 = require("./controllers/category/category.controller");
const category_module_1 = require("./services/category/category.module");
const mark_service_1 = require("./services/mark/mark.service");
const conductor_service_1 = require("./services/conductor/conductor.service");
const users_service_1 = require("./services/users/users.service");
const vehicle_service_1 = require("./services/vehicle/vehicle.service");
const mark_module_1 = require("./services/mark/mark.module");
const conductor_module_1 = require("./services/conductor/conductor.module");
const users_module_1 = require("./services/users/users.module");
const vehicle_module_1 = require("./services/vehicle/vehicle.module");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_module_1 = require("./prisma/prisma.module");
const category_service_1 = require("./services/category/category.service");
const auth_service_1 = require("./services/auth/auth.service");
const auth_module_1 = require("./services/auth/auth.module");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./services/auth/auth.guard");
const roles_guard_1 = require("./roles/roles.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_module_1.CategoryModule,
            mark_module_1.MarkModule,
            conductor_module_1.ConductorModule,
            users_module_1.UserModule,
            vehicle_module_1.VehicleModule,
            prisma_module_1.PrismaModule,
            category_module_1.CategoryModule,
            auth_module_1.AuthModule,
        ],
        controllers: [
            app_controller_1.AppController,
            conductor_controller_1.ConductorController,
            vehicle_controller_1.VehicleController,
            users_controller_1.UserController,
            mark_controller_1.MarkController,
            category_controller_1.CategoryController,
            auth_controller_1.AuthController,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuards,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            app_service_1.AppService,
            mark_service_1.MarkService,
            conductor_service_1.ConductorService,
            users_service_1.UserService,
            vehicle_service_1.VehicleService,
            prisma_service_1.PrismaService,
            category_service_1.CategoryService,
            auth_service_1.AuthService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map