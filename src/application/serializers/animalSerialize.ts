import Animal from "../../domain/entities/Animal";

export function serialize(animal : Animal) : string {
    return animal.toString();
}

export function serializeAll(animals : Animal[]) : String[] {
    return animals.map((animal : Animal) => animal.toString())
}