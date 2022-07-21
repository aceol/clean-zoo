import Animal from "../../domain/entities/Animal";

const zoo: Animal[] = [new Animal('lapin'), new Animal('canard'), new Animal('hippopotame'), new Animal('chien')]

export function get(id : number) : Animal{
    return zoo[id];
}

export function getAll() : Animal[]{
    return zoo;
}