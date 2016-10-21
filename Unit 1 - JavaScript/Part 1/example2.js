'use strict';

/*************************
 * Functions
 *************************/
function sayHello(name) {
    console.log("Hello " + name);
}

var sayHello2 = sayHello;

sayHello("World!");
sayHello();
console.log(typeof sayHello);
sayHello2("Peter");
/************************************** 
 * Functions with return
**************************************/
function sum(n1, n2) {
    return n1 + n2;
}

var r = sum(3, 6);
console.log(r);
/************************************** 
 * Anonymous functions
****************************************/
var callFunc = function(f, param) {
    f(param);
};

callFunc(function(name) {
    console.log("Hello " + name);
}, "Mary");