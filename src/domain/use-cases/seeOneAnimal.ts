import { IAnimalRepository } from "../../interface/IAnimalRepository";
import Animal from "../entities/Animal";

export function seeOneAnimal (animalRepository : IAnimalRepository , id:number) : Animal {
    return animalRepository.get(id);
}