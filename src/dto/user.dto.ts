import { IsEmail, IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateUsersDto {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  @IsBoolean()
  admin: boolean
}

export class UpdateUsersDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password: string
}
