// import { useState, type ReactNode } from "react";
// import AuthContext from "../context/AuthContext";
// import type { IUserDetail } from "../../types/AuthType";

// export default function AuthProvider({children}:Readonly<{children:ReactNode}>){
// const [LoggedInUser,setLoggedInUser]=useState<null|IUserDetail>(null);

//     return(<>
//     <AuthContext.Provider 
//     value={
//         {
//             loggedInUser:LoggedInUser,
//             login:async()=>{},
//             getLoggedInUser:async()=>{}
//         }
//     }>
//         {children}
//     </AuthContext.Provider>
//     </>)
// }