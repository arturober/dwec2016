"use strict";
var Person = (function () {
    function Person(name, age) {
        if (name === void 0) { name = "Anonymous"; }
        if (age === void 0) { age = 100; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.changeAgeName = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Person.prototype.toString = function () {
        return "Name " + this.name + ", age: " + this.age;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.class.js.map