import { Link } from "react-router"
import FormLabel from "../../ui/form/formlabel"
//import FormInputField from "../../ui/form/input"
import FormButton from "../../ui/form/formbutton"
import { Controller, useForm } from "react-hook-form"
export interface iCredentials1{
    user_name:string,email:string,password:string

}
export default function RegisterSection(){
const{control,handleSubmit}=useForm<iCredentials1>({
    defaultValues:{
        user_name:"",
        email:"",
        password:""

    }
})
const registerApiCaller=(data:iCredentials1)=>{
    console.log(data)
}

    return(<>
    
        {/*Register section*/}
        <section className="w-2/5 h-screen bg-mist-400 flex justify-center items-center">
            <form onSubmit={handleSubmit(registerApiCaller)}>
              <div className=" bg-gray-500/40  w-100 h-150 rounded-2xl shadow-lg p-10 text-2xl flex flex-col gap-20">

                  <FormLabel className="text-2xl" >Sign up</FormLabel>
            
                    <div className="flex flex-col gap-7">

                        <Controller
                        name="user_name"
                        control={control}
                        render={({field})=>{
                            return(
                                <input
                                {...field}
                                type="text"
                                name="user_name"
                                placeholder="enter a name...."
                                className="border-2 rounded-full  w-70 h-12 text-sm p-3"
                                />
                            )
                        }}
                        />

                         <Controller
                        name="email"
                        control={control}
                        render={({field})=>{
                            return(
                                <input
                                {...field}
                                type="text"
                                name="email"
                                placeholder="enter your email...."
                                className="border-2 rounded-full  w-70 h-12 text-sm p-3"
                                />
                            )
                        }}
                        />

                         <Controller
                        name="password"
                        control={control}
                        render={({field})=>{
                            return(
                                <input
                                {...field}
                                type="password"
                                name="password"
                                placeholder="Create a Password...."
                                className="border-2 rounded-full  w-70 h-12 text-sm p-3"
                                />
                            )
                        }}
                        />

                        {/* <FormInputField type="text" placeholder="enter your name"/>
                        <FormInputField type="text" placeholder="enter email"/>
                        <FormInputField type="password" placeholder="create a passsword"/> */}
                     </div>
                     
                     <div className="flex justify-center items-center h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 cursor-pointer">
                         <FormButton type="submit">Register</FormButton>
                        
                     </div>
                     <FormLabel className="text-lg text-center text-gray-800">
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