import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileKita{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length : 500 })
    nama: string;
    
    @Column('text')
    deskripsi: string;

    @Column()
    isPublic: boolean;
}