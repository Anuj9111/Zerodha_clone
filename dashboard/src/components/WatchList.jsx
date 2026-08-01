import {Tooltip,Grow} from '@mui/material'
import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { watchlist } from '../data/data.js';
import {KeyboardArrowDown} from '@mui/icons-material'
import {KeyboardArrowUp} from '@mui/icons-material'
import { MoreHoriz,BarChartOutlined } from '@mui/icons-material';

const WatchList = () => {
  return (
    <div className="w-full  bg-white rounded-lg shadow-md border border-gray-200">
      {/* Search Section */}
      <div className=" flex items-center justify-between p-4 border-b border-gray-200">
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
      <ul className="divide-y divide-gray-200">
        {/* Watchlist items will be rendered here */}
        {watchlist.map((stock,index)=>{
            return(
                <WatchListItem stock={stock} key={index}></WatchListItem>

            )
            
        })}
      </ul>
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
          TransitionComponent={Grow}
        >
          <button onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button>Sell</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button>
            <BarChartOutlined />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button>
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};