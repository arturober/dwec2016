(function () {
    "use strict";

    function Company(name) {
        this.name = name;
    }

    function Employee(name) {
        this.name = name;
    }

    let c1 = new Company("My company");
    let empC1 = [new Employee("Peter"), new Employee("Mary")];

    let companyMap = new Map();
    companyMap.set(c1, empC1);
    console.log(companyMap);
    console.log(companyMap.get(c1));
})();

