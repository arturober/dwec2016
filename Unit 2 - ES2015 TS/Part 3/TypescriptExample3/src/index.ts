interface ICar {
    model: string;
    price: number;
    year?: number; // Optional
}
interface IPerson {
    name: string;
    age: number;
}

interface IAppData {
    people: IPerson[]; // Array of objects with IPerson properties
    cars: ICar[]; // Array of objects with ICar properties
}

interface IData {
    getData(): Object[];
}

class CarDataBase implements IData {
    constructor(private data: IAppData) {}

    getData(): ICar[] { // Receives IAppData and returns array of ICar
        return data.cars;
    }
}

let data:IAppData = {
    people: [{name: "Peter", age: 12}, {name:"Mary",age:34}],
    cars: [
        {model: "Ford", price: 20000, year: 2013},
        {model: "Dacia", price: 9000}
        
    ]
};

let carDb = new CarDataBase(data);
let cars = carDb.getData();
cars.forEach(c => {
    console.log(`${c.model} -> ${c.price}`);
});