"use strict";
var backend_1 = require('./backend');
var $ = require('jquery');
$("#button").click(function (event) {
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var doubleProm = doubleNumber(backend_1.Backend.getSum(num1, num2));
    doubleProm.then(function (double) {
        $("#result").val(double);
    });
});
function doubleNumber(p) {
    return p.then(function (n) {
        return n * 2;
    });
}
//# sourceMappingURL=index.js.map