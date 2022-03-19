import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type productDocument = Product & Document;

@Schema()
export class Product{
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    image: String;

    @Prop()
    likes: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);