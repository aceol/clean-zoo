import Animal from "../entities/Animal";

export function seeOneAnimal (get , id:number) : Animal {
    return get(id);
}