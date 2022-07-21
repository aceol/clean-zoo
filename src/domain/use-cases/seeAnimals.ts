import Animal from "../entities/Animal"
import { IAnimalRepository } from "../../interface/IAnimalRepository";

export function seeAnimals (animalRepository : IAnimalRepository) : Animal[] {
    return animalRepository.getAll();
}