export default function Header(){
    return(
    <header className="h-20 bg-gray-500 w-full position:fixed ">
            <nav className="flex justify-between">
               <div className="  mt-4 w-full flex justify-center items-center align-center">
            <div className=" flex items-center gap-2 bg-gray-300 border border-gray-200 rounded-lg px-3 h-10 w-64">  
            <span className="text-gray-400 text-sm">🔍</span>
            <input type="text" id="search" className=" bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400" placeholder="Search"/>
            </div>
            </div>
            <div className=" flex justify-center items-center pr-15 gap-5 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                
</div>
            


            </nav>
        </header>);
}