import { Outlet } from "react-router";
import LeftSideComponent from "../components/landingPage/leftsidecomponents/LeftSideComponent";

export default function LandingPage(){
    return(<>
    <section className="flex w-full h-screen">
      <LeftSideComponent/>
      <Outlet/>
      </section>
    </>)
}