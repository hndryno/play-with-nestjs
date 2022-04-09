import { OmitType, PickType } from "@nestjs/mapped-types"
import { ApiProperty } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { User } from "src/user/entities/user.entity"
export class KonsumenDto {
    @ApiProperty()
    id : number

    @ApiProperty()
    @IsString()
    alamat_konsumen : string

    @ApiProperty()
    @IsString()
    email_konsumen : string

    @ApiProperty()
    @IsString()
    no_hp_konsumen : string

    @IsObject()
    user: User
}
export class CreateKonsumanDto extends OmitType(KonsumenDto, ['id']) {}
export class KonsumenId extends PickType(KonsumenDto, ['id']) {}