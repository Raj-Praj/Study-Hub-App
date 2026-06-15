import MaterialsCard from "../components/materials/MaterialsCard";
import MaterialsHeader from "../components/materials/MaterialsHeader";

export default function MaterialsContent(){
    return(<>
    <section className="h-full w-full">
        <section className="flex justify-between h-1/6 w-full">
            <MaterialsHeader/>
        </section>

        <section className=" grid grid-cols-4 gap-5 p-10 h-4/6  w-ful">
            <MaterialsCard category="math" title="Calcus iii" uploadDate="oct 12 2023"/>
            <MaterialsCard category="math" title="Calcus iii" uploadDate="oct 12 2023"/>
            <MaterialsCard category="math" title="Calcus iii" uploadDate="oct 12 2023"/>
            <MaterialsCard category="math" title="Calcus iii" uploadDate="oct 12 2023"/>
            <MaterialsCard category="math" title="Calcus iii" uploadDate="oct 12 2023"/>

        </section>

        <section className="h-1/6 flex items-center justify-center">hello</section>

    
    </section>
    </>)
}