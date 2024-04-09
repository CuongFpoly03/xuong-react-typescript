import { insntance } from "../configs/instance";

export const getAllOrder = async () => {
  const { data } = await insntance.get(`/orders`);
  return data;
};

export const getOneOrder = async (id: string | number) => {
  const { data } = await insntance.get(`/orders/${id}`);
  return data;
};