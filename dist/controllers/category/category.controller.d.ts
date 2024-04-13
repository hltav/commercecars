import { CategoryService } from 'src/services/category/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
