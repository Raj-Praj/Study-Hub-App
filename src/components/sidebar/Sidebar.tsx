type Page="dashboard"|"settings";
type SidebarProps={
    activePage:Page;
    onNavigate:(page:Page)=>void;
};
export default function Sidebar({activePage,onNavigate}:SidebarProps) {
    return(
    <>
    <section className="flex flex-col   h-screen w-1/6 bg-red-100 position: fixed;  ">
        <div className="h-20 bg-gray-700 border-b-2 border-indigo-500 pb-2 flex justify-center items-center">
            <h1 className="text-gray-500">Study Hub</h1>
        </div>
        
        <section className="bg-red-500 h-2/3 pt-5">
            <span className="p-5">  Menu</span>
            <div className="flex flex-col justify-center items-center gap-5">
                <button onClick={()=>onNavigate("dashboard")}
                    className={`${activePage==="dashboard"
                        ?"underline"
                        :"text-gray-600"
                    }`}>Dashboard</button>
                <button onClick={()=>onNavigate("settings")}
                    className={`${activePage==="settings"
                        ?"underline":"text-gray-600"
                        }`}>Settings</button>


               


            </div>
        </section>
        <section>

        </section>
    </section>
    </>
    );
}
