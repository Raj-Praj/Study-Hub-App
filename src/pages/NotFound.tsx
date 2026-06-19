import NotFoundComponent from "../components/errors/NotFoundComponent";


export default function NotFound(){
    return(<>
        <section>
            <NotFoundComponent redirectTo="/"/>
        </section>
    </>)
}