import verrsity from "../../../assets/education.svg"

export function Education(){
    return(
        <div className=" w-full p-20 grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <img src={verrsity} alt="awardImage" />
                    </div>
                    <div className="col-span-6">
                        <h2 className="text-3xl font-bold">Free and open market education</h2>
                        <br />
                        <p className="mt-2 text-1xl text-gray-500">Versity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <br />
                        < a className="text-blue-500 underline text-1xl" href="http://">Varsity</a>
                        <br />
                        <p className="mt-2 text-1xl text-gray-500">TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                        <br />
                        < a className="text-blue-500 underline text-1xl" href="http://">TradingQ&A</a>


                        
                        
                    </div>
                    
        
                    
                </div>
    )
}