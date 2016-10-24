(function () {
    "use strict";

    function getIn3Seconds(error = false) {
        return new Promise(function(resolve, reject) {
            console.log("Promise called...");
            setTimeout(() => {
                resolve({msg: "Hello World", error: error});
            }, 3000);
        });
    }

    let prom = getIn3Seconds(true);
    prom.then(function(data) {
        if(data.error) {
            throw "The promise failed!";
        }
        console.log(data.msg);

    }).catch(function(error) {
        console.error(error);
    });

    console.log("The program goes on....");
})();

