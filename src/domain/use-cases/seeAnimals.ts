import Animal from "../entities/Animal"

export function seeAnimals (animalRepository : IAnimalRepository) : Animal[] {
    return animalRepository.getAll();
}