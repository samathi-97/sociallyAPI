import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign {

    @PrimaryGeneratedColumn()
     public campaignId: number;

    @Column()
    public campaignName: String;

    @Column()
    public budget: number;

    @Column()
    public startDate: Date;

    @Column()
    public endDate: Date ;

}

