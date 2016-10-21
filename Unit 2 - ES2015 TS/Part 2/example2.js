(function() {
    "use strict";
    var i;
    let functions = [];
    for( i = 0; i < 10; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    functions[0](); // 10
    functions[1](); // 10

    let functionsLet = [];
    for(let i = 0; i < 10; i++) {
        functionsLet.push(function() {
            console.log(i);
        });
    }
    functionsLet[0](); // 0
    functionsLet[1](); // 1

    let div = document.getElementById("div");
    for(let i = 1; i <= 5; i++) { // Try it with var!!!!
        let p = document.createElement("p");
        p.textContent = "Paragraph " + i;
        div.appendChild(p);
        p.addEventListener('click', function(event) {
            alert("Paragraph " + i);
        });
    }

    const CONST = "Hello";
    try {
        CONST = "Goodbye"; //-> throws TypeError: Assignment to constant variable.
    } catch(e) {
        console.log("Error: " + e);
    }
})();

