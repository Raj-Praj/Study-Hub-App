import type { HTMLInputTypeAttribute } from "react"
import { Controller, type FieldValues, type Path,type Control } from "react-hook-form"

export type InputfieldProps<T extends FieldValues>={
    type?:HTMLInputTypeAttribute,
    placeholder?:string,
    control:Control<T>,
    name:Path<T>,
    errMsg?:string
}
export default function FormInputField<T extends FieldValues>({name,type='text',placeholder,control,errMsg}:Readonly<InputfieldProps<T>>){
    return(
    <>
    <Controller
    name={name}
    control={control}
    render={({field})=>{
        return(
            <>
            <input 
            type={type} 
            {...field}
            className=" border-2 rounded-full  w-70 h-8 text-sm p-3" 
            placeholder={placeholder}
            />
            <span className="text-red-600 italic text-sm">{errMsg}</span>
            </>
            

        )
    }}

    />
                 
                       {/* <input type={type} className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder={placeholder}/>
                  */}
                
    </>)
}