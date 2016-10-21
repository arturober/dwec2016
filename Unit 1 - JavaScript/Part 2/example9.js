'use strict';

var Library = {};

(function(library) {
    function f1() {
        console.log("Hello from example9.js");
    }

    library.myMethod = function() {
        f1();
    }
})(Library);

Library.myMethod();
    
    


