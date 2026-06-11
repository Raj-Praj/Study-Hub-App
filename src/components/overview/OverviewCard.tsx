import type { ReactNode } from "react"

export type OverViewCardProps={
    icon?:ReactNode,
    value:number|string,
    title:string
}
export default function OverViewCard({icon,value,title}:Readonly<OverViewCardProps>){
    return(
    <>
    <div className="flex flex-col p-4 justify-center h-35 w-50 bg-white border-2 border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>{icon}</span>
                <p>{value}</p>
                <h1>{title}</h1>
              </div>
    </>)
}