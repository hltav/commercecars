import { MarkService } from 'src/services/mark/mark.service';
import { CreateMarkDto, UpdateMarkDto } from '../../dto/mark.dto';
export declare class MarkController {
    private readonly markService;
    constructor(markService: MarkService);
    create(createMarkDto: CreateMarkDto): Promise<{
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
    update(id: string, updateMarkDto: UpdateMarkDto): Promise<{
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
