import type { HTMLInputTypeAttribute } from "react"
import { Controller, type FieldValues, type Path,type Control } from "react-hook-form"

export type InputfieldProps<T extends FieldValues>={
    type?:HTMLInputTypeAttribute,
    placeholder?:string,
    control:Control<T>,
    name:Path<T>
}
export default function FormInputField<T extends FieldValues>({name,type='text',placeholder,control}:Readonly<InputfieldProps<T>>){
    return(
    <>
    <Controller
    name={name}
    control={control}
    render={({field})=>{
        return(
            <input 
            type={type} 
            {...field}
            className=" border-2 rounded-full  w-70 h-12 text-sm p-3" 
            placeholder={placeholder}
            />

        )
    }}

    />
                 
                       {/* <input type={type} className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder={placeholder}/>
                  */}
                
    </>)
}