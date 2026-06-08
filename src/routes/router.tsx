import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
const router=createBrowserRouter([
    {path:"/",element:<LoginPage/>},
    {path:"/register-page",element:<RegisterPage/>},

])
export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}