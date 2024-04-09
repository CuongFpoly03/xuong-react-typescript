export interface IUser {
    _id?: string,
    username?: string,
    email: string,
    password: string,
    role?: boolean,
}

interface OrderItem {
    _id?: string,
    name: string;
    price: number;
    quantity: number;
  }
export interface ICheckout {
    username: string,
    phone: number,
    email: string,
    items: OrderItem;
    address: string
    user: IUsers;
    orderNumber: number;
    customerName: string,
    totalPrice: number;
}
export interface IUsers {
    username: string,
    phone: number,
    email: string,
    user: string,
    address: string
}

export interface ILogin {
    email: string,
    password: string,
}