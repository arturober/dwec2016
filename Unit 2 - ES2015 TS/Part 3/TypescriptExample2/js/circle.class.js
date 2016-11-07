"use strict";
var constants_1 = require('./constants');
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return constants_1.PI * (Math.pow(this.radius, 2));
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=circle.class.js.map