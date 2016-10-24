(function() {
    "use strict";
    
    let persons = [];
    
    function savePerson(personData = {}) {
        let defaults = {
            name: "Anonymous",
            age: 0,
            email: "nodefined@nomail.com",
            active: false
        }

        let person = Object.assign({}, defaults, personData);
        persons.push(person);
    }

    savePerson();
    savePerson({name: "Peter", age: 19});
    savePerson({name: "Mary", age: 25, email: "mary@mary.es"});

    console.log(persons);
})();

