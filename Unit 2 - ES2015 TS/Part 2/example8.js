(function() {
    "use strict";
    
    let product = {
        title: "New computer",
        price: 234.53,
        stock: 23
    }

    /*let title = product.title;
    let price = product.price;
    let stock = product.stock;*/
    let {title, price, stock} = product;
    console.log(`Product: ${title}. Price: ${price}. Stock: ${stock}`);

    let prods = [{
        title: "Sofa",
        price: 345.95,
        stock: 13
    },{
        title: "Chair",
        price: 34.45,
        stock: 34
    },{
        title: "Lamp",
        price: 65.65,
        stock: 12
    }];

    let [{title: title1},{title: title2},{title: title3}] = prods;
    console.log(title1, title2, title3); // Sofa Chair Lamp

    console.log(...prods.map(p => p.title)); // EQUIVALENT: Sofa Chair Lamp

    let str = "abcdefg";
    let [c1, c2, c3, c4,,c6] = str;
    console.log(c1,c4,c6); // a d f
})();

