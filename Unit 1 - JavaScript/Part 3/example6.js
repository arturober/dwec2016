'use strict';

(function() {
    var bodyNodes = document.body.children;
    for(var i = 0; i < bodyNodes.length; i++) {
        console.log(bodyNodes[i]);
    }

    var p1 = document.getElementById("p1");
    console.log("p#" + p1.id + " -> " + p1.textContent);
    //var p2 = bodyNodes[1]; // OK
    var p2 = p1.nextElementSibling; // Next element from p1
    console.log("p#" + p2.id + " -> " + p2.textContent);

    //var paras = document.getElementsByTagName("p");
    var paras = document.getElementsByClassName("p");
    for(var i = 0; i < paras.length; i++) {
        console.log("p#" + paras[i].id + " -> " + 
                    paras[i].textContent);
    }
})();
