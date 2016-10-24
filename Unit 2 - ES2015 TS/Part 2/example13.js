(function () {
    "use strict";

    let nums = [12, 24, 35];
    let it = nums[Symbol.iterator]();

    console.log(it.next()); // Object {value: 12, done: false}
    console.log(it.next()); // Object {value: 24, done: false}
    console.log(it.next()); // Object {value: 35, done: false}
    console.log(it.next()); // Object {value: undefined, done: true}
    console.log(it.next()); // Object {value: undefined, done: true}

    let it2 = nums[Symbol.iterator]();
    let item = it2.next();
    while (!item.done) {
        console.log(item.value);
        item = it2.next();
    }

    let iterableObject = {
        name: "Peter",
        bloodType: "B-",
        age: 50,
        employed: true,
        [Symbol.iterator]: function () {
            let properties = Object.keys(this); // Aray with the names of the properties
            let count = 0; // Current property index
            let isDone = false; // When we have finished, we'll return done: true
            let next = () => { // Next function. This is what we return
                if (count === properties.length) isDone = true;
                return { 
                    done: isDone, value: {
                        key: properties[count], val: this[properties[count++]]
                    }
                };
            }
            return { next }; // An object with only the next method in it
        }
    }

    let itObject = iterableObject[Symbol.iterator]();
    let prop = itObject.next();
    while (!prop.done) {
        console.log(`${prop.value.key}: ${prop.value.val}`);
        prop = itObject.next();
    }

    console.log("-----------------");
    for(let {key,val} of iterableObject) {
        console.log(`${key}: ${val}`);
    }

})();

