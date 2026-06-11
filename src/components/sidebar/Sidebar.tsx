import { Link } from "react-router";


export default function Sidebar() {
    return(
    <>
    <section className="flex flex-col   h-screen w-1/5  position: fixed; border-r-2  border-[#E5E7EB] shadow bg-[#F4F4F4] ">
        <div className="h-22.5  pb-2 flex justify-center items-center flex-col ">
            <h1 className=" text-3xl">Study Hub</h1>
            <p>Note organizer</p>
        </div>
        <section className="w-full h-screen  ">
        <section className=" h-4/5 pt-5">
            <span className="p-5 ">  Menu</span>
            <div className="flex flex-col justify-center items-center  gap-4">
                    <Link to="/home">Dashboard</Link>
                    <Link to="/home/materials">Materials</Link>
                    <Link to="/home/collections">Collections</Link>
                   
            </div>
            <span className="p-5">  Account</span>
            <div className="flex flex-col justify-center items-center "> <Link to="/home/settings">Settings</Link></div>

        </section>
        
        <section className="w-full  h-1/5">
            
            <div className="flex justify-center"><Link to="/">Logout</Link></div>
        </section>
        </section>
    </section>
    </>
    );
}
