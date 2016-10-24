(function () {
    "use strict";

    const SERVER = "http://192.168.81.129/events";

    function getEvents() {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();
            http.open('GET', SERVER + '/events', true);
            http.setRequestHeader("Content-type", "application/json");
            http.send();
            http.addEventListener('readystatechange', function () {
                if(http.readyState === 4 && http.status === 200) {
                    let events = JSON.parse(http.responseText);
                    if(events.error) {
                        reject(events.error);
                    } else {
                        resolve(events);
                    }
                }
            });
            http.addEventListener('error', function (error) {
                reject("Couldn't get events");
            });
        });
    }

    let promiseEvents = getEvents()
        .then(events => {
            console.log("Events received");
            let now = new Date();
            return events.filter(event => {
                let dateEvent = new Date(event.date);
                return dateEvent > now;
            });
        })
        .then(eventsFiltered => {
            console.log("Events filtered");
            let div = document.getElementById("div");
            
            eventsFiltered.forEach(event => {
                let p = document.createElement("p");
                p.textContent = `${event.title} - ${event.date}`;
                div.appendChild(p);
            });
        }).catch(error => {
            console.log(`ERROR: ${error}`);
        });

})();

