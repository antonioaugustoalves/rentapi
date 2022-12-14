import { Specification } from "../models/Specification";


interface ICreateSpecificationsDTO{
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    create({name, description}: ICreateSpecificationsDTO): void;
    findByName(name:string): Specification | undefined;
    list(): Specification[];

}

export {ICreateSpecificationsDTO, ISpecificationsRepository}