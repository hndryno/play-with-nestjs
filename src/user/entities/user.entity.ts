import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

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

    @Column()
    password : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    update_at : Date 

}
