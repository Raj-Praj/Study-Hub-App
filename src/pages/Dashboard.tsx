import Header from "../components/header/Header"

export default function Dashboard(){
    return(<>
    <section className=" w-full ">
        <Header />
        <section className="bg-purple-500 ">
            <div className=" h-20 p-4 bg-green-400 flex justify-between">
              <div>
              <h1 className="text-xl">Welcome back, raj</h1>
              <h2>Bachelor mode</h2>
              </div>
              <div className="flex justify-center items-center">
                <div className="border rounded-xl flex gap-2 p-2 positon:cursor bg-blue-200 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                <button>upload note</button>
                </div>
              </div>
            </div>

            <section className="px-4 flex flex-col gap-20 bg-red-400 p-5">
               <div className="flex justify-between bg-red-300 p-5">

                    <div className="h-50 w-50 bg-red-200 border flex flex-col justify-center px-5">
                      <p className="text-5xl mb-8">0</p>
                      <p>subjects</p>
                    </div>

             
                      <div className="h-50 w-50 bg-red-200 border flex flex-col justify-center px-5">
                          <p className="text-5xl mb-8">0</p>
                         <p>subjects</p>
                        </div>
                       <div className="h-50 w-50 bg-red-200 border flex flex-col justify-center">
                            <p className="">0</p>
                           <p>subjects</p>
                         </div>
                         <div className="h-50 w-50 bg-red-200 border flex flex-col justify-center">
                            <p className="">0</p>
                            <p>subjects</p>
                         </div>
                </div>

             <div className="flex flex-row justify-between bg-red-300 p-5">
                <div className="h-30 w-100 bg-red-200 border flex flex-col p-3 px-10">
                <h1>Recent Materials</h1>
                </div>

                <div className="h-30 w-100 bg-red-200 border flex flex-col justify-center">
                <p className="">0</p>
                <p>subjects</p>
                </div>

             </div>
             </section>
           
        </section>
    </section>
    </>)
}