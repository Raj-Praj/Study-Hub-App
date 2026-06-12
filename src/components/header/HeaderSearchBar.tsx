export default function HeaderSearchBar(){
    return(<>
        <div className=" flex items-center gap-2 bg-slate-100 border border-gray-200 rounded-lg px-3 h-10 w-64">  
            <span className="text-gray-400 text-sm">🔍</span>
            <input type="text" id="search" className=" bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400" placeholder="Search"/>
            </div>
    </>)
}