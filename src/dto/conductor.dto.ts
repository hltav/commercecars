import { IsString, IsInt, IsOptional, IsNotEmpty, Length, Matches } from 'class-validator'

export class CreateConductorDto {
  @IsString()
  name: string

  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  @Matches(/^[0-9]+$/, { message: 'CPF deve conter apenas dígitos numéricos' })
  cpf: string

  @IsString()
  @Length(11, 11)
  @Matches(/^[0-9]+$/, { message: 'CNH deve conter apenas dígitos numéricos' })
  cnh: string

  @IsString()
  rg: string

  @IsString()
  @Matches(/^[0-9]+$/, { message: 'PHONE deve conter apenas dígitos numéricos' })
  phone: string

  @IsString()
  address: string

  @IsString()
  houseNumber: string

  @IsString()
  district: string

  @IsString()
  state: string

  @IsString()
  city: string
}

export class UpdateConductorDto {
  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  houseNumber?: string

  @IsOptional()
  @IsString()
  district?: string

  @IsOptional()
  @IsString()
  state?: string

  @IsOptional()
  @IsString()
  city?: string
}
