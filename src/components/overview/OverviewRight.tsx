import type { ReactNode } from "react"

export type OverviewRightProps={
    title:string,
    content:ReactNode
}
export default function OverviewRightBottom({title,content}:Readonly<OverviewRightProps>){
    return(
    <>
    <section className=" flex flex-col    w-1/4 h-full">
    <div className="flex items-center h-1/10 px-10 text-xl">
    <span>{title}</span>
    </div>

    <div className="h-9/10  flex justify-center pt-5">
    <div className="bg-white border-2 border-[#E5E7EB] h-100 w-3/4 rounded-xl">
        {content}
    </div>
    </div>
    </section>
    </>
    )
}