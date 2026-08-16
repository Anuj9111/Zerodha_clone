// import {positions} from "../data/data.js";
import {useState,useEffect} from 'react'
import axios from "axios";
import { Vertical } from './Vertical.jsx';


function Positions(){

  const [allPositions,setAllPositions]=useState([]);
  useEffect(()=>{
    axios.get("https://zerodha-clone-03wt.onrender.com/addPositions").then((res)=>{
      console.log(res.data);
      setAllPositions(res.data);
    })

  },[]);
  const labels =allPositions.map((subarray)=>[subarray.name]);
  const data ={
    labels,
    datasets:[
      {
        label:"Stock Price",
        data:allPositions.map((stocks)=>stocks.price),
        backgroundColor:"rgba(255,99,132,0.5)"
      }
    ]
  }

    return (
        <div className="h-full w-full ">
              <h3 className='m-10 text-2xl font-bold'>Positions ({allPositions.length})</h3>
              <div className="overflow-x-auto mb-20">
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
              <Vertical className="mt-30" data={data}/>
            </div>
    )
}
export default Positions;