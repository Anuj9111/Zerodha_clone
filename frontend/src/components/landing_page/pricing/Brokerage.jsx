import { useState } from "react";
import Currency from "../../../assets/Currency.png";
import Commodity from "../../../assets/Commodity.png";
import Equity from "../../../assets/Equity.png";
import Charges from "../../../assets/Charges.png";
export function Brokerage() {
  const [image, setImage] = useState(Equity);

  return (
    <div>
      <div className="flex  mx-40 gap-8 pl-7 mt-15 ">
        <div
          className="text-2xl text-blue-600 hover:text-gray-700 "
          onClick={() => setImage(Equity)}
        >
          Equity
        </div>
        <div
          className="text-2xl text-blue-600 hover:text-gray-700 "
          onClick={() => setImage(Currency)}
        >
          Currency
        </div>
        <div
          className="text-2xl text-blue-600 hover:text-gray-700 "
          onClick={() => setImage(Commodity)}
        >
          Commodity
        </div>
      </div>
      <hr className="mx-30 ml-40 mr-40 border-gray-300 my-5 " />
      <div className=" mx-40 mb-10">
        <img className="w-[1000px] h-[500px]" src={image} alt="Equity" />
      </div>
      <div className=" mx-30 mb-20 flex justify-center">
        <p className="text-[23px]">Calculate your costs upfront using our brokerage calculator</p>
      </div>
      <div className="w-full mx-40 mb-20">
        <h1 className="text-[30px] mb-5">Charges for account opening</h1>
        <img className="w-[800px] h-[300px] " src={Charges} alt="charges" />

      </div>
    </div>
  );
}
