import {Column, Entity, ObjectIdColumn} from 'typeorm';

export enum productFields {
    name = "name",
}


@Entity()
export class TagSchema {
    @ObjectIdColumn()
    _id: string;

    @Column()
    [productFields.name]: string;
}
