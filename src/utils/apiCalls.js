import axios from "axios";

const  BASE_URL = "http://localhost/progettoScuola/api/";

export const axiosReq = axios.create({
  baseURL: BASE_URL,
});
