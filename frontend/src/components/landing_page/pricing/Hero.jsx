import intradayTrades from '../../../assets/intradayTrades.svg'
import pricing0 from '../../../assets/pricingEquity.svg'



export function Hero() {
  return (
    <div className='pb-[10px]'>
      <div className="w-full h-80 flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl  ">Charges</h1>
        <h1 className="text-[25px] text-gray-500m text-gray-500">
          {" "}
          List of all charges and taxes
        </h1>
      </div>
      <div className="w-full grid grid-cols-12 px-40 gap-4">
        <div className="col-span-4">
            <img className="w-[250px] h-[187.5px]" src={pricing0} alt="zero" />
            <h1 className="text-3xl pb-5 mx-[10px]">Free equity delivery</h1>
            <p className='text-gray-600 leading-7 text-[18px]'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            
        </div>
        <div className="col-span-4">
            <img className="w-[250px] h-[187.5px]" src={intradayTrades} alt="" />
            <h1 className="text-3xl pb-5">Intraday and F&O trades</h1>
            <p className='text-gray-600 leading-7 text-[18px]'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-span-4">
            <img className="w-[250px] h-[187.5px]" src={pricing0} alt="zero" />
            <h1 className="text-3xl pb-5 mx-10" >Free direct MF</h1>
            <p className='text-gray-600 leading-7 text-[18px]'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>

      </div>
    </div>
  );
}
