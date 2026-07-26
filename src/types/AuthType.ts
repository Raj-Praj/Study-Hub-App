import type { LoginCredentials } from "../pages/Landing/LoginForm";

export interface IUserDetail{
    
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    gender: string,
    email: string,
    phone: string,
    username: string,
    birthDate: string,
    image:string,
    address: {
        address: string,
        city: string,
        state: string,
       wardno:string,
        country: string,
    },
    role: string,
}
    
export interface IAuthContext{
    loggedInUser:null | IUserDetail,
    login:(credentails:LoginCredentials)=>Promise<void | IUserDetail>,
    getLoggedInUser:()=>Promise<void|IUserDetail>
}
