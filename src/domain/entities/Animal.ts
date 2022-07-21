export default class Animal { 

    constructor(private name: String){
    }

    getName(): String {
        return `Mr ${this.name}`;
    }

    toString(): String{
        return this.getName()
    }
}