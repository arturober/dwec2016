'use strict';

(function() {
    var ul = document.getElementById("firstListElement").parentElement;
    console.log(ul.children);
    for(var i = 0; i < ul.children.length; i++) {
        var li = ul.children[i];
        console.log(li.textContent);
    }

    console.log("--------------------");
    var ul1 = document.getElementsByClassName("ul1")[0];
    var items = ul1.getElementsByClassName("item1");
    for(var i = 0; i < items.length; i++) {
        console.log(items[i].textContent);
    }

    console.log("--------------------");
    var itemsSel = document.querySelectorAll("ul.ul1 > li.item1");
    for(var i = 0; i < itemsSel.length; i++) {
        console.log(itemsSel[i].textContent);
    }
    console.log("--------------------");
    var itemsSel = document.querySelectorAll("ul.ul2 > li:not(.item1)");
    for(var i = 0; i < itemsSel.length; i++) {
        console.log(itemsSel[i].textContent);
    }
    console.log("--------------------");
    var inputs = document.querySelectorAll("input[value^='input']");
    inputs.forEach(function(input) {
         console.log(input);
    });
})();
