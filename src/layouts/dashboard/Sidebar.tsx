import { Link, NavLink } from "react-router";

export default function Sidebar(){
    return(
    <>
    <aside className="w-1/4 h-screen bg-blue-800/10  ">
    <section className="flex flex-row items-center gap-4 p-5">
        <span>
            hi
        </span>
        <div className="flex flex-col">
            <span className="text-3xl">StudyHub</span>
            <span className="text-sm">Your study organizer</span>
        </div>
    </section>
    
    <section className="flex flex-col gap-6 pl-18 text-md mt-7">
        <NavLink to="/app"  className="">Dashboard</NavLink>
        <NavLink to="material"  className="">Materials</NavLink>
        <NavLink to="collection"  className="">Collections</NavLink>
        <NavLink to="/"  className="">logout</NavLink>

        </section>
    <section></section>
    <section></section>
    </aside>
    </>)
}