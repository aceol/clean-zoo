import Animal from "../entities/Animal"

export function seeAnimals (zoo:Animal[]) : String[] {
    return zoo.map((animal: Animal): String => animal+'')
}