/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useLocalStorage } from "./UseStorage";
import axios from "axios";
import { debounce, reduce } from "lodash";
import { ChangeEvent, useState } from "react";
import { useLocalStorage } from "./UseStorage";

const UseCart = () => {
  const [, setCartData] = useState({ products: [] });
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  // console.log(userId);
  const { data, ...restQuery } = useQuery({
    queryKey: ["CART", userId],
    queryFn: async () => {
      if (!userId) return {};
      const { data } = await axios.get(`http://localhost:3000/carts/${userId}`);
      return data;
    },
    enabled: !!userId,
  });
  const resetCart = () => {
    setCartData({ products: [] }); // Đặt lại giỏ hàng về trạng thái rỗng
  };
  
  const updateQuantity = debounce(async (productId, quantity: number) => {
    await axios.post(`http://localhost:3000/carts/update`, {
      userId,
      productId,
      quantity,
    });
    
    window.location.reload();
    queryClient.invalidateQueries({
      queryKey: ["CART", userId],
    });
  }, 100);

  const { mutate } = useMutation({
    mutationFn: async ({
      action,
      productId,
    }: {
      action: string;
      productId: string;
    }) => {
      switch (action) {
        case "INCREMENT":
          await axios.post(`http://localhost:3000/carts/increment`, {
            userId,
            productId,
          });
          break;
        case "DECREMENT":
          await axios.post(`http://localhost:3000/carts/decrement`, {
            userId,
            productId,
          });
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CART", userId],
      });
    },
  });
  const handleQuantity = (
    productId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(e.target.value);
    updateQuantity(productId, quantity);
  };

  const calculateTotal = () => {
    if (!data || !data.products) return 0;
    return reduce(
      data.products,
      (total, product) => total + product.pricePro * product.quantity,
      0
    );
  };
  return { data, mutate, handleQuantity, calculateTotal, resetCart, ...restQuery };
};

export default UseCart;
