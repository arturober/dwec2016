'use strict';

(function() {
    var buttonAlert = document.getElementById("showAlert");

    buttonAlert.addEventListener("click", function() {
        alert("Hello!, I'm an alert message.");
        console.log("Alert was closed");
    });

    var buttonConfirm = document.getElementById("showConfirm");

    buttonConfirm.addEventListener("click", function() {
        var response = confirm("Do you want more money?");
        if(response) {
            console.log("Get a better job");
        } else {
            console.log("Are you sure? OK...");
        }
    });

    var buttonPrompt = document.getElementById("showPrompt");

    buttonPrompt.addEventListener("click", function() {
        var response = prompt("What's your name", "Idiot");
        
        if(response) {
            console.log("Your name is " + response);
        } else {
            console.log("Tell me your name!!");
        }
    });
})();
