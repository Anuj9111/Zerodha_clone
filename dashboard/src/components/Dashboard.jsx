import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext.jsx";

function Dashboard() {
  return (
    <div className="flex h-full ">
      <div className="w-1/3 h-full border border-black">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        
      </div>

      <div className="flex-1 h-full border  border-black overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
