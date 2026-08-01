import {useState,useEffect} from 'react'
import axios from "axios";

// import { holdings } from "../data/data.js";


function Holdings() {



  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/addHoldings").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data);
    })

  },[]);


  return (
    <div className="h-full w-full ">
      <h3>Holdings({allHoldings.length})</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300 text-gray-500 text-sm">
              <th className="py-3 px-4 text-left font-normal">Instrument</th>
              <th className="py-3 px-4 text-center font-normal">Qty.</th>
              <th className="py-3 px-4 text-center font-normal">Avg. Cost</th>
              <th className="py-3 px-4 text-center font-normal">LTP</th>
              <th className="py-3 px-4 text-center font-normal">Cur. Val</th>
              <th className="py-3 px-4 text-center font-normal">P&amp;L</th>
              <th className="py-3 px-4 text-center font-normal">Net Chg.</th>
              <th className="py-3 px-4 text-center font-normal">Day Chg.</th>
            </tr>
          </thead>
          {allHoldings.map((stocks, index) => {
            const currValue = stocks.price * stocks.qty;
            const isProfit = currValue - stocks.avg * stocks.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stocks.isLoss ? "loss" : "profit";

            return (
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
                  <td className="py-4 px-4">{stocks.name}</td>
                  <td className="py-4 px-4 text-center">{stocks.qty}</td>
                  <td className="py-4 px-4 text-center">{stocks.avg.toFixed(2)}</td>
                  <td className="py-4 px-4 text-center">{stocks.price.toFixed(2)}</td>
                  <td className="py-4 px-4 text-center">{currValue.toFixed(2)}</td>
                  <td className="py-4 px-4 text-center text-green-600">
                  {(currValue-stocks.avg*stocks.qty).toFixed(2)}  
                  </td>
                  <td className="py-4 px-4 text-center text-green-600">
                   {stocks.net} 
                  </td>
                  <td className="py-4 px-4 text-center text-green-600">
                   {stocks.day} 
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Holdings;
