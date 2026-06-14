import { Link } from "react-router"

import FormInputField from "../../ui/form/input";
import FormButton from "../../ui/form/formbutton";
import FormLabel from "../../ui/form/formlabel";
export default function RightSideComponent(){
    
    return(
    <>
    <section className="w-2/5 h-screen bg-mist-400">
          <section className=" w-full h-full flex justify-center items-center">
              <div className=" bg-gray-500/40  w-[400px] h-[600px] rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">
                 
                   <FormLabel className="text-2xl">Login into Study Hub</FormLabel>
                   
                     <div className="flex flex-col gap-7">

                    <FormInputField type="text" placeholder="Enter your name"/>
                    <FormInputField type="text" placeholder="Enter your name"/>

                    </div>

                    
                     
                     <FormButton navigateWhere="/home">Log in</FormButton>
                     
                      
                        <FormLabel className="text-xl text-center text-gray-800"> New here?{" "}
                        <Link to="/register-page" className="text-blue-800 cursor-pointer">
                        Register</Link> </FormLabel>
                 </div>
             </section>
         </section>

    </>
    )
}