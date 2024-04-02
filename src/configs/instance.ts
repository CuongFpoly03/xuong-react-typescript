import axios from "axios";

export const insntance = axios.create({
    baseURL: "http://localhost:3000"
})