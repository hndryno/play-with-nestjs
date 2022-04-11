import { OmitType, PickType } from "@nestjs/mapped-types"
import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsObject, IsString } from "class-validator"
import { User } from "src/user/entities/user.entity"

export class RekeningDto {

    @ApiProperty()
    id: number

    @ApiProperty()
    @IsString()
    nama_rekening: string

    @ApiProperty()
    @IsString()
    keterangan_rekening: string

    @ApiProperty()
    @IsNumber()
    type_rekening: number

    @IsObject()
    user: User

}

export class CreateRekeningDto extends OmitType (RekeningDto, ['id']){}
export class RekeningId extends PickType (RekeningDto, ['id']){}