'use strict';

(function() {
    console.log(parseInt("14")); // 14
    console.log(parseInt("6.65")); // 6
    console.log(parseInt("7asd")); // 7
    console.log(parseInt("asd7")); // NaN
    console.log(parseInt(12.78)); // 12
    console.log(parseInt(true)); // NaN
    console.log(parseInt(null)); // NaN

    console.log("--------------");
    console.log(parseFloat("14")); // 14
    console.log(parseFloat("6.65")); // 6.65
    console.log(parseFloat("7.13asd12")); // 7.13

    if(isNaN(parseInt(undefined))) {
        console.log("We can't convert undefined to a number");
    }

    console.log("--------------");
    console.log(isFinite(1234)); // true
    console.log(isFinite(Number.POSITIVE_INFINITY)); // false

    console.log("--------------");
    console.log(Number(true)); // 1
    console.log(Number(false)); // 0
    console.log(Number(null)); // 0
    console.log(Number("")); // 0
    console.log(Number(undefined)); // NaN

    console.log("--------------");
    console.log(String(true)); 
    console.log(String(false)); 
    console.log(String(null)); 
    console.log(String(undefined));
})();
