import { IsEmail, IsOptional, IsString, isString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsOptional()
    id?: number

    @IsString()
    @MaxLength(200)
    nama_user : string

    @IsEmail()
    email : string

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    username : string

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password : string
}

