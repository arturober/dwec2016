'use strict';

(function() {
    var i = 1;

    function hello() {
       console.log("Hello timeout " + i++);
       if(i < 10) {
           timeout = setTimeout(hello,2000);
       }
    }

    var timeout = setTimeout(hello,2000);

    var j = 1;
    var interval = setInterval(function() {
        console.log("Hello interval " + j++);
        if(j > 9) {
            clearInterval(interval);
        }
    },2000);

    console.log("Start!!");

})();
