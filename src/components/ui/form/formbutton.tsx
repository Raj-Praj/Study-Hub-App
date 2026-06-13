import { useNavigate } from "react-router"

export type FormButtonProps={
    navigateWhere:string,
    children:string
}
export default function FormButton({navigateWhere,children}:Readonly<FormButtonProps>){
    const navigate=useNavigate()
    return(<>
    <div className="flex justify-center items-center">
                         <button  className="cursor-pointer  justify-center items-center w-60 h-10 bg-blue-600 rounded-full text-xl hover:bg-sky-700 " onClick={()=>navigate(navigateWhere)}>{children}</button>
                     </div>
    </>)
}