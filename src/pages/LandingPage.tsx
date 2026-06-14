import LeftSideComponent from "../components/landingPage/LeftSideComponent";
import RightSideComponent from "../components/landingPage/loginpage/RightSideComponent";
//import LoginPage from "../components/layouts/LoginPageLayout";

export default function LandingPage(){
    return(<>
    <section className="flex w-full h-screen">
      <LeftSideComponent/>
      <RightSideComponent/>
      </section>
    </>)
}