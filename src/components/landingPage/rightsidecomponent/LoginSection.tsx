import { Link } from "react-router"

//import FormInputField from "../../ui/form/input";
import FormButton from "../../ui/form/formbutton";
import FormLabel from "../../ui/form/formlabel";
import { Controller, useForm } from "react-hook-form";
export interface Icredentials{
    username:string,
    password:string
}
export default function LoginSection(){
    const{control,handleSubmit}=useForm<Icredentials>({
        defaultValues:{
            username:"",
            password:""
        }
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
                   
                     <div className="flex flex-col gap-7">
                        <Controller
                        name="username"
                        control={control}
                        render={({field})=>{
                            return(
                                <input
                                type="text"
                                {...field}
                                className="border-2 rounded-full  w-70 h-12 text-sm p-3"
                                name="username"
                                placeholder="Enter your username..."
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
                                type="password"
                                {...field}
                                className="border-2 rounded-full  w-70 h-12 text-sm p-3"
                                name="passwprd"
                                placeholder="Enter your password..."
                                />

                            )
                        }}
                        />

{/* 
                    <FormInputField type="text" placeholder="Enter your name"/>
                    <FormInputField type="text" placeholder="Enter your name"/> */}

                    </div>

                    
                     
                     <FormButton type="submit">Log in</FormButton>
                     
                      
                        <FormLabel className="text-xl text-center text-gray-800"> New here?{" "}
                        <Link to="/register-page" className="text-blue-800 cursor-pointer">
                        Register</Link> </FormLabel>
                 </div>
                 </form>
             </section>
         

    </>
    )
}