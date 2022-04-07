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
    return this.productRepo.save(createProductDto);
  }

  findAll() {
    return this.productRepo.find({relations:['user']}); //relation didapatkan dari product entity
  }

  findOne(id: any) {
    return this.productRepo.findOne(id);
  }

  update(id: any, updateProductDto: UpdateProductDto) {
    updateProductDto.id = id
    this.productRepo.save(updateProductDto)

  }

  async remove(id: any) {
    let product = await this.productRepo.findOne(id);
    return this.productRepo.remove(product);
  }
}
