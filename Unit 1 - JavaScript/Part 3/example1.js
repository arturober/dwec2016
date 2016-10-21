'use strict';

console.log("Width: " + screen.width);
console.log("Height: " + screen.height);

console.log("Available width: " + screen.availWidth);
console.log("Available height: " + screen.availHeight);

console.log("Window width: " + window.outerWidth);
console.log("Window height: " + window.outerHeight);

console.log("Window inner width: " + window.innerWidth);
console.log("Window inner height: " + window.innerHeight);

function printPos(position) { // Only works in a web server!!
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(printPos);


