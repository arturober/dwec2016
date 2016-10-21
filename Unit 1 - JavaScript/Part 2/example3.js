'use strict';

var store = {
    price: 10,
    payItems: function(num) {
        return this.price * num;
    }
};

var liquorStore = Object.create(store); // liquorStore.__proto__ === store
console.log(liquorStore);
console.log(liquorStore.__proto__ === store);

console.log(liquorStore.payItems(5)); // 50 -> store.payItems(5)
console.log(liquorStore.toString()); // -> liquorStore.__proto__.__proto__.toString()

liquorStore.tax = 0.25;
liquorStore.payItems = function(num) {
    var subTotal = this.price * num;
    return subTotal + (subTotal*this.tax);
};

console.log(liquorStore.payItems(5)); // 62.5
console.log(liquorStore.__proto__.payItems(5)); // 50