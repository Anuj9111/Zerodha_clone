import { FaPlusCircle } from "react-icons/fa";
import { MdArrowDropDownCircle } from "react-icons/md";
export function CreateTicket() {
  return (
    <div className="grid grid-cols-12 w-full px-40 mt-20 mb-20">
      <div className="flex flex-col gap-6 w-full col-span-8">
        <div className="flex justify-between border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl">Account Opening</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>

        

        <div className="flex justify-between border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl"> Your Zerodha Account</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>

        <div className="flex justify-between border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl">Kite</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>

        <div className="flex justify-between border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl"> Funds</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>

        <div className="flex justify-between border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl">Console</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>

        <div className="flex justify-between  border h-[60px] border-gray-300 rounded-[5px] hover:scale-105 ">
          <div className="flex gap-10 items-center pl-5 ">
            <FaPlusCircle className="text-3xl  " />
            <p className="text-2xl"> Coin</p>
          </div>
          <div className="flex items-center pr-5">
            <MdArrowDropDownCircle className="text-3xl " />
          </div>
        </div>
      </div>
      <div className="col-span-4 w-full ml-20  ">
        <div className="border-gray-400 flex h-40 ">
          <div className="bg-amber-700 w-2 "></div>
          <div className=" bg-amber-300 text-blue-600 flex flex-col gap-7 p-2 ">
            <p className="text-xl underline  hover:text-black">Current Takeovers and Delisting – July 2026</p>
            <p className="text-xl underline hover:text-black">Latest Intraday leverages and Square-off timings</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
