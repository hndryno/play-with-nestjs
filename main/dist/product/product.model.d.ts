/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export declare type productDocument = Product & Document;
export declare class Product {
    id: number;
    title: string;
    image: String;
    likes: string;
}
export declare const ProductSchema: import("mongoose").Schema<import("mongoose").Document<Product, any, any>, import("mongoose").Model<import("mongoose").Document<Product, any, any>, any, any, any>, any, any>;
