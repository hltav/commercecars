import { Module } from '@nestjs/common';
import { ConductorController } from 'src/controllers/conductor/conductor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConductorService } from './conductor.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConductorController],
  providers: [ConductorService],
})
export class ConductorModule {}
