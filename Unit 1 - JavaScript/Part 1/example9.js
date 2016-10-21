'use strict';

var r = new RegExp("a","gi");
var r2 = /a/gi;

console.log(r instanceof RegExp);
console.log(r2 instanceof RegExp);

var str  = "34634R";
var str2 = "12345467T";
var regDni = /^\d{8}[a-z]$/i;

console.log(regDni.test(str));
console.log(regDni.test(str2));

console.log("------------");

var str3 = "I am amazed in America";
var reg = /am/gi;

console.log(reg.test(str3)); // I am
console.log(reg.test(str3)); // amazed
console.log(reg.test(str3)); // America
console.log(reg.test(str3)); // ----
var match;
while(match = reg.exec(str3)) {
    console.log("Index: " + match["index"] 
        + ", Word: " + match[0]);
}

console.log(str3.match(reg));

var reg2 = /[aeiou]/gi;
var str4 = str3.replace(reg2, "X");
console.log(str4);

var str5 = str3.replace(reg2, function(match) {
    return match.toLocaleUpperCase();
});
console.log(str5);