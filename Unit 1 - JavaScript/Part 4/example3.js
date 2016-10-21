(function() {
    'use strict';

    function locate(pos) {
        console.log(pos);
        var p = document.getElementById("coordinates");
        p.textContent = "Latidude: " + pos.coords.latitude + 
            ". Longitude: " + pos.coords.longitude +
            " (accuracy: " + pos.coords.accuracy + ")";

        var latlon = pos.coords.latitude + "," + pos.coords.longitude;
        var imgUrl = "http://maps.googleapis.com/maps/api/staticmap?center="
            +latlon+"&zoom=14&size=400x300&sensor=false&&markers=color:red%7Clabel:C%7C" +latlon;
            document.getElementById("map").setAttribute('src', imgUrl);
    }

    function errorLocate(error) {
        var p = document.getElementById("coordinates");
        switch(error.code) {
            case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
                p.textContent = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE: // Couldn't get the location
                p.textContent = "Location information is unavailable."
                break;
            case error.TIMEOUT: // The maximum amount of time to get location information has passed
                p.textContent = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                p.textContent = "An unknown error occurred."
                break;
        }
    }

    navigator.geolocation.getCurrentPosition(locate, errorLocate);


})();

