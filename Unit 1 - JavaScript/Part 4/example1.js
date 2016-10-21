(function() {
    'use strict';

    try {
        allert("Hello");
    } catch(error) {
        console.log("There was an error: " + error.message);
    } finally {
        console.log("Done");
    }

    try {
        a = 12
    } catch(error) {
        console.log("There was an error: " + error.message);
    }

    try {
        throw "Miscellaneous error"
    } catch (error) {
        console.log(error);
    }

    try {
        throw new Error("Error message");
    } catch (error) {
        console.log(error.message);
    }

    try {
        throw {message: "This is an error", name: "My error"};
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
})();

