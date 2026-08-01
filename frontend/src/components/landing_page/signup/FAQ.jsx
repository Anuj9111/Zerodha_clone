import { useState } from "react";
import {Link} from "react-router-dom"

export function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <div className="text-2xl flex "> FAQs</div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">What is Zerodha Account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">What documents are required to open a demat account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            What documents are required to open a demat account?
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">Is Zerodha account opening free?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            Yes, It is completely free.
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">Are there any AMC (Account Maintenance Charges) for a demat account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">What is Zerodha Account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">What is Zerodha Account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </p>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl font-semibold">What is Zerodha Account?</h2>

          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <p className="mt-3 text-gray-600 ">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </p>
        )}
      </div> */}


      <div className="w-full flex flex-col justify-center items-center mt-20 gap-4 mb-30" >
        <h1 className="text-4xl">Open a Zerodha account</h1>
        <p className="text-[20px]">Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
        <Link className="border bg-blue-600  text-white  hover:bg-black text-2xl w-[230px] h-[50px] rounded-[8px] p-[10px] pl-[40px]" to="/signup">Signup for free</Link>

      </div>
    </div>
  );
}
