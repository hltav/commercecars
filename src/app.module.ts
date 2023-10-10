import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConductorController } from './controllers/conductor/conductor.controller'
import { VehicleController } from './controllers/vehicle/vehicle.controller'
import { UserController } from './controllers/users/users.controller'
import { MarkController } from './controllers/mark/mark.controller'
import { CategoryController } from './controllers/category/category.controller'
import { CategoryModule } from './services/category/category.module'
import { MarkService } from './services/mark/mark.service'
import { ConductorService } from './services/conductor/conductor.service'
import { UserService } from './services/users/users.service'
import { VehicleService } from './services/vehicle/vehicle.service'
import { MarkModule } from './services/mark/mark.module'
import { ConductorModule } from './services/conductor/conductor.module'
import { UserModule } from './services/users/users.module'
import { VehicleModule } from './services/vehicle/vehicle.module'
import { PrismaService } from './prisma/prisma.service'
import { PrismaModule } from './prisma/prisma.module'
import { CategoryService } from './services/category/category.service'
import { AuthService } from './services/auth/auth.service'
import { AuthModule } from './services/auth/auth.module'
import { AuthController } from './controllers/auth/auth.controller'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuards } from './services/auth/auth.guard'
import { RolesGuard } from './roles/roles.guard'


@Module({
  imports: [
    CategoryModule,
    MarkModule,
    ConductorModule,
    UserModule,
    VehicleModule,
    PrismaModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    ConductorController,
    VehicleController,
    UserController,
    MarkController,
    CategoryController,
    AuthController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuards,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AppService,
    MarkService,
    ConductorService,
    UserService,
    VehicleService,
    PrismaService,
    CategoryService,
    AuthService,
  ],
})
export class AppModule {
  
}
