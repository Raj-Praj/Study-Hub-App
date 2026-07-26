import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContext";
import type { IUserDetail } from "../../types/AuthType";
import type { LoginCredentials } from "../../pages/Landing/LoginForm";
import Cookies from "js-cookie";
import axiosInstance from "../../services/apiClient";



export default function AuthProvider({children}:Readonly<{children:ReactNode}>){
    const [loggedInUser,setLoggedInUser]=useState<null | IUserDetail>(null);
    const [loading,setLoading]=useState<boolean>(true);

    const getLoggedInUser=async()=>{
         try{
          const token=Cookies.get("_at_64") as string;

    const userDetail=(await axiosInstance.get("/auth/me",{
        headers:{
            Authorization:"Bearer " +token,
        }
    })) as unknown as {data:IUserDetail};

    setLoggedInUser(userDetail.data)
     

    }catch(exception){
        console.log(exception)
        throw exception
    }finally{
        setLoading(false)
    }
    }


    const login=async(credentials:LoginCredentials)=>{
        try{
        const response=await axiosInstance.post('/auth/login',credentials);
            Cookies.set("_at_64",response.data.accessToken,{
                secure:true,
                expires:1,
                
                sameSite:"strict"
            })
             Cookies.set("_rt_64",response.data.refreshToken,{
                secure:true,
                expires:1,
             
                sameSite:"strict"
            })

            
       return await getLoggedInUser();
        
    }catch(exception){
        console.log(exception)
        throw exception
    }


    }
    useEffect(()=>{
        const handler=()=>{
        const token=Cookies.get("_at_64");
        if(token){
            getLoggedInUser()
        }else{
            setLoading(false)
        }
    }
    return ()=>{
        handler()
    }
    },[]);
    return(
        loading?(
        <>Loading...</>
    ):
       ( <AuthContext.Provider
        value={{
            loggedInUser:loggedInUser,
            login:login,
            getLoggedInUser:getLoggedInUser,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
)
}