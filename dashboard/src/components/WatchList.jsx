import {Tooltip} from '@mui/material'
import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { watchlist } from '../data/data.js';
import {KeyboardArrowDown} from '@mui/icons-material'
import {KeyboardArrowUp} from '@mui/icons-material'
import { MoreHoriz,BarChartOutlined } from '@mui/icons-material';
import DoughnutChart from './DoughnoutChart.jsx';

const WatchList = () => {
   const label =watchlist.map((subarray)=>(subarray.name));
   const data={
     labels:label,
     datasets: [
    {
      label: 'Price',
      data: watchlist.map((stocks)=>stocks.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
   }
  
  return (
    <div className="w-full  h-full ">
      {/* Search Section */}
      <div className=" flex items-center justify-between p-4 border-b border-gray-200 mb-10">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />

        <span className="ml-3 whitespace-nowrap text-sm text-gray-500">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Watchlist */}
      <ul className="divide-y divide-gray-200 mb-20">
        {/* Watchlist items will be rendered here */}
        {watchlist.map((stock,index)=>{
            return(
                <WatchListItem stock={stock} key={index}></WatchListItem>

            )
            
        })}
      </ul>
      <DoughnutChart className="mt-30" data={data}/>
    </div>
  );
};

export default WatchList;


const WatchListItem =({stock})=>{
    const [showWatchlistActions,setShowWatchlistActions]=useState(false);
    const handleMouseEnter =(e)=>{
        setShowWatchlistActions(true);
    }
    const handleMouseExit =(e)=>{
        setShowWatchlistActions(false);
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className='flex justify-around items-center h-15'>
                <p className={stock.isDown?"text-green-400":"text-red-500"}>{stock.name}</p>
                <div className='space-x-2'>
                    <span className='text-gray-300'>{stock.percent}</span>
                    {stock.isDown?(
                        <KeyboardArrowDown className='text-red-500'></KeyboardArrowDown>
                    ):(<KeyboardArrowUp className='text-red-500'></KeyboardArrowUp>)}
                    <span>{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name}/>}
        </li>
    )
}


// const WatchListActions =({uid})=>{
//     // const { openBuyWindow } = useContext(GeneralContext);
//     return <span>
//         <span>
//             <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//                 <button  onClick={handleBuyClick}>Buy</button>
//             </Tooltip>
//         </span>
//         <span>
//             <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//                 <button>Sell</button>
//             </Tooltip>
//         </span>
//         <span>
//             <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//                 <button><BarChartOutlined></BarChartOutlined></button>
//             </Tooltip>

//         </span>
//         <span>
//             <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//                 <button><MoreHoriz></MoreHoriz></button>
                
//             </Tooltip>
//         </span>

//     </span>
// }

const WatchListActions = ({ uid }) => {
//   const { openBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     openBuyWindow(uid);
//   };
// const generalContext = useContext(GeneralContext);

//     console.log(generalContext);

//     const handleBuyClick = () => {
//         generalContext.openBuyWindow(uid);
//     };
const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          
        >
          <button className='w-12 rounded-xs ml-5 text-white bg-green-500' onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          
        >
          <button className='w-12 rounded-xs m-5 text-white bg-red-500'>Sell</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          
        >
          <button className='w-8 mr-5 border rounded-xs'>
            <BarChartOutlined />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          
        >
          <button className='w-8 border rounded-xs'>
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};