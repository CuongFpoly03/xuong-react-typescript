interface OrderItem {
  _id?: string,
  name: string;
  price: number;
  quantity: number;
}

interface IOrder extends Document {
    _id?: string,
  userId: string;
  items: OrderItem[];
  username: string;
 
}

export default IOrder;
