'use strict';

var n = "23";
console.log(+n + 12);
console.log(12 + +n);
console.log(true + null);
console.log(true * null);
console.log(3/0);
console.log(-3/0);

function f(name) {
    var n = name || "John";
    console.log("Hello " + n);
}

f("Peter");
f();

var a = [1,2,3,4,5,6,7];
console.log(a);
a.length = 4;
console.log(a);