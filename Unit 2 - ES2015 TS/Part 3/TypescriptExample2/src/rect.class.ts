import { IShape } from './ishape';

export class Rect implements IShape {
    constructor(private width: number, private height: number) { } // properties created and assigned
    
    public getArea(): number { // 'public' keyword can be omitted (by default everything is public)
        return this.width * this.height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }
}