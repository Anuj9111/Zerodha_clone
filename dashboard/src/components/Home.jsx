import TopBar from "./TopBar.jsx"
// import Dashboard from "./Dashboard.jsx"
import { Outlet } from "react-router-dom";


function Home(){
    return(
        <div className="h-full">
            <TopBar ></TopBar>
            <Outlet></Outlet>
        </div>
    )
}
export default Home;