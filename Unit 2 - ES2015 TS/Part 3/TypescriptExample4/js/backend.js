"use strict";
var es6_promise_1 = require("es6-promise");
var Backend = (function () {
    function Backend() {
    }
    Backend.getSum = function (num1, num2) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(num1 + num2);
            }, 3000);
        });
    };
    return Backend;
}());
exports.Backend = Backend;
//# sourceMappingURL=backend.js.map