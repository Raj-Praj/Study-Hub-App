import type { HTMLInputTypeAttribute } from "react"
import { Controller, type FieldValues, type Path,type Control} from "react-hook-form"

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
                 
                      
                
    </>)
}

export interface ISingleOption{
    label:string,
    value:string
}
export type SelectInputType<T extends FieldValues>={
    name:Path<T>,
    className?:string,
    options?:Array<ISingleOption>,
    control:Control<T>,
    errMsg?:string
}
export const SelectInput=<T extends FieldValues>({name,control,className,options,errMsg}:Readonly<SelectInputType<T>>)=>{
   
    return(
    <>

    <Controller name={name} control={control} 
    render={({field})=>{
        return(
            <>
            <select
               className={`border-2 rounded-full w-70 h-10 text-sm p-2 ${className}`}
                {...field}
              >
                 <option value="">--Select any One</option>
                       {options && options.map((val:ISingleOption,i:number)=>{
                            return <option key={i} value={val.value}>{val.label}</option>
                 })}
        
            </select>
            <span className="text-red-600 italic text-sm">
                {errMsg}
              </span>
            </>
        )
    }}/>
    
    </>
    )
}