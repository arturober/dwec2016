(function() {
    'use strict';

    var myMarker = null;

    // Receives a map object and a latLng object where it will create a marker
    function createMarker(map, latLng, color) {
        var opts = {
            position: latLng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png'
        };

        var marker = new google.maps.Marker(opts);
        google.maps.event.addListener(marker, 'click', function(event) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent("Marker at lat: " + event.latLng.lat().toFixed(6) +
            ", lng: " + event.latLng.lng().toFixed(6));
            infoWindow.open(map, marker);
        });
    }

    function showMap(pos) {
        console.log(pos);
        var p = document.getElementById("coordinates");
        p.textContent = "Latidude: " + pos.coords.latitude + 
            ". Longitude: " + pos.coords.longitude +
            " (accuracy: " + pos.coords.accuracy + ")";

        var gLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        console.log(gLatLng);
        var opt = {
            zoom: 15, // Map zoom (min: 0, max: 20)
            center: gLatLng, // Center the map in our position
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };

        var mapDiv = document.getElementById("map");
        var map = new google.maps.Map(mapDiv, opt);

        myMarker = createMarker(map, gLatLng, "green");

        google.maps.event.addListener(map, 'click', function(event) {
            var coordsP = document.getElementById("coordinates");
            
            map.panTo(event.latLng);

            createMarker(map, event.latLng, 'pink');

            var dist = google.maps.geometry.spherical.computeDistanceBetween(
                gLatLng, // Our position
                event.latLng // This position
            );

            coordsP.textContent = "Click on lat: " + event.latLng.lat() + 
                ", lng: " + event.latLng.lng() + "Distance from you: " + 
                (Math.round(dist)/1000) + "km";
        });

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


    // We wait until the DOM is fully loaded before getting position
    window.addEventListener('load', function() {
        navigator.geolocation.getCurrentPosition(showMap, errorLocate);
    });

})();

