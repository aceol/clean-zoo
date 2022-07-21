export default class Animal { 

    constructor(private name: string){
    }

    getName(): string {
        return `Mr ${this.name}`;
    }

    toString(): string{
        return this.getName()
    }
}