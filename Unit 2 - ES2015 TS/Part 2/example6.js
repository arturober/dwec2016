(function() {
    "use strict";
    
    let a = [3, 6, 9, 12];
    let n1 = a[0];
    let n2 = a[1];
    console.log(n1, n2); // 3 6

    let [num1, num2] = a;
    console.log(num1, num2); // 3 6

    let [nu1,,,nu4] = a; // nu1 = a[0], nu4 = a[3]
    console.log(nu1, nu4); // 3 12

    let names = ["Peter", "John"];
    let [name1 = "Nobody", name2  = "Nobody", name3  = "Nobody"] = names;
    console.log(name1, name2, name3); // Peter John Nobody

    let age1, age2;
    let ages = [12, 23, 43, 56, 36];
    [age1, age2, ...ages] = ages;
    console.log(ages); // [43, 56, 36]
    /* Equivalent:
        let age1, age2;
        let ages = [12, 23, 43, 56, 36];
        age1 = ages.shift();
        age2 = ages.shift(); 
        console.log(ages); // [43, 56, 36]
    */
})();

