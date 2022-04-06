import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class UserDto {

    @ApiProperty({required: true}) //untuk swagger
    @IsString()
    @MaxLength(200)
    nama_user : string

    @ApiProperty({required: true}) //untuk swagger
    @IsEmail()
    email : string

    @ApiProperty({required: true}) //untuk swagger
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    username : string

    @ApiProperty({required: true}) //untuk swagger
    @IsString()
    @MinLength(6)
    @MaxLength(200)
    password : string

}