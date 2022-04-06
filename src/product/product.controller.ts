import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';

@ApiTags('product')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination : './asset/product'
    })
  })) //ini bawaan nestjs sudah terkoneksi langsung dengan multer

  @ApiConsumes('multipart/form-data')
  @ApiBody({type:CreateProductDto})
  //@Body diganti jadi @InjectUser / dekorator yang telah kita buat di folder decorator
  create(@InjectUser() createProductDto: CreateProductDto, @UploadedFile() foto : Express.Multer.File) {
    console.log(createProductDto)
    createProductDto.foto = foto.filename
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
