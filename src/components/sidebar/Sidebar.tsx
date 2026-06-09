import { Link } from "react-router";


export default function Sidebar() {
    return(
    <>
    <section className="flex flex-col   h-screen w-1/5 bg-red-100 position: fixed;  ">
        <div className="h-20 bg-gray-700 border-b-2 border-indigo-500 pb-2 flex justify-center items-center">
            <h1 className="text-gray-500">Study Hub</h1>
        </div>
        
        <section className="bg-red-500 h-2/3 pt-5">
            <span className="p-5">  Menu</span>
            <div className="flex flex-col justify-center items-center gap-4">
                    <Link to="/home">Dashboard</Link>
                    <Link to="/home/materials">Materials</Link>
                    <Link to="/home/collections">Collections</Link>
                    <Link to="/home/settings">Settings</Link>
            </div>
        </section>
        <section>
            <div>hello</div>
        </section>
    </section>
    </>
    );
}
