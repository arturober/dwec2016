'use strict';

var warrior = {
    vitality: 100
}

var vitalityDesc = Object.getOwnPropertyDescriptor(warrior, 'vitality');
console.log(vitalityDesc);

warrior.vitality = 200;
console.log(warrior.vitality);

for(var p in warrior) {
    console.log(p + ": " + warrior[p]);
}

console.log("-----------------");
Object.defineProperty(warrior, 'strength', {
    value: 10,
    enumerable: true
});
console.log("Strength: " + warrior.strength);
var strengthDesc = Object.getOwnPropertyDescriptor(warrior, 'strength');
console.log(strengthDesc);

for(var p in warrior) {
    console.log(p + ": " + warrior[p]);
}

// warrior.strength = 15 -> ERROR (read only)