import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "./Dashboard";
import Settings from "./Setting";
type Page="dashboard"|"settings";

export default function Hero(){
    const [activePage,setActivePage]=useState<Page>("dashboard");
   
    return(
    
    <section className="flex">
        <Sidebar 
        activePage={activePage}
        onNavigate={setActivePage}/>
        { activePage==="dashboard" && <Dashboard />}
        {activePage==="settings"&& <Settings />}
        
        

    </section>
    );
}