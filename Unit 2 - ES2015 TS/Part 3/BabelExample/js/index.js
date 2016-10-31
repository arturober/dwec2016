"use strict";

var _person = require("./person.class");

var p = new _person.Person("Peter", 34);
console.log(p.toString());
p.promise().then(function (personStr) {
  return console.log(personStr);
});

var anon = _person.Person.getAnonymous();
console.log(anon.toString());