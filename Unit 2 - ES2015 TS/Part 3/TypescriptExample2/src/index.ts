import { Rect } from './rect.class'
import { Circle } from './circle.class'
import { IShape } from './ishape';

// let rect = new Rect(12, 8);
// console.log(rect.getArea());

// let circ = new Circle(5);
// console.log(circ.getArea());

let shapes: IShape[] = [];
shapes.push(new Circle(5));
shapes.push(new Rect(4, 6));
shapes.push(new Circle(3.5));
shapes.push(new Rect(6, 2));

shapes.forEach(s => {
    if(s instanceof Circle) {
        console.log(`Circle (${s.getRadius()}): ${s.getArea().toFixed(2)}`);
    } else {
        let rect = <Rect>s;
        console.log(`Rect (${rect.getWidth()}, ${rect.getHeight()}) : ${s.getArea().toFixed(2)}`);
    }
});

let input = <HTMLInputElement>document.getElementById("input1");
let button = <HTMLButtonElement>document.getElementById("button1");
button.addEventListener('click', (event) => {
    alert(`Input value -> ${input.value}`);
});
