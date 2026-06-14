
import { createBrowserRouter, RouterProvider } from "react-router";

//import RegisterPage from "../pages/RegisterPage";
import HeroLayout from "../components/layouts/HeroLayout";

import MaterialsContent from "../pages/Materials";
import Settings from "../pages/Setting";
import CollectionContent from "../pages/Collections";
import OverviewContent from "../pages/OverviewPage";
//import LoginPage from "../components/layouts/LoginPageLayout";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../components/layouts/RegisterPageLayout";

const router=createBrowserRouter([
    {
        path:"/",children:[
        {index:true,element:<LandingPage/> },
        { path:"register-page",element:<RegisterPage/>},
     ] 
    },

    {
        path:"/home",element:<HeroLayout/>,
        children:[
            { index:true,element:<OverviewContent/>  },
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