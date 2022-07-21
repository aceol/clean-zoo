import Animal from "../entities/Animal";

export function seeOneAnimal (zoo:Animal[], id:number) : Animal {
    return zoo[id];
}