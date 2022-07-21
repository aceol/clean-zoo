import Animal from "../domain/entities/Animal";
import { get, getAll } from "../infrastructure/repositories/animalRepository";

export class IAnimalRepository {
    getAllAnimals() :Animal[] {
        return getAll()
    }
    getOneAnimal(id: number) :Animal {
        return get(id)
    }
}