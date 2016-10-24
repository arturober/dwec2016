(function () {
    "use strict";

    let a1 = new Array(12, 43, 67);
    console.log(a1); // [12, 43, 67]
    let a2 = new Array(10);
    console.log(a2); // length 10 (undefined)
    let a3 = Array.of(10);
    console.log(a3); // [10]

    let nums = [4, 5, 12, 21, 33];
    let nums2 = Array.from(nums, n => n * 2);
    console.log(nums2); // [8, 10, 24, 42, 66]
    let nums3 = nums.map(n => n * 2); // Same as Array.from
    console.log(nums3); // [8, 10, 24, 42, 66]

    let zeros = new Array(20);
    zeros.fill(0);
    console.log(zeros);
    zeros.fill(1, 10);
    console.log(zeros);
    zeros.fill(9, 0, 5);
    console.log(zeros);

    let ages = [13, 16, 24, 32 ,9];
    console.log(ages.find(age => age >= 18)); // 24
    console.log(ages.findIndex(age => age >= 18)); // 2 -> [2]=24
    console.log(ages.find(age => age > 100)); // undefined
    console.log(ages.findIndex(age => age > 100)); // -1 

    console.log("-------------------");
    let array = ["Peter", "James", "Allison"];
    for(let i in array) {
        console.log(`${i} -> ${array[i]}`);
    }
    console.log("-------------------");
    for(let name of array) {
        console.log(name);
    }
    console.log("-------------------");
    for(let [index, name] of array.entries()) {
        console.log(`${index} -> ${name}`);
    }
})();

