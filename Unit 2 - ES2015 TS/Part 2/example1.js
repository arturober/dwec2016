(function() {
    'use strict';

    console.log(h);
    var h = "hello";

    console.log("g before: " + g);
    if(h == "hello") {
        var g = "Goodbye";
    }
    console.log("g after: " + g);

    //console.log(hLet); -> Uncaught ReferenceError: hLet is not defined
    let hLet = "hello";

    if(hLet == "hello") {
        let gLet = "Goodbye";
    }
    //console.log("gLet after: " + gLet); -> Uncaught ReferenceError: gLet is not defined

    let i = -1;
    for(let i = 0; i < 5; i++) {
        console.log(i); // 0..4 (local)
    }
    console.log(i); // -1

    let result = 0;
    
    { // Independent block
        let a = 23; // local scope
        let b = 15; // local scope
        result = a + b; // parent scope
    }
    console.log(result);
    //console.log(a); -> Uncaught ReferenceError: a is not defined

})();

