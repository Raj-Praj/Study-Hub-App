
import FormContent from "./components/FormSection";
import HeroContent from "./components/HeroSection";

export default function ContentWrapper(){
    return(
        <section className="w-full flex gap-10 relative items-start ">
            

             <div className="w-2/5 flex  justify-center px-10 items-start ml-5 text-left  flex-col ">

                  <HeroContent/>

             </div>

       
        
            
             <div className="w-3/5 flex justify-center items-center px-10 ">

                    <div className=" mt-10 w-[500px]   border  border-white/20  backdrop-blur-sm bg-white/10 py-5 px-10 flex flex-col gap-5  items-center shadow-xl rounded-xl">
                            <span className="text-4xl text-white/80 font-bold ">Start your organized journey</span>

                           <FormContent/>
                     </div>

            </div>


        </section>
    )
}