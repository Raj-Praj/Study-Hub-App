export type MaterialsCardProps={
    category:string,
    title:string,
    uploadDate:string
}
export default function MaterialsCard({category,title,uploadDate}:Readonly<MaterialsCardProps>){
    return(<>
    <div className="flex flex-col justify-center gap-4 p-2 h-40 bg-white border-2 border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            
        <span className="text-md">{category}</span>
        <h1 className="text-3xl">{title}</h1>
        <hr />
        <span>{uploadDate}</span>
    </div>
    </>)
}