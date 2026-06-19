
import { NavLink } from "react-router"
export type NotFoundComponentProps={
    redirectTo:string
}
export default function NotFoundComponent({redirectTo}:Readonly<NotFoundComponentProps>){
    return(

    <section className="w-full h-screen bg-black">
        <h1 className="text-white">oops!</h1>
        <NavLink to={redirectTo} className="text-white" >Go back</NavLink>
    </section>

    
    )
};