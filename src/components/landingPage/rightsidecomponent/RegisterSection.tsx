import { Link } from "react-router"
import FormLabel from "../../ui/form/formlabel"
//import FormInputField from "../../ui/form/input"
import  { CancelButton, SubmitButton } from "../../ui/form/button"
import {  useForm } from "react-hook-form"
import FormInputField, { SelectInput } from "../../ui/form/input"
import  z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// export interface iCredentials1{
//     user_name:string,email:string,password:string

// }

const RegisterDTO=z.object({             //schema
      user_name:z.string().nonempty().nonoptional(),
        email:z.email().nonempty().nonoptional(),
        new_password:z.string().nonempty().nonoptional(),
        current_password:z.string().nonempty().nonoptional(),
        role:z.string().nonempty("Please select a role")




})
type Rcredentials=z.infer<typeof RegisterDTO>
export default function RegisterSection(){
const{control,handleSubmit,formState:{errors}}=useForm<Rcredentials>({
    defaultValues:{
        user_name:"",
        email:"",
        new_password:"",
        current_password:"",
        role:""

    },resolver:zodResolver(RegisterDTO)
})
const RegisterUser=(data:Rcredentials)=>{
   console.log(data)
//    if(new_password===current_password){
//     console.log("password donot match")
//    }
}

    return(<>
    
        {/*Register section*/}
        <section className="w-2/5 h-screen bg-mist-400 flex justify-center items-center">


            <form onSubmit={handleSubmit(RegisterUser)}>
              <div className=" bg-gray-500/40  w-100 h-170 rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-10">

                  <FormLabel className="text-2xl h-10 " >Sign up</FormLabel>
            
                    <div className="flex flex-col gap-3 ">

                        <FormInputField errMsg={errors?.user_name?.message} name="user_name" control={control} placeholder="Enter your name"/>
                        <FormInputField errMsg={errors?.email?.message} type="text" name="email" control={control} placeholder="Enter your email"/>
                        <FormInputField errMsg={errors?.new_password?.message} type="password" name="new_password" control={control} placeholder="Create a password"/>
                        <FormInputField errMsg={errors?.current_password?.message} type="password" name="current_password" control={control} placeholder="Enter your  password again"/>
                        <SelectInput errMsg={errors?.role?.message} name="role" control={control} options={[{label:"Buyer",value:"customer"},{label:"vendor/seller",value:"seller"}]}/>
                     </div>
                     

                     <div className="flex justify-center gap-3">
                         <CancelButton>Reset</CancelButton>
                         <SubmitButton>Register</SubmitButton>
                        
                     </div>
                     <FormLabel className="text-lg text-center text-gray-800 ">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-800 cursor-pointer">
                        Login
                        </Link>
                        </FormLabel>
                      
                 </div>
                 </form>



             </section>
        
     
    </>)
}