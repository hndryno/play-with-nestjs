import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Logger } from '@nestjs/common';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){

    }

    @Get()
    async all(){
        return this.productService.all();
    }

    @EventPattern('product_created')
    async create(product:any){
        await this.productService.create({
            id: product.id,
            title: product.title,
            image: product.image,
            likes: product.likes
        })
    }

    @EventPattern('product_updated')
    async update(product:any){
        console.log('masuk hehe')
        console.log(product)
        await this.productService.update(product.id, {
            id: product.id,
            title: product.title,
            image: product.image,
            likes: product.likes
        })
    }

    
}
