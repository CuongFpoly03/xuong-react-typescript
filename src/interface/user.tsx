export interface IUser {
    _id?: string,
    username?: string,
    email: string,
    password: string,
    role?: boolean,
}

export interface ILogin {
    email: string,
    password: string,
}