import { useForm } from "react-hook-form"
import z from "zod"
import { InputField } from "./components/form/input"
import FormLabel from "./components/form/label"
import { Link } from "react-router"

const LoginSchema=z.object({
    username:z.string(),
    password:z.string()
})
type LoginCredentials=z.infer<typeof LoginSchema>

export default function RegisterForm(){
    const{control,handleSubmit,formState:{errors}}=useForm<LoginCredentials>({
        defaultValues:{
            username:"",
            password:""
            
        },

    },
)
const LoginApiCaller=(data:LoginCredentials)=>{
    console.log(data)

}
    return(
    <>
  
            <form 
                 className="w-full flex  flex-col gap-5 items-center"
                  onSubmit={handleSubmit(LoginApiCaller)}
             >
                 <div className="flex flex-col w-full">
                        <FormLabel>Username</FormLabel>
                        <InputField control={control} name="username" type="text" placeholder="Enter Your Username"/>
                 </div>

                 <div className="flex flex-col w-full">
                    <FormLabel>Password</FormLabel>
                    <InputField control={control} name="password" type="password" placeholder="Enter Your Password"/>
                 </div>

                


                    <div className="w-full flex justify-center">
                             <button className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 shadow-lg">Signin</button>
                    </div>

                    <div>
                              <span className="text-white/80">Already a User? <Link to="/"  className="text-blue-400 cursor-pointer hover:underline">Login here...</Link></span>
                   </div>
                    
                     



            </form>


    </>
    )
}