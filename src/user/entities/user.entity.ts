import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_user : string

    @Column()
    email : string

    @Column()
    username : string

    @Column()
    password : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    update_at : Date 

}
