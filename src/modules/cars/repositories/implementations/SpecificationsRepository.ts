import { Specification } from "../../models/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];
    private static INSTANCE: SpecificationsRepository;

    private constructor(){
        this.specifications = [];
    }

    public static getInstance(){
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE =new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }


    create({ name, description }: ICreateSpecificationsDTO): void {
      
        const specification = new Specification();
        Object.assign(specification,{
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }


    findByName(name: string): Specification | undefined{
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }

    
}

export {SpecificationsRepository}