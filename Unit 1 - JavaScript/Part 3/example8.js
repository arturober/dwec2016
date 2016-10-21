'use strict';

(function() {
    var div = document.getElementById("contenido");

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");

    div.appendChild(p1);
    div.appendChild(p2);

    p1.textContent = "I'm the first paragraph";
    p2.appendChild(document.createTextNode("I'm the second paragraph"));

    var p3 = document.createElement("p");
    p3.textContent = "I'm in the middle";
    div.insertBefore(p3, p2);

    var a = document.querySelector("#pie a");
    //a.remove(); // IT WORKS!! (experimental, only latest browsers)
    //a.parentElement.removeChild(a);

    a.title = "Another title...";
    console.log(a.id);
    a.className = "a2";
    console.log(a.hasAttribute("href"));
    console.log(a.hasAttribute("value"));
    console.log(a.getAttribute("class"));
    a.setAttribute("class", "a3");
    console.log(a.className);

    div.style.boxSizing = "border-box";
    div.style.maxWidth = "300px";
    div.style.padding = "50px";
    div.style.color = "white";
    div.style.backgroundColor = "red";

})();
