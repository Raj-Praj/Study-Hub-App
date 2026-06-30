import type {  ReactNode } from "react"

type FormButtonProps={
    type?:"submit"|"reset"|"button",
    className?:string,
    children:ReactNode
}
export default function FormButton({type='button',className,children}:Readonly<FormButtonProps>){
    return(
    <>
             <button type={type}
                className={`${className} w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 shadow-lg`}>
                {children}
                </button>

    </>)
}