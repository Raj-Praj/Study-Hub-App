
export default function DashboardContent(){
    return(<>
    <section className=" w-full h-screen">
       
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

            
        </section>
    </section>
    </>)
}