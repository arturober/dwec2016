import { IShape } from './ishape';
import { PI } from './constants'

export class Circle implements IShape {
    constructor(private radius: number) {}

    getArea(): number {
        return PI * (this.radius ** 2);
    }

    getRadius(): number {
        return this.radius;
    }
}