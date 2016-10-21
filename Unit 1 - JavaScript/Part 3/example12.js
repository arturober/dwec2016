'use strict';

(function() {
    var div = document.getElementById("div");
    div.addEventListener('click', function(event) {
        console.log("Button: " + (event.button === 0?'left':
                                    event.button === 1?'middle':'right'));
        console.log("Browser coords: " + event.clientX + 
                ", " + event.clientY);
        console.log("Document coords: " + event.pageX + 
                ", " + event.pageY);
        console.log("Screen coords: " + event.screenX + 
                ", " + event.screenY);
        console.log("Clicks: " + event.detail);
    });
})();
