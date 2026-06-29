
const navItems=["Features","Get Started"];
export default function LandingNavbar(){
    return(
        <>
        <nav className="px-8 py-5 flex justify-between ">
            <span className="text-3xl text-white/80 font-bold">Study Hub</span>
            <ul className="flex gap-5 text-lg text-white/80">
                {navItems.map((item)=>(
                    <li 
                    key={item}
                    className="cursor-pointer hover:text-white transition"
                    >
                        {item}
                    </li>
                ))}

            </ul>

        </nav>

        </>
    )
}