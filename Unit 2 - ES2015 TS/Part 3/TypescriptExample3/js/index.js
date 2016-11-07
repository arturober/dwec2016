var CarDataBase = (function () {
    function CarDataBase(data) {
        this.data = data;
    }
    CarDataBase.prototype.getData = function () {
        return data.cars;
    };
    return CarDataBase;
}());
var data = {
    people: [{ name: "Peter", age: 12 }, { name: "Mary", age: 34 }],
    cars: [
        { model: "Ford", price: 20000, year: 2013 },
        { model: "Dacia", price: 9000 }
    ]
};
var carDb = new CarDataBase(data);
var cars = carDb.getData();
cars.forEach(function (c) {
    console.log(c.model + " -> " + c.price);
});
//# sourceMappingURL=index.js.map