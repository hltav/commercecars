import { PrismaService } from 'src/prisma/prisma.service';
import { Mark } from '@prisma/client';
import { CreateMarkDto, UpdateMarkDto } from 'src/dto/mark.dto';
export declare class MarkService {
    private prisma;
    constructor(prisma: PrismaService);
    findMarkById(id: number): Promise<Mark | null>;
    findMarkByName(name: string): Promise<Mark | null>;
    findAllMarks(): Promise<Mark[]>;
    createMark(createMarkDto: CreateMarkDto): Promise<Mark>;
    updateMark(id: number, updateMarkDto: UpdateMarkDto): Promise<Mark>;
    deleteMark(id: number): Promise<Mark>;
}
