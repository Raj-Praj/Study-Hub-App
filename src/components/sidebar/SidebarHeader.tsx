export type SidebarHeaderProps={
    title:string,
    subtitle:string
}
export default function SidebarHeader({title,subtitle}:Readonly<SidebarHeaderProps>){
    return(
    <>
        <div className="h-22  pb-2 flex justify-center items-center flex-col ">
            <h1 className=" text-3xl">{title}</h1>
            <p>{subtitle}</p>
        </div>
    </>
    )
}