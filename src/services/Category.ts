/* eslint-disable @typescript-eslint/no-explicit-any */
import { insntance } from "../configs/instance"

export const getAllCategory = async() => {
    const {data} = await insntance.get("/categorys");
    return data;
}

export const getOneCategory = async(id : number | string) => {
    const {data} = await insntance.get(`/categorys/${id}`)
    return data;
}