import { useForm } from "react-hook-form"
import z from "zod"
import { InputField } from "./components/form/input"
import FormLabel from "./components/form/label"
import { Link } from "react-router"
import FormButton from "./components/form/button"
import { zodResolver } from "@hookform/resolvers/zod"

const RegisterSchema=z.object({
    name:z.string().max(40).trim().nonempty(),
    email:z.email().nonempty(),
    password:z.string()
            .regex(/[a-z]/,"Password should contain atleast one small letter")
            .regex(/[A-Z]/,"Include a Capital letter too")
            .regex(/[0-9]/,"How about adding a Number?")
            .min(8,"Password should be atleast 8 characters long")
            .max(30,"Password should be atmost of 30 characters long only"),
    cpassword:z.string().nonempty()
}).refine((val)=>val.password===val.cpassword,{
    message:"Re-password should match with above Password",
    path:['cpassword']
})
    

type RegisterCredentials=z.infer<typeof RegisterSchema>

export default function RegisterForm(){
    const{control,handleSubmit,formState:{errors}}=useForm<RegisterCredentials>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            cpassword:"",

            
        },resolver:zodResolver(RegisterSchema)

    },
)
const UserRegisterCaller=(data:RegisterCredentials)=>{
    console.log(data)

}
    return(
    <>
  
            <form 
                 className="w-full flex  flex-col gap-2 items-center"
                  onSubmit={handleSubmit(UserRegisterCaller)}
             >
                 <div className="flex flex-col w-full ">
                        <FormLabel>Name</FormLabel>
                        <InputField errorMsg={errors?.name?.message} control={control} name="name" type="text" placeholder="Enter Your Name"/>
                 </div>
                
                <div className="flex flex-col w-full ">
                        <FormLabel>Email</FormLabel>
                        <InputField errorMsg={errors?.email?.message} control={control} name="email" type="email" placeholder="Enter Your Email"/>
                 </div>

                 <div className="flex flex-col w-full ">
                    <FormLabel>Password</FormLabel>
                    <InputField errorMsg={errors?.password?.message} control={control} name="password" type="password" placeholder="Create a New  Password"/>
                 </div>
                 
                 
                 <div className="flex flex-col w-full ">
                    <FormLabel>Re-password</FormLabel>
                    <InputField  errorMsg={errors?.cpassword?.message} control={control} name="cpassword" type="password" placeholder="Enter your password again"/>
                 </div>
                


                    <div className="w-full flex justify-center">
                             <FormButton type="submit" className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 shadow-lg">Register</FormButton> 
                    </div>

                    <div>
                              <span className="text-white/80">Already a User? <Link to="/"  className="text-blue-400 cursor-pointer hover:underline">Login here...</Link></span>
                   </div>
                    
                     



            </form>


    </>
    )
}