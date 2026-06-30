import type { ReactNode } from "react"

export type FormLabelProps={
    htmlFor?:string,
    className?:string,
    children:ReactNode

}
export default function FormLabel({htmlFor,className,children}:Readonly<FormLabelProps>){
    return(<>
    
     <label  htmlFor={htmlFor} className={`${className} text-white/70`}>{children}</label>
    
    
    </>)
}