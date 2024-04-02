import { insntance } from "../configs/instance";

export const getAllProduct = async () => {
  const { data } = await insntance.get("/products");
  return data;
};

export const getOneProduct = async (id: number | string) => {
  const { data } = await insntance.get(`/products/${id}`);
  return data;
};
