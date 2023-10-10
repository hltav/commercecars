import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controllers/category/category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
