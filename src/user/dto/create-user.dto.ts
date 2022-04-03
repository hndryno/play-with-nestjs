import { IsEmail, IsOptional, IsString, isString, MaxLength, MinLength } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { User } from "../entities/user.entity"

export class CreateUserDto {
    @IsOptional()
    id?: number

    @IsString()
    @MaxLength(200)
    nama_user : string

    @IsEmail()
    @IsExist([User, 'email']) //ini diambil dari validator yang telah kita buat dan registerkan tadi
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

