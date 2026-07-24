import type { HTMLInputTypeAttribute } from "react"
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form"


export type InputFieldProps<T extends FieldValues>={
    type?:HTMLInputTypeAttribute,
    control:Control<T>,
    name:Path<T>,
    placeholder?:string,
    className?:string,
    id?:string,
    errorMsg?:string
}
export const InputField=<T extends FieldValues>({type='text',name,control,placeholder,className,id,errorMsg}:Readonly<InputFieldProps<T>>)=>{
    return(
    <>

    <Controller 
    name={name}
    control={control}
    render={({field})=>{
        return(
        <>
        <input
        {...field}
        type= {type}
        id={id}
        placeholder={placeholder}
        className={` outline-none bg-white/90  p-2 text-black  rounded-lg ${className}`}

        />
       
            <span className="text-red-600/80 text-sm min-h-[20px] ">{errorMsg}</span>
    
        </>)
    }}
    />
    </>
    )

}