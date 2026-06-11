
import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarMenu from "../sidebar/SidebarMenu";
import SidebarAccount from "../sidebar/SidebarAccount";
import SidebarLogout from "../sidebar/SidebarLogout";


export default function Sidebar() {
    return(
    <>
    <aside className="flex flex-col   h-screen w-1/5   border-r-2  border-[#E5E7EB] shadow bg-[#F4F4F4] ">

        <SidebarHeader title="Study Hub" subtitle="Notes Organizer"/>

        <section className="w-full h-screen  ">
             <section className=" h-4/5 pt-5">
                   <SidebarMenu navLabel="Menu"/>
                   <SidebarAccount navLabel="Account"/>

             </section>
        
               <section className="w-full  h-1/5">
            
                  <SidebarLogout />
             </section>
        </section>
    </aside>
    </>
    );
}
