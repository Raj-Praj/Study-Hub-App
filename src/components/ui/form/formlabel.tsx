import type { ReactNode } from "react"

export type FormLabelProps={
    children:ReactNode,
    className:string
}
export default function FormLabel({className,children}:Readonly<FormLabelProps>){
    return(
    <>
        <span className={className}>{children}</span>
    </>
    )
}