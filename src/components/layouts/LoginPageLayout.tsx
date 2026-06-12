import LeftSideComponent from "../landingPage/LeftSideComponent";
import RightSideComponent from "../landingPage/RightSideComponent";


export default function LoginPage(){
    
    return(
    <>
     <section className="flex w-full h-screen">
        {/*image content */}
          <LeftSideComponent/>

        {/*login form*/}
        
        <RightSideComponent/>
            
        
     </section>
  
    </>
    )
}