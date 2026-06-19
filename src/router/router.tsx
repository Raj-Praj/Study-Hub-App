
import { createBrowserRouter, RouterProvider } from "react-router";


import HeroLayout from "../layouts/HeroLayout";

import MaterialsContent from "../pages/Materials";
import Settings from "../pages/Setting";
import CollectionContent from "../pages/Collections";
import OverviewContent from "../pages/OverviewPage";

import LandingPage from "../layouts/LandingPageLayout";
import LoginSection from "../components/landingPage/rightsidecomponent/LoginSection";
import RegisterSection from "../components/landingPage/rightsidecomponent/RegisterSection";
import NotFoundComponent from "../components/errors/NotFoundComponent";
import NotFound from "../pages/NotFound";



const router=createBrowserRouter([
    {
        path:"/",element:<LandingPage/>,
        children:[
        {index:true,element:<LoginSection/> },
        { path:"register-page",element:<RegisterSection/>},
     ] 
    },

    {
        path:"/home",element:<HeroLayout/>,
        children:[
            { index:true,element:<OverviewContent/>  },
            { path:"materials",element:<MaterialsContent/> },
            { path:"collections",element:<CollectionContent/> },
            { path:"settings",element:<Settings/> },
            {path:"*",element:<NotFoundComponent redirectTo="/home"/>}

        ]
    },
    {path:"*",element:<NotFound/>

    }
    ])

export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}