'use strict';

var person1 = {
    name: "Peter Json",
    sayHello: function() {
        console.log("My name is: " + this.name);
    }
};

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("My name is: " + this.name);
};

var person2 = new Person("Alice");
var person3 = new Person("Bob");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(typeof person1);
console.log(typeof person2);
console.log(person1 instanceof Object);
console.log(person2 instanceof Person);

person1.sayHello();
person2.sayHello();
person3.sayHello();