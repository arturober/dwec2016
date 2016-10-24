(function() {
    "use strict";
    
    let str = "Hello, this is a string";

    console.log(str.startsWith("Hello")); // true
    console.log(str.endsWith("string")); // true
    console.log(str.includes("this")); // true
    console.log("a".repeat(10)); // aaaaaaaaaa

    let surfer = "Unicode astral plane: \u{1f3c4}";
    console.log(surfer);

    let surfer2 = "\u{1f30a}\u{1f3c4}\u{1f40b}\u{1F354}\u{26c4}";  
    console.log(surfer2);
})();

