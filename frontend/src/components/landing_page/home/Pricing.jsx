import zero from "../../../assets/pricing0.svg"
import twenty from "../../../assets/intradayTrades.svg"

export function Pricing(){
    return(
        <div  className="w-full p-20 grid grid-cols-12 gap-30 ">

            <div className="col-span-6">
                <h3 className="text-4xl font-bold ">Unbeatable India</h3>
                <br />
                <p className="text-gray-500">We pioneered the concept of discount broking and price transparency in india .Flat fees and no hidden charges.</p>
                <br />
                <a  className="text-blue-500 underline" href="">See pricing</a>
            </div>
            <div className="col-span-6 flex gap-5">
                <div className="border-1 rounded-2xl p-2"> 
                     <img className="h-[100px] w-[100px] m-auto"src={zero} alt="zero" />
                     <p className="text-gray-500">ohofidhoaeRHgowishbohegoibhoitho</p>
                </div>
                <div className="border-1 rounded-2xl p-2">
                    <img className="h-[100px] w-[100px] m-auto" src={twenty} alt="zero" />
                     <p className="text-gray-500">ohofidhoaeRHgowishbhegoibhoitho</p>

                </div>
            </div>
        </div>
    )
}