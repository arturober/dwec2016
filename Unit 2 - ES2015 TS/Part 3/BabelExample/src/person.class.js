import {Promise} from 'es6-promise';

class Person {
    constructor(name ="Anonymous", age = 100) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} is ${this.age} years old`;
    }

    promise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.toString()), 3000);
        });
    }

    static getAnonymous() {
        return new Person();
    }
}

const ANONYMOUS = "Anonymous";

export {Person, ANONYMOUS};
