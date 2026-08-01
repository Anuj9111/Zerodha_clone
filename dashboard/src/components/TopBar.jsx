import Menu from "./Menu.jsx";

function TopBar(){
    return (
        <div className=" flex w-full h-20 ">
            <div className="flex items-center h-full w-1/3 border border-black ">
                <div className="flex justify-center items-center w-1/2 gap-4 ">
                    <p>NIFTY</p>
                    <p className="text-amber-600">{102.3}</p>
                    <p></p>
                </div>
                <div className="flex justify-center items-center w-1/2 gap-4  ">
                    <p>SENSEX</p>
                    <p className="text-amber-600">{102.3}</p>
                    <p></p>
                </div>
            </div> 
            <Menu></Menu> 
        </div>
    )
}
export default TopBar;