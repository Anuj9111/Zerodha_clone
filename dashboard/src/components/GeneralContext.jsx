import {useState} from "react";
import { createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow:(uid)=>{},
  closeBuyWindow:()=>{},
});

export const GeneralContextProvider = (props)=>{
  const[isBuyWindowOpen,setIsBuyWindowOpen] = useState(false);
  const[selectedStockUID,setSelectedStockUID]=useState("");

  const handleOpenBuyWindow = (uid)=>{
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow =()=>{
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return(
    <GeneralContext.Provider value={{
      openBuyWindow: handleOpenBuyWindow,
      closeBuyWindow : handleCloseBuyWindow,
    }}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}></BuyActionWindow>}
    </GeneralContext.Provider>
  )
}

export default GeneralContext;