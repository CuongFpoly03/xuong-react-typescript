/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getAllProductAdmin, getOneProduct } from "../../../services/Product";

export  const UseProductQuery = (page?: number | undefined) => {
  const { data, ...rest } = useQuery({
    queryKey: ["product_key", page],
    queryFn: async () => {
      return getAllProduct(page || 1);
    },
  });
  return { data, ...rest };
};



export const getProductAdmin = () => {
  const {data, ...rest} = useQuery({
    queryKey: ['PRODUCT-ADMIN'],
    queryFn: async() => {
      return getAllProductAdmin();
    }
  })
  return {data, ...rest}
}

export const UserOneProductQuery = (id? : number | string | undefined) => {
  const {data, ...rest} = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async() => {
      return getOneProduct(id)
    }
  })
  return {data, ...rest}; 
}

