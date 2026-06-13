export type InputfieldProps={
    type:string,
    placeholder:string
}
export default function FormInputField({type,placeholder}:Readonly<InputfieldProps>){
    return(
    <>
   
                   <form>    
                       <input type={type} className=" border-2 rounded-full  w-70 h-12 text-sm p-3" placeholder={placeholder}/>
                 
                     </form>
    </>)
}