import { OmitType } from "@nestjs/mapped-types"
import { IsEmail, IsOptional, IsString, isString, MaxLength, MinLength } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
// import { IsUnique } from "src/etc/validator/unique-validator"
import { User } from "../entities/user.entity"

export class CreateUserDto {
    @IsOptional()
    // @IsExist([User, 'id'])
    id?: number

    @IsString()
    @MaxLength(200)
    nama_user : string

    @IsEmail()
    // @IsExist([User, 'email']) //ini diambil dari validator yang telah kita buat dan registerkan tadi
    // @IsUnique([User, 'email'])
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

// //untuk menghilangkan id dari dto
// export class CreateUserDto extends OmitType(UserDto, ['id']) {}

// //untuk mengambil hanya user Dtonya saja
// export class UserIdDto extends OmitType(UserDto, ['id']) {}