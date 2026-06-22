//import { useNavigate } from "react-router"

export type FormButtonProps={
    type:"submit"|"reset"|"button",
    navigateWhere?:string,
    children:string
}
export default function FormButton({type="button",children}:Readonly<FormButtonProps>){
    //const navigate=useNavigate()
    return(<>
    <div className="flex justify-center items-center">
                         <button type={type} className="cursor-pointer  justify-center items-center w-60 h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 " >
                            {children}
                            </button>
     </div>
    </>)
}