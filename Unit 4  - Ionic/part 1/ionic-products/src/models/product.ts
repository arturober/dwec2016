import { IUser } from './user';
export interface IProduct {
    id: number,
    description: string,
    price: number,
    available: string,
    imageUrl: string,
    user?: IUser
}