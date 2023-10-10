import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator'

export class CreateMarkDto {
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateMarkDto {
  @IsString()
  @IsOptional()
  name: string
}
