import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../layouts/landing/LandingLayout";
import LoginForm from "../pages/Landing/LoginForm";
import RegisterForm from "../pages/Landing/RegisterForm";




 const router=createBrowserRouter([
    {
        path:"/",element:<LandingPage/>,
        children:[
            {index:true,element:<LoginForm/> },
            {path:"register",element:<RegisterForm/>
            }
    ]
    }
    ,{
        path:"/home",element:<></>
    }
 ])
export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}