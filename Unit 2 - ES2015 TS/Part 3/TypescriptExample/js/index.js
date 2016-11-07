"use strict";
var person_class_1 = require('./person.class');
var ar;
ar = ["hola", "hello"];
ar.push("bye");
var p = new person_class_1.Person("Peter", 28);
var name = p.getName();
console.log(p.toString());
p.changeAgeName("John", 31);
console.log(p.toString());
var sum = function (nums) {
    return nums.n1 + nums.n2;
};
console.log(sum({ n1: 23, n2: 14 }));
function areaRect(rect) {
    return !rect.b ? rect.a * rect.a : rect.a * rect.b;
}
var a = 15;
console.log("Area: " + areaRect({ a: a }));
//# sourceMappingURL=index.js.map