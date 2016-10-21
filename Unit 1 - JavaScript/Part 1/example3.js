'use strict';

var edad = 78;

if(edad < 18) {
    console.log("Menor");
} else if(edad < 65) {
    console.log("Adulto");
} else {
    console.log("Jubilado");
}

var opcion = 1;

switch(opcion) {
    case 1:
        console.log("Has elegido la opción 1");
        break;
    case 2:
        console.log("Has elegido la opción 2");
        break;
    case 3:
        console.log("Has elegido la opción 3");
        break;
    default:
        console.log("Opción no válida");
}

// Estructura switch comprobando cadenas
var cadena = "h";
switch(cadena) {
    case "h":
        console.log("Ha elegido h");
        break;
}

// Estructura switch comprobando condiciones (entra en la primera que sea true)
var age = 32;
switch(true) {
    case age < 18:
        console.log("You are too young to enter");
        break;
    case age < 65:
        console.log("You can enter");
        break;
    default:
        console.log("You are too old to enter");
}

/*********************************
 * Loops
 *********************************/
/*var i = 1;
while(i <= 5) {
    console.log(i++);
}

var i=1;
do {
    console.log(i++);
} while(i <= 5); */

for(var i = 1; i <= 5; i++) {
    var j = i*2;
    console.log(i);
}

console.log("i vale: " + i);
console.log("j vale: " + j);

/********************************* 
 * Iterating through arrays
**********************************/
var array = new Array(23, 5, "Hello", new Date());
/*for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

/*for(var index in array) {
    console.log(array[index]);
}*/

array.forEach(function(item) {
    console.log(item);
});

/***********************************
 * Iterating through object properties
 ***********************************/

var person = {
    name: "Peter",
    age: 34,
    dateBirth: new Date("1982-05-16"),
    sayHello: function() {
        console.log("Hello!, my name is " + this.name);
    }
};

for(var prop in person) {
    if(typeof person[prop] !== "function") // Show only if it's not a function
        console.log(prop + ": " + person[prop]);
}

person.sayHello();


