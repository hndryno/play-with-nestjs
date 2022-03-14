/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Product, productDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<productDocument>);
    all(): Promise<(import("mongoose").Document<unknown, any, productDocument> & Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
