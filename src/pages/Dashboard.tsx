export default function DashboardContent() {
  return (
    <section className="flex flex-col w-full h-screen overflow-hidden bg-[#F4F4F4]">

     
      <div className="flex justify-center items-center p-3 h-[calc(100%/6)] w-full shrink-0">
        <div className="flex w-full h-20 justify-between bg-transparent   p-3 ">
          <div>
            <h1 className="text-xl">Welcome back, Raj</h1>
            <h2>Bachelor mode</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="border rounded-xl flex gap-2 p-2 cursor-pointer bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              <button>upload note</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <section className="flex flex-1 w-full min-h-0">

        {/* Left panel */}
        <section className="flex flex-col w-3/4 h-full ">
          <div className="flex w-full h-1/3  items-center justify-center ">
            <section className="w-full flex justify-between items-center p-8">
              <div className="flex flex-col p-4 justify-center h-35 w-50 bg-white border border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>later icon</span>
                <p>120</p>
                <h1>notes uploaded</h1>
              </div>
              <div className="flex flex-col p-4 justify-center h-35 w-50 bg-white border border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>later icon</span>
                <p>120</p>
                <h1>notes uploaded</h1>
              </div>
              <div className="flex flex-col p-4 justify-center h-35 w-50 bg-white border border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>later icon</span>
                <p>120</p>
                <h1>notes uploaded</h1>
              </div>
              <div className="flex flex-col p-4 justify-center h-35 w-50 bg-white border border-[#E5E7EB]   rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                <span>later icon</span>
                <p>120</p>
                <h1>notes uploaded</h1>
              </div>
              
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