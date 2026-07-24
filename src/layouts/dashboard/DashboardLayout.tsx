import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


export default function DashboardLayout(){
    return(<>
    <section className="w-full h-screen flex">
        <Sidebar/>
        <section className="w-full flex flex-col">
            
            <Navbar/>
            <Outlet/>
           
            </section>
        

    </section>
    </>)
}