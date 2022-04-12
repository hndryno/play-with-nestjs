import { PickType } from "@nestjs/mapped-types"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsNumber, IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/user.dto"
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
    user: UserDto

}

export class CreateRekeningDto extends OmitType (RekeningDto, ['id']){}
export class RekeningIdDto extends PickType (RekeningDto, ['id']){}