import type { ReactNode } from "react"

export type UploadBtnProps={
    onClick?:()=>void,
    children:ReactNode
}
export default function OverviewUploadBtn({onClick,children}:Readonly<UploadBtnProps>){
    return(
    <>
    <div onClick={onClick}
        className="border rounded-xl flex gap-2 p-2 cursor-pointer bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" 
           d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
         </svg>
        <button>{children}</button>
    </div>
    </>
    )
}