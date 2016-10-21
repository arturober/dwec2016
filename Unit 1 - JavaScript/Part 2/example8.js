'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("My name is: " + this.name);
};

Person.prototype.toString = function() {
    return "Person (" + this.name + " - " + this.age + ")";
}

Person.prototype.valueOf = function() {
    return this.age;
}

var person = new Person("John", 24);
console.log("" + person);
console.log(person.toString());

var arrayPerson = [];
arrayPerson.push(person);
arrayPerson.push(new Person("Ann",46));
arrayPerson.push(new Person("Peter",15));
arrayPerson.push(new Person("Lisa",29));
arrayPerson.push(new Person("Joseph",31));

console.log(arrayPerson.join(" - "));

if(arrayPerson[0] < arrayPerson[1]) {
    console.log("John is younger than Ann");
}

arrayPerson.sort(function(p1, p2) {
    return p1 - p2;
});

console.log(arrayPerson.join(" - "));
console.log(arrayPerson[arrayPerson.length - 1] - arrayPerson[0]);