import { Link } from "react-router"

//import FormInputField from "../../ui/form/input";
import  { SubmitButton } from "../../ui/form/button";
import FormLabel from "../../ui/form/formlabel";
import {useForm } from "react-hook-form";
import FormInputField from "../../ui/form/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// export interface Icredentials{
//     username:string,
//     password:string
// }
const LoginDTO=z.object({
            username:z.string().min(1,"Username is required").nonoptional(),
            password:z.string().nonempty("Password is required").nonoptional()
})
type Icredentials=z.infer<typeof LoginDTO>
export default function LoginSection(){
    const{control,handleSubmit,formState:{errors}}=useForm<Icredentials>({
        defaultValues:{
            username:"",
            password:""
        },
        resolver:zodResolver(LoginDTO)
    })
    const loginApiCaller=(data:Icredentials)=>{
        console.log(data)
    }
    
    return(
    <>
    <section className="w-2/5 h-screen bg-mist-400 flex justify-center items-center">
          <form onSubmit={handleSubmit(loginApiCaller)}>
              <div className=" bg-gray-500/40  w-[400px] h-[600px] rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">
                 
                   <FormLabel className="text-2xl">Login into Study Hub</FormLabel>
                   
                     <div className="flex flex-col gap-3">
                       <FormInputField name="username" errMsg={errors?.username?.message} control={control} placeholder="Enter your Username"/>
                       <FormInputField type="password" errMsg={errors?.password?.message} name="password" control={control} placeholder="Enter your Password"/>


                    </div>

                    
                      <div className="flex justify-center"> 
                         <SubmitButton>Login</SubmitButton>
                        </div>
                    
                     
                      
                        <FormLabel className="text-xl text-center text-gray-800"> New here?{" "}
                        <Link to="/register-page" className="text-blue-800 cursor-pointer">
                        Register</Link> </FormLabel>
                 </div>
                 </form>
             </section>
         

    </>
    )
}