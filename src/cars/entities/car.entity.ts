import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    make: string

    @Column({ nullable: false })
    model: string

    @Column({ nullable: false })
    year: string
}
