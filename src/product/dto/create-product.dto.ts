import { PickType } from "@nestjs/mapped-types"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsNumber, IsObject, IsOptional, IsString } from "class-validator"
// import { CreateUserDto } from "src/user/dto/create-user.dto"
import { UserDto } from "src/user/dto/user.dto"

export class ProductDto{
   
    @ApiProperty()
    id: number

    @ApiProperty()
    @IsString()
    barcode: string

    @ApiProperty()
    @IsString()
    nama_product : string

    @ApiProperty()
    @IsString()
    deskripsi : string

    @ApiProperty()
    @IsNumber()
    harga_beli : number

    @ApiProperty()
    @IsNumber()
    harga_jual : number

    @ApiProperty({format: 'binary'})
    @IsOptional()
    foto : string

    //untuk set relasi product dengan user
    @IsObject()//karena kita tidak menginputkan user, ini akan secara otomatis terinput by user yang login
    user : UserDto
}

// export class CreateProductDto extends OmitType(ProductDto, ['id']) {}
export class CreateProductDto extends OmitType(ProductDto, ['id']) {}
export class ProductIdDto extends PickType(ProductDto, ['id']) {}
