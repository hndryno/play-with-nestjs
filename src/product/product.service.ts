import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo : Repository<Product>
  ){}
  create(createProductDto: CreateProductDto) {
    // return 'This action adds a new product';
    return this.productRepo.save(createProductDto);
  }

  findAll() {
    return this.productRepo.find();
    // return `This action returns all product`;
  }

  findOne(id: any) {
    return this.productRepo.findOne(id);
    return `This action returns a #${id} product`;
  }

  update(id: any, updateProductDto: UpdateProductDto) {
    updateProductDto.id = id
    this.productRepo.save(updateProductDto)
    // return `This action updates a #${id} product`;

  }

  async remove(id: any) {
    let product = await this.productRepo.findOne(id);
    return this.productRepo.remove(product)
    return `This action removes a #${id} product`;
  }
}
