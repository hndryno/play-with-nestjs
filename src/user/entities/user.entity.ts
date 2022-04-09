import { Konsumen } from "src/konsumen/entities/konsumen.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_user : string

    @Column({unique: true})
    email : string

    @Column()
    username : string

    @Column({select: false}) //membuang password dari return json
    password : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    update_at : Date 

    @OneToMany(() => Product, prdct => prdct.id) //relasi one to many ke product
    product: Product

    @OneToMany(() => Konsumen, kons => kons.id) //relasi one to many ke product
    konsumen: Konsumen

}

//setelah buat ini langsung deklarasikan ke app.module, biar bisa ditarik
