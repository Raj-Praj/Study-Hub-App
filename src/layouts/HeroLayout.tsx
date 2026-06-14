
import { Outlet } from "react-router";
import Sidebar from "./SidebarLayout";

import Header from "./HeaderLayout";



export default function HeroLayout(){
    
   
    return(
    
    <section className="flex">
        <Sidebar />
        
        <section className="flex flex-col w-full h-screen ">
         <section >

        <Header/>
        </section>
       
        <Outlet/>
        
        </section>
    </section>
    );
}