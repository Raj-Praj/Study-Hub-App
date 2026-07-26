import { createContext } from "react";

import type { IAuthContext } from "../../types/AuthType";

const AuthContext=createContext<IAuthContext>({
    loggedInUser:null,
    login:async()=>{},
    getLoggedInUser:async()=>{},
})
export default AuthContext