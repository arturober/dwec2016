'use strict';

var person = {
    _name: "Peter"
};

Object.defineProperty(person, 'name', {
    get: function() {
        return this._name + " Smith";
    },
    set: function(name) {
        if(!name) throw {error:"Name is empty!!"};
        this._name = name;
    }
});

console.log(person.name);
person.name = "Mary";
console.log(person.name);
try {
    person.name = "";
    console.log(person.name);
} catch(ex) {
    console.error("Error: " + ex.error);
}
