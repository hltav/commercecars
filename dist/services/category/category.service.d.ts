import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    findCategoryById(id: number): Promise<Category | null>;
    findCategoryByName(name: string): Promise<Category | null>;
    findAllCategories(): Promise<Category[]>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: number): Promise<Category>;
}
