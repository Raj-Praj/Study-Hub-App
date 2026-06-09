import { Link } from "react-router";
import { useNavigate } from "react-router";
export default function LoginPage(){
    const navigate=useNavigate();
    return(
    <>
     <section className="flex w-full h-screen">
        {/*image content */}
          <section className="w-3/5 h-screen bg-gray-300">
               image
             </section>

        {/*login form*/}
        <section className="w-2/5 h-screen bg-mist-400">
          <section className=" w-full h-full flex justify-center items-center">
              <div className=" bg-gray-500/40  w-100 h-150 rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">
                  <span className="">Login into Study Hub</span>
            
                    <div className="flex flex-col gap-7">
                       <input type="text" className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder="Enter Email"></input>
                        <input type="text" className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder="Enter Password"></input>
                     </div>
                     <div className="flex justify-center items-center h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 cursor-pointer">
                         <button  className="cursor-pointer" onClick={()=>navigate("/home")}>Log in</button>
                     </div>
                      <p className="text-lg text-center text-gray-800">
                             New here?{" "}
                        <Link to="/register-page" className="text-blue-800 cursor-pointer">
                        Register</Link>
        </p>
                 </div>
             </section>
         </section>
     </section>
  
    </>
    )
}