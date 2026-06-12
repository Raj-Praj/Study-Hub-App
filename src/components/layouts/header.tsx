import HeaderLeftSideItems from "../header/HeaderLeftSideItems";
import HeaderSearchBar from "../header/HeaderSearchBar";

export default function Header(){
    return(
    <header className="h-20  w-full position:fixed bg-[#F4F4F4] border-b-2 border-[#E5E7EB]  shadow-full ">
            <nav className="flex justify-between  w-full">
               <div className="  mt-4 w-full flex justify-center items-center align-center  w-3/5">
            <HeaderSearchBar/>
            </div>


            <div className=" flex justify-center items-center pl-20 gap-3 mt-4 w-2/5">
                <HeaderLeftSideItems username="Raj prajapati"/>
            </div>
            


            </nav>
        </header>);
}