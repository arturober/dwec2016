"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ANONYMOUS = exports.Person = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _es6Promise = require("es6-promise");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "toString",
        value: function toString() {
            return this.name + " is " + this.age + " years old";
        }
    }, {
        key: "promise",
        value: function promise() {
            var _this = this;

            return new _es6Promise.Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(_this.toString());
                }, 3000);
            });
        }
    }], [{
        key: "getAnonymous",
        value: function getAnonymous() {
            return new Person();
        }
    }]);

    return Person;
}();

var ANONYMOUS = "Anonymous";

exports.Person = Person;
exports.ANONYMOUS = ANONYMOUS;