import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(
        private productService: ProductService,
        @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
    ){
    }

    @Get()
    async all(){
        // return "all product";\
        // this.client.emit('hello', 'hello from rabbitMq')
        return this.productService.all();
    }

    @Post()
    async create(
        @Body('title') title: string,
        @Body('image') image: string
    ) {
        let product = await this.productService.create({
            title, image
        });

        this.client.emit('product_created', product);

        return product;
    }

    @Get(':id')
    async show(
        @Param('id') id: number 
    ){
        return this.productService.show(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('image') image: string,
    ){

        await this.productService.update(id, {
            title, image
        })

        let product = await this.productService.show(id);

        console.log(product)

        this.client.emit('product_updated', product);

        return product;
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number
    ){
        let product = await this.productService.delete(id);

        this.client.emit('deleted_product', product);

        return product;
    }
}
