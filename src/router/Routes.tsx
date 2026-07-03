import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../layouts/landing/LandingLayout";
import LoginForm from "../pages/Landing/LoginForm";
import RegisterForm from "../pages/Landing/RegisterForm";

import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Material from "../pages/Materials/Material";
import Collection from "../pages/Collection/Collection";




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
        path:"/app",element:<DashboardLayout/>,
        children:[
            {index:true,element:<Dashboard/>},
            {path:"material",element:<Material/>},
            {path:"collection",element:<Collection/>}

        ]
    }
 ])
export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}