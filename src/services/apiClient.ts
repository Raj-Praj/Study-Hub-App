import axios, { type AxiosInstance } from "axios";
import { AppConfig } from "../config/app-env";

const axiosInstance:AxiosInstance =axios.create({
    // baseURL:import.meta.env.VITE_PUBLIC_API_URL,
    baseURL:AppConfig.apiBaseurl,
    timeout:30000,
    timeoutErrorMessage:"Server timed out...",
    responseType:"json",
    headers:{
        "Content-Type":"application/json",
    }


});
//interceptors->req,res
export default axiosInstance