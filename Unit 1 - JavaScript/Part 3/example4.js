'use strict';

(function() {
    var info = document.getElementById("info");
    info.textContent = "I'm at the first page";

    // Event for capturing history navigation
    window.addEventListener('popstate', function (event) {
        if(event.state) {
            info.textContent = "I'm at page " + event.state.page;
            document.getElementById("name").value = event.state.name;
        } else {
            info.textContent = "I'm at page 1";
            document.getElementById("name").value = "";
        }
    });

    var page = 1;
    function goBack() {
        history.back();
    }

    document.getElementById("prev").addEventListener("click", goBack);

    function goNext() {
        // history.state == null if it's the first page
        var nombre = document.getElementById("name").value;
        var pageNum = history.state?history.state.page + 1:2;
        history.pushState({page: pageNum, name: nombre}, "");
        info.textContent = "I'm at page " + pageNum;
    }

    document.getElementById("next").addEventListener("click", goNext);

})();
