import FormContent from "./components/FormSection";
import HeroContent from "./components/HeroSection";

export default function HeroWrapper(){
    return(
        <section className="w-full flex gap-10">

            <HeroContent/>
            
            <FormContent/>


        </section>
    )
}