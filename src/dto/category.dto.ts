import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator'

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  name: string
}
