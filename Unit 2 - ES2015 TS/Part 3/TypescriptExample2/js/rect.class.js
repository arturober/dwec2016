"use strict";
var Rect = (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    } // properties created and assigned
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rect.prototype.getWidth = function () {
        return this.width;
    };
    Rect.prototype.getHeight = function () {
        return this.height;
    };
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=rect.class.js.map