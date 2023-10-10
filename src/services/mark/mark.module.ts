import { Module } from '@nestjs/common';
import { MarkController } from 'src/controllers/mark/mark.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MarkService } from './mark.service';

@Module({
  imports: [PrismaModule],
  controllers: [MarkController],
  providers: [MarkService],
})
export class MarkModule {}
