(function() {
    "use strict";
    
    function sum(...nums) { // REST
        return nums.reduce((total,val) => total + val, 0);
    }

    console.log(sum());
    console.log(sum(12));
    console.log(sum(12, 35, 7));
    console.log(sum(12, 35, 6, 13, 5));

    function showSubjects(name = "Nobody", ...subjects) { // REST
        console.log("Name: " + name);
        console.log("Subjects: " + (subjects.length?subjects.sort().join(" - "):"None"));
    }

    showSubjects();
    showSubjects("Peter", "Programming", "Databases", "Web design");

    let a = [12, 32, 54, 56];
    console.log(a);
    console.log(...a); // SPREAD
    console.log(12, 32, 54, 56); // Equivalent to ...a

    console.log(Math.max(a)); // Prints NaN
    console.log(Math.max(...a)); // SPREAD -> Prints 56
})();

