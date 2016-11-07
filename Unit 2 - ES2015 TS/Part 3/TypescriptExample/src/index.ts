import { Person } from './person.class';

let ar: string[];
ar = ["hola", "hello"];
ar.push("bye");

let p: Person = new Person("Peter", 28);
let name: string = p.getName();
console.log(p.toString());

p.changeAgeName("John", 31);
console.log(p.toString());

let sum = (nums: { n1: number, n2: number }): number => {
    return nums.n1 + nums.n2;
}

console.log(sum({ n1: 23, n2: 14 }));

function areaRect(rect: { a: number, b?: number }): number {
    return  !rect.b ? rect.a * rect.a : rect.a * rect.b;
}

let a: number = 15;
console.log(`Area: ${areaRect({a: a})}`);

