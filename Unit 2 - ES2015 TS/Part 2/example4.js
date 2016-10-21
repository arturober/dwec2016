(function() {
    "use strict";
    
    function sayHello(name = "Anonymous") {
        console.log("Hello " + name);
    }

    sayHello("John");
    sayHello();

    let defaultPerson = { name: "Anonymous", age: 20};
    function showData(person = defaultPerson) {
        console.log(`Name: ${person.name}. Age: ${person.age}`);
    }

    showData({name: "Mary", age: 36});
    showData();

    function showData(name = "Anonymous", age = 20) {
        console.log(`Name: ${name}. Age: ${age}`);
    }

    showData(undefined, 34); // We use the default name
})();

