export interface IUser {
    id?: number,
    name: string,
    email: string,
    password?: string,
    registrationDate?: Date | String,
    idGoogle?: string,
    idFacebook?: string,
    avatar?: string
}
