(function() {
    "use strict";
    
    var lineProduct = {
        name: "Laser mouse",
        price: 24.95,
        units: 6,
        getTotal() {
            return (this.price*this.units).toFixed(2);
        },
        showName3Seconds() {
            setTimeout(() => {
                console.log(this.name); // We can use "this" with an arrow function here
            }, 3000);
        }
    }

    console.log(lineProduct.getTotal() + "€");
    lineProduct.showName3Seconds();

    function createPerson(name, age) {
        return {name, age}; // Same as {name: name, age: age}
    }

    console.log(createPerson("John", 25)); // Object {name: "John", age: 25}

    let prop = "property";
    let obj = {
        [prop]: "Something"
    }

    console.log(obj);

    let i = 1;
    let obj2 = {
        ["p" + (i++)]: 12,
        ["p" + (i++)]: 45,
        ["p" + (i++)]: 67,
    }

    console.log(obj2);
    for(let i = 1; i <= 3; i++) {
        console.log(`p${i}: ${obj2["p" + i]}`);
    }
})();

