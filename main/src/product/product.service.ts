import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, productDocument } from './product.model';
import {Model} from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
            @InjectModel(Product.name) private readonly productModel: Model<productDocument>
        ){

    }

    async all(): Promise<Product[]>{
        return this.productModel.find().exec();
    }

    async create(product): Promise<Product>{
        return await this.productModel.create(product);
    }

    async show(id: number): Promise<Product>{
        return await this.productModel.findById(id);
    }

    async update(id: number, product) : Promise<Product>{
        let filter = {id: id}
        console.log('masuk');
        console.log(product)
        // Logger.log('product', product);
        Logger.log(JSON.stringify(product));
        // console.log(product);
        return this.productModel.findOneAndUpdate(filter, product);
    }

    
}
