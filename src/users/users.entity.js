import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    userId : number;

    @Column({ length : 30 })
    email: string;
    
    @Column({ length : 30 })
    password: string;
}