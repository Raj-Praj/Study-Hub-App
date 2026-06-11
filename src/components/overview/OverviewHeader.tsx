export type OverviewHeaderProps={
    username:string|number,
    quote:string
}
export default function OverviewHeader({username,quote}:Readonly<OverviewHeaderProps>){
    return(
        <>
        <div>
            <h1 className="text-xl">Welcome back, {username}</h1>
            <h2>{quote}</h2>
          </div>
        </>
    )
}