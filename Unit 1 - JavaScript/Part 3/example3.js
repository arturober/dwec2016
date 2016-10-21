'use strict';

(function() {
    var timeout = null;

    document.getElementById("start").addEventListener("click",
    function() {
        timeout = setTimeout(function() {
            var info = document.getElementById("info");
            var nombre = document.getElementById("nombre").value;
            var edad = document.getElementById("edad").value;
            info.textContent = nombre + " - " + edad;
        }, 3000);
    });

    document.getElementById("stop").addEventListener("click",
    function() {
        console.log("Stop!!");
        clearTimeout(timeout);
    });
})();
