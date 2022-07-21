import Animal from "../../domain/entities/Animal";
import { IAnimalRepository } from "../../interface/IAnimalRepository";

const zoo: Animal[] = [new Animal('lapin'), new Animal('canard'), new Animal('hippopotame'), new Animal('chien')]


export class animalRepository implements IAnimalRepository{
    get(id : number) : Animal{
        return zoo[id];
    }
    getAll() : Animal[]{
        return zoo;
    }
}