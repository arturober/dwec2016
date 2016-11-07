import { IPerson } from './iperson';

export class Person implements IPerson {
    constructor(private name: string = "Anonymous",
        private age: number = 100) {}

    getName(): string {
        return this.name;
    }

    changeAgeName(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toString(): string {
        return `Name ${this.name}, age: ${this.age}`;
    }
}