// import {positions} from "../data/data.js";
import {useState,useEffect} from 'react'
import axios from "axios";


function Positions(){

  const [allPositions,setAllPositions]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/addPositions").then((res)=>{
      console.log(res.data);
      setAllPositions(res.data);
    })

  },[]);
    return (
        <div className="h-full w-full ">
              <h3>Positions ({allPositions.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300 text-gray-500 text-sm">
                      <th className="py-3 px-4 text-left font-normal">Product</th>
                      <th className="py-3 px-4 text-center font-normal">Instrument.</th>
                      <th className="py-3 px-4 text-center font-normal">Qty.</th>
                      <th className="py-3 px-4 text-center font-normal">Avg</th>
                      <th className="py-3 px-4 text-center font-normal">LTP</th>
                      <th className="py-3 px-4 text-center font-normal">P&L</th>
                      <th className="py-3 px-4 text-center font-normal"> Chg.</th>
                      
                    </tr>
                  </thead>
                  {allPositions.map((stocks, index) => {
                    const currValue = stocks.price * stocks.qty;
                    const isProfit = currValue - stocks.avg * stocks.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stocks.isLoss ? "loss" : "profit";
        
                    return (
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
                          <td className="py-4 px-4">{stocks.product}</td>
                          <td className="py-4 px-4 text-center">{stocks.name}</td>
                          <td className="py-4 px-4 text-center">{stocks.qty}</td>
                          <td className="py-4 px-4 text-center">{stocks.avg.toFixed(2)}</td>
                          <td className="py-4 px-4 text-center">{stocks.price.toFixed(2)}</td>
                          {/* <td className="py-4 px-4 text-center">{currValue.toFixed(2)}</td> */}
                          <td className="py-4 px-4 text-center text-green-600">
                          {(currValue-stocks.avg*stocks.qty).toFixed(2)}  
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
    )
}
export default Positions;