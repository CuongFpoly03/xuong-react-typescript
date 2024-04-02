import { insntance } from "../configs/instance";

export const getAllUser = async () => {
  const { data } = await insntance.get("/users");
  return data;
};
