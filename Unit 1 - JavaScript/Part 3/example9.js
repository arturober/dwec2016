'use strict';

(function() {
    var div = document.getElementById("contenido");
    var pclicks = document.getElementById("clicks");
    var numClicks = 0;

    div.addEventListener('click', sayHello);

    function sayHello(event) {
        console.log(event);
        alert("Hola");
    }

    div.addEventListener('click', function (event) {
        pclicks.textContent = "Clicks: " + (++numClicks);
        div.removeEventListener('click', sayHello);
    });

    function detectEvent(event) {
        if(event instanceof MouseEvent) {
            console.log('I\'m a mouse event -> ' + event.type);
        } else if(event instanceof KeyboardEvent) {
            console.log('I\'m a keyboard event -> ' + event.type);
        }

    }

    var input = document.getElementById("input");
    input.addEventListener('click', detectEvent);
    input.addEventListener('keypress', detectEvent);

})();
