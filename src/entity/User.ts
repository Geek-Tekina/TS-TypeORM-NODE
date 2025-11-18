import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Profile } from "./Profile";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;

    @OneToOne(() => Profile, {cascade : true, onDelete : "CASCADE"}) // this user has a profile o-o
    @JoinColumn()
    profile : Profile;
}

