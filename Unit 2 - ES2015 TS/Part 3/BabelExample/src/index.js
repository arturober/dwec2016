import {Person, ANONYMOUS} from './person.class';

let p = new Person("Peter", 34);
console.log(p.toString());
p.promise().then(personStr => console.log(personStr));

let anon = Person.getAnonymous();
console.log(anon.toString());
