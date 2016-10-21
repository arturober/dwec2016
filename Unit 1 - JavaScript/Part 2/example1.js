'use strict';

var obj = {
    prop1: 13,
    prop2: 45,
    prop3: [
        34, 54, 65, 75
    ],
    prop4: [{
        a: 2
    },{
        a: 6
    }],
    method: function(name) {
        console.log("Hello " + name);
    }
};

console.log(obj.prop1);
console.log(obj['prop2']);

for(var i=1; i <= 2; i++) {
    console.log(obj['prop' + i]);
}

console.log(obj.prop3.length); // 4
console.log(obj.prop3[2]); // 65

console.log(obj.prop4[1].a); // 6

obj.method("Pepe");

obj.method2 = function() {
    console.log("this is method 2");
}

obj.method2(); // this is method 2

for(var p in obj) {
    console.log(p + ": " + obj[p]);
}