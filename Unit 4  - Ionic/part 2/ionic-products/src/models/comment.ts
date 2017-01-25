import { IUser } from './user';
export interface IComment {
    comment: string,
    id?: number,
    idUser: number,
    idProduct: number,
    user?: IUser
}