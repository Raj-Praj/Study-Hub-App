import background from "../../assets/LandingImages/background.jpg"
import LandingNavbar from "./components/Navbar"
import ContentWrapper from "./ContentLayout"
export default function LandingPage(){
    return(
        <>
        <section className="min-h-screen relative bg-red-200 bg-cover bg-center " style={{backgroundImage:`url(${background})`}}>
            <div className="bg-black/40 inset-0 absolute"></div>
            <div className="relative z-10">

                
                <LandingNavbar/>
                
                <ContentWrapper/>




            </div>
        </section>
        </>
    )

}
