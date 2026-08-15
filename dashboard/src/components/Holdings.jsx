import {useState,useEffect} from 'react'
import axios from "axios";
import { Vertical } from './Vertical.jsx';

// import { holdings } from "../data/data.js";


function Holdings() {



  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/addHoldings").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data);
    })

  },[]);

  const labels =allHoldings.map((subarray)=>[subarray.name]);

  const data={
    labels,
    datasets:[
      {
        label:"Stock Price",
        data:allHoldings.map((stocks)=>stocks.price),
        backgroundColor:"rgba(255,99,132,0.5)"
      }
    ]
  } 


  return (
    <div className="h-full w-full ">
      <h3 className='text-2xl m-10 font-bold'>Holdings({allHoldings.length})</h3>
      <div className="overflow-x-auto mb-20">
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
      <Vertical  data={data}/>
    </div>
    
  );
}
export default Holdings;
