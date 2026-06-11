
import SidebarNavLink from "./SidebarNavLink"
export default function SidebarMenu({navLabel}:Readonly<{navLabel:string}>){
    return(<>
    <span className="p-5 ">  {navLabel}</span>
                      <div className="flex flex-col justify-center items-center  gap-4">
                        <SidebarNavLink to="/home" label="Overview"/>
                        <SidebarNavLink to="/home/materials" label="Materials"/>
                        <SidebarNavLink to="/home/collections" label="Collections"/>
                        

                         
                   
                        </div>
    
    </>)
}