import LeftSideComponent from "../landingPage/loginpage/LeftSideComponent";
import RightSideComponent from "../landingPage/loginpage/RightSideComponent";


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