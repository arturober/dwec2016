'use strict';

var obj = new Object();
console.log(obj);

var objJson = {};
console.log(objJson);

obj.a = 12;
obj.method = function() {
    console.log("Hello world");
}

console.log(obj);
console.log(obj.toString());

obj.toString = function() {
    return "My property a is " + this.a;
}

console.log(obj.toString()); // My object
console.log(obj.__proto__.toString()); // Object class

console.log(typeof obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

obj["b"] = 100;
console.log(obj.b);