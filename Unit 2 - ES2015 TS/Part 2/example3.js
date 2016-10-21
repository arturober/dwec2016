(function() {
    "use strict";
    
    let sum = function(a, b) {
        return a + b;
    }

    console.log(sum(23, 15)); // 38

    let sum2 = (a,b) => a + b;
    console.log(sum2(23, 15)); // 38

    let getDiscount = (price, percent) => { 
        let discPer = price * percent / 100;
        return price - discPer;
    };

    console.log(getDiscount(150, 20)); // 120

    let persons = [{
        name: "Peter",
        age: "19"
    },{
        name: "Mary",
        age: "26"
    }, {
        name: "John",
        age: "16"
    }, {
        name: "Allison",
        age: "35"
    }, {
        name: "Eva",
        age: "27"
    }];

    let names = persons
        .filter(p => p.age >= 18) // Get persons (age >= 18)
        .sort((p1, p2) => p2.age - p1.age) // Order by age descending
        .map(p => p.name); // Get an array of person's names

    console.log(names);
})();

