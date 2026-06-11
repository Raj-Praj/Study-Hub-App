
import { Outlet } from "react-router";
import Sidebar from "./sidebar";

import Header from "./header";



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