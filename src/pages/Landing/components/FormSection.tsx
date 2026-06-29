export default function FormContent(){
    return(
        <div className="w-3/5 flex justify-center items-center px-10 ">

                <div className=" mt-10 w-[500px]   border  border-white/20  backdrop-blur-sm bg-white/10 py-5 px-10 flex flex-col gap-5  items-center shadow-xl rounded-xl">
                    <span className="text-4xl text-white/80 font-bold ">Start your organized journey</span>


                    <form className=" w-full flex  flex-col gap-5 items-center">
                      <div className="flex flex-col w-full">
                          <label className="text-white/70">Username</label>
                          <input type="text" className=" outline-none bg-white/90  p-2 text-black  rounded-lg" placeholder="Enter your Username"/>

                       </div>
                       <div className="flex flex-col w-full">
                           <label className="text-white/70">Password</label>
                           <input type="password" className=" outline-none bg-white/90 text-black p-2 w-full rounded-lg " placeholder="Enter your Password"/>

                        </div>

                        <div className=" w-full flex justify-between">
                           <div>
                             <input type="checkbox" className="cursor-pointer"/>
                              <span className=" text-white/70">Remember me</span>  
                           </div>
                           <span className="text-white/70 hover:underline cursor-pointer">Forgot password?</span>
                        
                        </div>

                         <div className="w-full flex justify-center">
                             <button className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 shadow-lg">Signin</button>
                         </div>
                        <div>
                              <span className="text-white/80">Are you new here? <a href="#" className="text-blue-400 cursor-pointer hover:underline">Register here...</a></span>
                        </div>
                    
                    </form>
                </div>

            </div>

    )
}