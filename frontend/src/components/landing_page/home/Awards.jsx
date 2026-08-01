import AwardsImage from "../../../assets/largestBroker.svg"
import PressLogos from "../../../assets/pressLogos.png"

export function Awards(){
    return(
        <div className=" w-full p-20 grid grid-cols-12 gap-4">
            <div className="col-span-6">
                <img src={AwardsImage} alt="awardImage" />
            </div>
            <div className="col-span-6">
                <h2 className="text-3xl font-bold">Largest stock broker in India</h2>
                <p className="mt-2">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className="flex gap-40 mt-8 ">
                    <div>
                        <ul className="list-disc">
                            <li>Future and Options</li>
                            <br />
                            <li>Commodity derivatives</li>
                            <br />
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc">
                            <li> Stocks & IPOs</li>
                            <br />
                            <li>Direct mutual funds</li>
                            <br />
                            <li>Bonds and Gocts.Securities</li>
                            <br />
                        </ul>
                    </div>
                    
                </div>
                <div >
                    <img className="w-full h-10 " src={PressLogos} alt="pressLogos" />
                </div>
            </div>
            

            
        </div>
    ) 
}