import SidebarNavLink from "./SidebarNavLink";

export default function SidebarAccount({navLabel}:Readonly<{navLabel:string}>){
    return(<>
    <span className="p-5">{navLabel}</span>
     <div className="flex flex-col justify-center items-center "> 
        <SidebarNavLink to="/home/settings" label="Settings"/>
    </div>
    
    </>)
}