import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../pages/Landing/LandingPage";




 const router=createBrowserRouter([
    {
        path:"/",element:<LandingPage/>
    }
 ])
export default function RouterConfig(){
    return(<>
    <RouterProvider router={router}/>
    </>)
}