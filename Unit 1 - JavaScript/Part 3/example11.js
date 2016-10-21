'use strict';

(function() {
    var novale = document.getElementById("novale");
    var pInfo = document.getElementById("info");
    var inputName = document.getElementById("name");
    var form = document.getElementById("form");

    novale.addEventListener('click', function(event) {
        console.log("No puedes ir a google desde aquí");
        event.preventDefault();
    });

    
    inputName.addEventListener('focus', function(event) {
        console.log("Ahora puedes escribir en 'name'");
        inputName.className = "";
    });

    inputName.addEventListener('keypress', function(event) {
        if(event.keyCode === 13) { // Enter
            event.preventDefault(); // No enviamos el formulario
            pInfo.textContent = inputName.value;
        }
    });

    inputName.addEventListener('blur', function(event) {
        console.log("'name' ha perdido el foco");
        if(inputName.value === "") {
            pInfo.textContent = "El campo no puede estar vacío";
            inputName.className = "not-valid";
        } else {
            pInfo.textContent = inputName.value;
        }
    });

    form.addEventListener('submit', function() {
        if(inputName.value === "") {
            event.preventDefault();
            console.log("El nombre está vacío");
        }
    });
})();
