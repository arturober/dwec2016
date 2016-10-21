'use strict';

(function() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");

    div1.addEventListener('click', function(event) {
        console.log("Click on div1, Phase: " + event.eventPhase);
        //event.stopPropagation();
    }, true);
    div2.addEventListener('click', function(event) {
        console.log("Click on div2, Phase: " + event.eventPhase);
    }, true);
    div3.addEventListener('click', function(event) {
        console.log("Click on div3, Phase: " + event.eventPhase);
    }, true);
})();
