import { IsString, IsInt, IsOptional, IsNotEmpty, Length, Matches, isString } from 'class-validator'


export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @Length(17, 17)
  chassis: string

  @IsString()
  @IsNotEmpty()
  @Length(17, 17)
  plate: string

  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  @Matches(/^[0-9]+$/, { message: 'Renavam deve conter apenas dígitos numéricos' })
  renavam: string

  @IsInt()
  @IsNotEmpty()
  km: number

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, { message: 'Price deve conter apenas dígitos numéricos' })
  price: string

  @IsString()
  @IsNotEmpty()
  model: string

  @IsString()
  @IsNotEmpty()
  uf: string

  @IsInt()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, { message: 'Ano deve conter apenas dígitos numéricos' })
  year: number

  @IsInt()
  markId: number

  @IsInt()
  categoryId: number
}

export class UpdateVehicleDto {
  @IsInt()
  @IsOptional()
  km?: number

  @IsString()
  @IsOptional()
  uf?: string

  @IsString()
  @IsOptional()
  @Matches(/^[0-9]+$/, { message: 'Price deve conter apenas dígitos numéricos' })
  price: string

  @IsInt()
  @IsOptional()
  markId?: number

  @IsInt()
  @IsOptional()
  categoryId?: number
}
