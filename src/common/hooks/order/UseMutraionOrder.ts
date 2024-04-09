import { useMutation } from "@tanstack/react-query";
import IOrder from "../../interface/order";
import axios from "axios";

const UseMutraionOrder = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (order: IOrder) => {
      const { data } = await axios.delete(
        `httl://localhost:3000/orders/delete/${order}`
      );
      return data;
    },
  });
  return { mutate, ...rest };
};

export default UseMutraionOrder;
