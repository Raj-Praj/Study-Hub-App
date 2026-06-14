import { Link } from "react-router"
import FormLabel from "../../ui/form/formlabel"
import FormInputField from "../../ui/form/input"
import FormButton from "../../ui/form/formbutton"
export default function RegisterSection(){
    return(<>
    
        {/*Register section*/}
        <section className="w-2/5 h-screen bg-mist-400">
          <section className=" w-full h-full flex justify-center items-center">
              <div className=" bg-gray-500/40  w-100 h-150 rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">

                  <FormLabel className="text-2xl" >Sign up</FormLabel>
            
                    <div className="flex flex-col gap-7">
                        <FormInputField type="text" placeholder="enter your name"/>
                        <FormInputField type="text" placeholder="enter email"/>
                        <FormInputField type="password" placeholder="create a passsword"/>
                     </div>
                     
                     <div className="flex justify-center items-center h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 cursor-pointer">
                         <FormButton navigateWhere="/home">Register</FormButton>
                        
                     </div>
                     <FormLabel className="text-lg text-center text-gray-800">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-800 cursor-pointer">
                        Login
                        </Link>
                        </FormLabel>
                      
                             
        
                 </div>
             </section>
         </section>
     
    </>)
}