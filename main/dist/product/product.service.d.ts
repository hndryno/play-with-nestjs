import { Product, productDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<productDocument>);
    all(): Promise<Product[]>;
    create(product: any): Promise<Product>;
    show(id: number): Promise<Product>;
    update(id: number, product: any): Promise<Product>;
}
