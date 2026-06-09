
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HeroLayout from "../pages/HeroLayout";
import Dashboard from "../pages/Dashboard";
import MaterialsContent from "../pages/Materials";
import Settings from "../pages/Setting";
import CollectionContent from "../pages/Collections";
import DashboardContent from "../pages/Dashboard";

const router=createBrowserRouter([
    {
        path:"/",children:[
        {index:true,element:<LoginPage/>  },
        { path:"register-page",element:<RegisterPage/>},
     ] 
    },

    {
        path:"/home",element:<HeroLayout/>,
        children:[
            { index:true,element:<DashboardContent/>  },
            { path:"materials",element:<MaterialsContent/> },
            { path:"collections",element:<CollectionContent/> },
            { path:"settings",element:<Settings/> },

        ]
    }
    ])

export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}