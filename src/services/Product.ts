/* eslint-disable @typescript-eslint/no-explicit-any */
import { insntance } from "../configs/instance";
export const getAllProduct = async (page: number | undefined) => {
  const { data } = await insntance.get(`/products/list?page=${page}`);
 return data;
};

export const getAllProductAdmin = async () => {
  const { data } = await insntance.get("/products");
  return data;
};

export const getOneProduct = async (id: number | string | undefined) => {
  const { data } = await insntance.get(`/products/${id}`);
  return data;
};
