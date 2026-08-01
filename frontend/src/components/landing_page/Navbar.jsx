import zerodha from "../../assets/logo.svg"
import {Link } from "react-router-dom"

export function Navbar(){
    return(
        <div className="fixed top-0 left-0 w-full h-18 bg-gray-50 grid grid-cols-10">
            <div className="col-span-2 ">
                <Link to="/"><img className="w-[200px] h-15 p-2 ml-3.5 " src={zerodha} alt="logo" /></Link>
            </div>
            <div className="col-span-4"></div>
            <div className="col-span-4 ml-12 h-full">
                <ul className=" h-full flex items-center gap-9">
                    <li><Link className="text-[20px]" to="/about">About</Link></li>
                    <li><Link className="text-[20px]" to="/pricing">Pricing</Link></li>
                    <li><Link  className="text-[20px]" to="/product">Product</Link></li>
                    <li><Link className="text-[20px]" to="/support">Support</Link></li>
                    <li><Link className="text-[20px]" to="/signup">Sign Up</Link></li>
                </ul>
            </div>

        </div>
    )
}