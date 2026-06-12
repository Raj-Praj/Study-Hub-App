import { Link } from "react-router"
import { useNavigate } from "react-router";
export default function RightSideComponent(){
    const navigate=useNavigate();
    return(
    <>
    <section className="w-2/5 h-screen bg-mist-400">
          <section className=" w-full h-full flex justify-center items-center">
              <div className=" bg-gray-500/40  w-[400px] h-[600px] rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">
                  <span className="">Login into Study Hub</span>
                    <form>
                    <div className="flex flex-col gap-7">
                        
                       <input type="text" className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder="Enter Email"></input>
                        <input type="text" className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder="Enter Password"></input>
                     </div>
                     </form>
                     <div className="flex justify-center items-center">
                         <button  className="cursor-pointer  justify-center items-center w-60 h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 " onClick={()=>navigate("/home")}>Log in</button>
                     </div>
                      <p className="text-lg text-center text-gray-800">
                             New here?{" "}
                        <Link to="/register-page" className="text-blue-800 cursor-pointer">
                        Register</Link>
                        
                        </p>
                 </div>
             </section>
         </section>

    </>
    )
}