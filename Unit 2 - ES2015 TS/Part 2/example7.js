(function() {
    "use strict";
    
    let data = [["Peter", "John"],[17, 32]];
    let [[name1, name2],[age1, age2]] = data;
    console.log(`${name1} is ${age1} years old`);
    console.log(`${name2} is ${age2} years old`);

    function sum3Nums([num1, num2, num3]) {
        return num1 + num2 + num3;
    }

    let nums = [34, 23, 54, 56, 76, 4, 6, 7, 8];
    console.log(sum3Nums(nums)); // 34 + 23 + 54 = 111 
    /* Equivalent:
        function sum3Nums(num1, num2, num3) {
            return num1 + num2 + num3;
        }

        let nums = [34, 23, 54, 56, 76, 4, 6, 7, 8];
        console.log(sum3Nums(...nums)); // 34 + 23 + 54 = 111 
    */
})();

