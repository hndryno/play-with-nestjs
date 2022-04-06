import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    barcode: string

    @Column()
    nama_product : string

    @Column()
    deskripsi : string

    @Column()
    harga_beli : number

    @Column()
    harga_jual : number

    @Column()
    foto : string

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn({onUpdate:"CURRENT_TIMESTAMP(6)"}) //biar langsung update ketika aksi update
    update_at : Date

    //many to one
    @ManyToOne(() => 
        User, usr => usr.id
    )
    user : User
}

//setelah buat ini langsung deklarasikan ke app.module, biar bisa ditarik