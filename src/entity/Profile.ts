import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

type TGender = "male" | "female" | "others";
@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    gender : TGender;
}