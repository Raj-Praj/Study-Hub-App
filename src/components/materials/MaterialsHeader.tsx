export default function MaterialsHeader(){
    return(
    <>
    <div className="w-2/3  p-3">
        <h1 className="text-bold text-4xl ">Academic Materials</h1>
        <p>A curated archive of your research papers,course materials.</p>
    </div>
        <div className="w-1/3 flex gap-2 p-4 justify-center">
            <button className="p-2 text-white bg-blue-700 rounded h-10 w-30">sort</button>
            <button className="p-2 text-white bg-blue-700 rounded h-10 w-35">+ Add Material</button>
        </div>
    </>
    )
}