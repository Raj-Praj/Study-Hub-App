import { Link } from "react-router"

export type SidebarNavLinkProps={
    to:string,
    label:string

}
export default function SidebarNavLink({to,label}:Readonly<SidebarNavLinkProps>){
    return(
    <>
         <Link to={to}>{label}</Link>
                         
    </>)
}