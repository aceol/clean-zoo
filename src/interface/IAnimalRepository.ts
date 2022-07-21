import Animal from "../domain/entities/Animal";

export interface IAnimalRepository {
    getAll() :Animal[] 
    get(id: number) :Animal
}