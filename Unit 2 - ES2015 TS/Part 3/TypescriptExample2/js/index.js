"use strict";
var rect_class_1 = require('./rect.class');
var circle_class_1 = require('./circle.class');
// let rect = new Rect(12, 8);
// console.log(rect.getArea());
// let circ = new Circle(5);
// console.log(circ.getArea());
var shapes = [];
shapes.push(new circle_class_1.Circle(5));
shapes.push(new rect_class_1.Rect(4, 6));
shapes.push(new circle_class_1.Circle(3.5));
shapes.push(new rect_class_1.Rect(6, 2));
shapes.forEach(function (s) {
    if (s instanceof circle_class_1.Circle) {
        console.log("Circle (" + s.getRadius() + "): " + s.getArea().toFixed(2));
    }
    else {
        var rect = s;
        console.log("Rect (" + rect.getWidth() + ", " + rect.getHeight() + ") : " + s.getArea().toFixed(2));
    }
});
var input = document.getElementById("input1");
var button = document.getElementById("button1");
button.addEventListener('click', function (event) {
    alert("Input value -> " + input.value);
});
//# sourceMappingURL=index.js.map