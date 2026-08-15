import signup from "../../../assets/signup.png";
import stocks from "../../../assets/Stocks.png";
import mutual from "../../../assets/MutualFund.png";
import Futures from "../../../assets/Futures.png";
import ipo from "../../../assets/IPO.png";
import {Link} from "react-router-dom";
export function Hero() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center my-20 gap-8  ">
        <h1 className="text-4xl">
          Open a free demat and trading account online
        </h1>
        <p className="text-[20px] text-gray-400">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="w-full grid grid-cols-12 px-55 gap-20 mb-20">
        <div className="col-span-6">
          <img className="w-[550px] h-[400px]" src={signup} alt="signup" />
        </div>
        <div className="col-span-6 gap-4 flex flex-col gap-6">
          <h1 className="text-2xl">Signup Now</h1>
          <p className="text-[20px] text-gray-600">
            Or track your existing application
          </p>
          {/* <input type="number" name="mobile" /> */}
          <button >
            <Link className="border bg-blue-600  text-white  hover:bg-black text-2xl w-[230px] h-[50px] rounded-xl px-[20px] py-3 " to="/signup">Sign up</Link>

          </button>
          <p className="text-gray-600">
            By proceeding, you agree to the Zerodha{" "}
            <a className=" text-blue-600 " href="">
              terms
            </a>{" "}
            &{" "}
            <a className=" text-blue-600 " href="">
              privacy policy
            </a>{" "}
          </p>
          <p className="text-gray-600">
            Looking to open NRI account?{" "}
            <a className="text-blue-600" href="">
              Click here
            </a>
          </p>
        </div>
      </div>
      <div className="w-full mx-[40px]  ">
        <h1 className="text-[25px] mx-120 mb-20 ">
          Investment options with Zerodha demat account
        </h1>
        <div className=" w-full grid grid-cols-12 px-60 mb-20  ">
          <div className="col-span-6 gap-4 flex mr-20">
            <div className="mr-5">
              <img className="w-[200px] h-[100px]" src={stocks} alt="" />
            </div>
            <div>
              <h1 className="text-[25px]">Stocks</h1>
              <p className="text-[17px] text-gray-600">Invest in all exchange-listed securities</p>
            </div>
          </div>
          <div className="col-span-6 gap-4 flex ml-20">
            <div className="mr-5">
              <img  className="w-[200px] h-[100px]"src={mutual} alt="" />
            </div>
            <div>
              <h1 className="text-[25px]">Mutual funds</h1>
              <p className="text-[17px] text-gray-600">Invest in commission-free direct mutual funds</p>
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-12 px-60">
          <div className="col-span-6 gap-4 flex mr-20">
            <div className="mr-5">
              <img className="w-[200px] h-[100px]" src={ipo} alt="" />
            </div>
            <div>
              <h1 className="text-[25px]">IPO</h1>
              <p className="text-[17px] text-gray-600">Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
          <div className="col-span-6 gap-6 flex ml-20">
            <div className="mr-5">
              <img className="w-[200px] h-[100px]" src={Futures} alt="" />
            </div>
            <div>
              <h1 className="text-[25px]">Futures & options</h1>
              <h1 className="text-[17px] text-gray-600">
                Hedge and mitigate market risk through simplified F&O trading
              </h1>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full flex justify-center mt-20">
        <Link className="  text-[23px] border border-1 rounded-[10px] pl-[25px] pt-[5px] bg-blue-600 text-white w-[250px] h-[50px] hover:bg-black" to="/product" >Explore Investment</Link>
      </div>

    </div>
  );
}
