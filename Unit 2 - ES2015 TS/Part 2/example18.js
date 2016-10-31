(function () {
    "use strict";

    function Company(name) {
        this.name = name;
    }

    function Employee(name) {
        this.name = name;
    }

    Employee.prototype.toString = function() {
        return this.name;
    };

    let c1 = new Company("My company");
    let empC1 = [new Employee("Peter"), new Employee("Mary")];
    let c2 = new Company("New Company");
    let empC2 = [new Employee("John"), new Employee("Stewie")];

    let companyMap = new Map();
    companyMap.set(c1, empC1);
    companyMap.set(c2, empC2);
    console.log(companyMap);
    console.log(companyMap.get(c1));

    for(let [comp, emps] of companyMap) {
        console.log(`${comp.name}: ${emps.map(e => e.name).join(",")}`);
    }

    companyMap.forEach((emps, comp) => {
        console.log(`${comp.name}: ${emps.join(",")}`);
    });

    let userGroup = new Set();
    userGroup.add("Peter");
    userGroup.add("Peter");
    userGroup.add("Mary");
    userGroup.add("Mary");
    console.log(userGroup.size); // 2 [Peter, Mary]
    console.log(userGroup.has("Peter")); // True
    userGroup.delete("Peter");
    console.log(userGroup.has("Peter")); // False

    for(let user of userGroup) {
        console.log(user);
    }

    userGroup.forEach(user => console.log(user));
})();

