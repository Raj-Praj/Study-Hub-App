//import { useNavigate } from "react-router"

import type { ReactNode } from "react"

export type FormButtonProps={
    type:"submit"|"reset"|"button",
   
    children:ReactNode,
    className?:string
}
export default function FormButton({type="button",children,className}:Readonly<FormButtonProps>){
    
    return(<>
                         <button type={type} className={`cursor-pointer  justify-center items-center w-30 h-10 border rounded-full text-xl hover:bg-sky-700 ${className}` } >
                            {children}
                            </button>
     
    </>)
}