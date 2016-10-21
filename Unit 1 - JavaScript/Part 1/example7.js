'use strict';

var a = [3, 21, 15, 61, 9, 15];
console.log(a.indexOf(15)); // Prints 2
console.log(a.indexOf(56)); // Prints -1. Not found
console.log(a.lastIndexOf(15)); // Prints 5

var a2 = ["uno", "dos", "tres", "cuatro"];
console.log(a2.indexOf("tres")); // Prints 2

var p1 = { id : 1, name: "Peter"};
var p2 = { id : 2, name: "John"};
var p3 = { id : 3, name: "Mary"};
var p4 = { id : 4, name: "Ann"};
var a3 = [p1, p2, p3, p4];
console.log(a3.indexOf(p3)); // Prints 2
p2.name = "Gustav";
console.log(a3[1]);

var nombres = a3.map(function(elem) {
    return elem.name;
});
console.log(a3);
console.log(nombres);

var a4 = [24, 56, 2, 34, 66];
var result = a4.every(function(elem) {
    return elem % 2 === 0;
});
console.log(result);

var a5 = [24, 53, 2, 35, 66];
var result2 = a5.some(function(elem) {
    return elem % 2 === 1;
});
console.log(result2);

var a6 = ["a", "b", "c", "d"];
a6.forEach(function(elem, index) {
    console.log("Index: " + index + ", value: " + elem);
});

var a7 = a5.map(function(elem) {
    if(elem % 2 === 0)
        return elem * 2;
    else 
        return 1;
});
console.log(a7);

var a8 = a5.filter(function(elem) {
    return elem % 2 === 0;
});
console.log(a8);

var sum = a5.reduce(function(total, elem) {
    return total + elem;
}, 0);
console.log(sum);

var max = a5.reduce(function(max, elem) {
    if(elem > max) return elem;
    return max;
}, 0);
console.log(max);