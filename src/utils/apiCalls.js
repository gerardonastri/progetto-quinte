import axios from "axios";

// const  BASE_URL = "http://localhost/progettoScuola/api/";
const  BASE_URL = "http://localhost/progettoScuola";

// axios.defaults.withCredentials = true;
export const axiosReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
  }
});

