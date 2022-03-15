import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<import("./product.model").Product[]>;
    create(product: any): Promise<void>;
    update(product: any): Promise<void>;
}
