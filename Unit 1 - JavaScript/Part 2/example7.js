'use strict';

var methods = {
    sayHello: function() {
        console.log("Hello from " + this.name);
    },
    sayGoodBye: function() {
        console.log("Goodbye from " + this.name);
    }
}

var person1 = Object.create(methods);
person1.name = "Peter";

var person2 = Object.create(methods);
person2.name = "John";

console.log(person1);
console.log(person2);
person1.sayHello();
person2.sayHello();
