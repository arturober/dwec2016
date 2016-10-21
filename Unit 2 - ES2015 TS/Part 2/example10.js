(function() {
    "use strict";
    
    var a = ["Peter", "John", "Mary"];
    console.log("-- .forEach ---");
    a.forEach(name => console.log(name));

    console.log("-- for..in ---");
    for(let index in a) {
        console.log(a[index]);
    }

    console.log("-- for..of ---");
    for(let name of a) {
        console.log(name);
    }

    console.log("-- STRING: for..of ---");
    var str = "abcdefghi";

    for(let letter of str) {
        if(letter.match(/^[aeiou]$/)) {
            console.log(letter + " is a vowel");
        } else {
            console.log(letter + " is a consonant");
        }
    }

    let obj = {
        prop1: 12,
        prop2: 26,
        prop3: 34
    }

    console.log("--OBJECT: for..in ---");
    for(let prop in obj) {
        console.log(prop + ": " + obj[prop]);
    }

    console.log("--OBJECT: for..of ---");
    for(let prop of obj) { // ERROR
        console.log(prop);
    }
})();

