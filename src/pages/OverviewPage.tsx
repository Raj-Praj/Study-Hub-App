import OverViewCard from "../components/overview/OverviewCard";
import OverviewHeader from "../components/overview/OverviewHeader";
import OverviewUploadBtn from "../components/overview/OverviewUploadBtn";

export default function OverviewContent() {
  return (
    <section className="flex flex-col w-full h-full overflow-hidden bg-[#F4F4F4]">

     
      <div className="flex justify-center items-center p-3 h-[calc(100%/6)] w-full shrink-0">
        <div className="flex w-full h-20 justify-between bg-transparent   p-3 ">

          <OverviewHeader username="Raj" quote="The world is itself a mirror to your action"/>

          <div className="flex justify-center items-center">

            <OverviewUploadBtn>Upload notes</OverviewUploadBtn>

          </div>
        </div>
      </div>

      {/* Main */}
      <section className="flex flex-1 w-full min-h-0">

        {/* Left panel */}
        <section className="flex flex-col w-3/4 h-full ">
          <div className="flex w-full h-1/3  items-center justify-center ">
            <section className="w-full flex justify-between items-center p-8">

               <OverViewCard value={120} title="Materials Uploaded"/>
               <OverViewCard value={6} title="Total Collections"/>
               <OverViewCard value={12} title="Recents"/>
               <OverViewCard value={0} title="Reminders"/>


              
            </section>
          </div>
          <div className="flex justify-center items-center w-full h-2/3 bg-pink-200">
            graph
          </div>
        </section>

       {/*right */}
        <section className="bg-gray-200 w-1/4 h-full">
          recent
        </section>

      </section>

    </section>
  );
}