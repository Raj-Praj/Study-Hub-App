import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { InputField } from "./components/form/input"
import FormLabel from "./components/form/label"
import { Link } from "react-router"
import FormButton from "./components/form/button"
import {zodResolver} from "@hookform/resolvers/zod"
const LoginSchema=z.object({
    username:z.string().min(8),
    password:z.string().min(8),
    rememberMe:z.boolean()
})
type LoginCredentials=z.infer<typeof LoginSchema>

export default function LoginForm(){
    const{control,handleSubmit,formState:{errors}}=useForm<LoginCredentials>({
        defaultValues:{
            username:"",
            password:"",
            rememberMe:false
           
            
        },resolver:zodResolver(LoginSchema)

    },
)
const LoginApiCaller=(data:LoginCredentials)=>{
    console.log(data)

}
    return(
    <>
  
            <form 
                 className="w-full flex  flex-col gap-3 items-center"
                  onSubmit={handleSubmit(LoginApiCaller)}
             >
                 <div className="flex flex-col w-full">
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <InputField  errorMsg={errors?.username?.message} control={control} id="username" name="username" type="text" placeholder="Enter Your Username"/>
                 </div>

                 <div className="flex flex-col w-full">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputField errorMsg={errors?.password?.message} control={control}  id="password" name="password" type="password" placeholder="Enter Your Password"/>
                 </div>

                 <div className=" w-full flex justify-between">
                           <div>
                            {/* using register for checkbox */}
                            {/* <input type="checkbox" className="cursor-pointer" {...register("rememberMe")}/> */}
                            <Controller
                            control={control}
                            name="rememberMe"
                            render={({field})=>{
                                    return(
                                    <>
                                      <input type="checkbox" className="cursor-pointer"
                                      checked={field.value}
                                      onChange={(e)=>field.onChange(e.target.checked)}/>
                                    </>)
                            }} 
                             />
                            
                              <span className=" text-white/70">Remember me</span>  
                           </div>
                           <span className="text-white/70 hover:underline cursor-pointer">Forgot password?</span>
                        
                   </div>


                    <div className="w-full flex ">
                        <FormButton type="submit">Login</FormButton>                  
                     </div>

                    <div>
                              <span className="text-white/80">Are you new here? <Link to="register" className="text-blue-400 cursor-pointer hover:underline">Register here...</Link></span>
                   </div>
                    
                     



            </form>


    </>
    )
}