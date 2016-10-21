'use strict';

(function() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    document.body.addEventListener('click', function() {
        console.log("Click on body");
    });

    div1.addEventListener('click', function(event) {
        console.log("Click on div1");
        event.stopPropagation();
    });
    div2.addEventListener('click', function(event) {
        console.log("Click on div2");
        event.stopPropagation()
        event.stopPropagation()
            
    });
})();
