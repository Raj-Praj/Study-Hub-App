//import { useNavigate } from "react-router"

import type { ReactNode } from "react"

export type FormButtonProps={
    
    children:ReactNode,
    className?:string,
    disabled?:boolean
}


export const SubmitButton=({children,className,disabled=false}:Readonly<FormButtonProps>)=>{
    
    return(<>
          <button 
          disabled={disabled}
          type="submit" 
          className={`cursor-pointer  justify-center items-center w-30 h-10 border rounded-full text-xl bg-blue-700 transition duration-300 hover:scale(102) disabled:bg-blue-700/50 disabled:cursor-not-allowed  disabled:scale-100 ${className}` } >
                 {children}
             </button>
     
    </>)
}

export const CancelButton=({children,className,disabled=false}:Readonly<FormButtonProps>)=>{
    
    return(<>
          <button 
          disabled={disabled}
          type="reset"
           className={`cursor-pointer  justify-center items-center w-30 h-10 border rounded-full text-xl bg-red-700 transition duration-300 hover:scale(102) disabled:bg-red-700/50 disabled:cursor-not-allowed  disabled:scale-100 ${className}` } >
                 {children}
             </button>
     
    </>)
}