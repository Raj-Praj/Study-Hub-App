import { createContext } from "react";

const AuthContext=createContext({
    loggedInUser:null,
    login:async()=>{},
    getLoggedInUser:async()=>{},
})
export default AuthContext