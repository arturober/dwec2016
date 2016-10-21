'use strict';

(function() {
    var items = document.querySelectorAll("#list li");

    function activate(event) {
        if(!event.target.className) {
            event.target.className = "active";
        } else {
            event.target.className = "";
        }   
    }

    items.forEach(function(item) {
        item.addEventListener('click', activate);
    });

    /**
     * Change the classes of an element
     */
    var classes = document.getElementById("list").classList;
    classes.forEach(function(c) {
        console.log("Class: " + c);
    });
    classes.remove("c2");
    classes.add("c3");
    console.log("After modification...");
    classes.forEach(function(c) {
        console.log("Class: " + c);
    });
})();
