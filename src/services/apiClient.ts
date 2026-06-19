import axios from "axios";
import type { AxiosInstance } from "axios";
import { AppConfig } from "../auth/Config";

const axiosInstance:AxiosInstance=axios.create({
  
   //baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    baseURL:AppConfig.apiBaseURL,
    timeout:30000,
    timeoutErrorMessage:"server timed out",
    responseType:"json",
    headers:{
        "Content_Type":"application/json",
    }
});
export default axiosInstance