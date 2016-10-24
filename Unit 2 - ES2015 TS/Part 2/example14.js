(function () {
    "use strict";

    function* names() {
        yield "Peter";
        yield "Mary";
    }

    let itNames = names(); // Names iterator
    console.log(itNames.next()); // Object {value: "Peter", done: false}
    console.log(itNames.next()); // Object {value: "Mary", done: false}
    console.log(itNames.next()); // Object {value: undefined, done: true}

    for (let n of names()) {
        console.log(n);
    }

    function* genRandom() {
        for (let i = 0; i < 10; i++) {
            yield Math.floor(Math.random() * 100 + 1);
        }
    }

    for (let num of genRandom()) {
        console.log(num);
    }

    let iterableObject = {
        name: "Peter", bloodType: "B-", age: 50, employed: true,
        [Symbol.iterator]: function* () { // Note the asterisk here!
            let properties = Object.keys(this); // Array with the names of the properties
            for (let property of properties) {
                yield {key: property, val: this[property]}; // On each call to next() we return the next property
            }
        }
    }

    for (let {key, val} of iterableObject) {
        console.log(`${key}: ${val}`);
    }

})();

