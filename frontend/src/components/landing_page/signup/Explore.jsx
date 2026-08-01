import {Link} from "react-router-dom"
export function Explore(){
    return(
        <div className="mt-30 w-full">
            <div className="text-[30px] flex justify-center mb-20"> 
                <h1>Explore different account types</h1>
            </div>
            <div className=" mx-30 flex flex-wrap justify-center gap-10">
                <Link className="border-2 border-gray-400 rounded-2xl w-[320px] h-[130px] leading-8 p-5 hover:border-blue-500" to='/signup'>
                    
                    <h1 className="text-[20px]">Individual Account</h1>
                    <p className="text-gray-600">Invest in equity,mutual funds and derivatives</p>
                </Link>
                <Link className="border-2 border-gray-400 rounded-2xl w-[320px] h-[130px] leading-8 p-5 hover:border-blue-500">
                    
                    <h1>HUF Account</h1>
                    <p>Make tax-efficient investment for your family</p> 
                </Link>
                <Link className="border-2 border-gray-400 rounded-2xl w-[320px] h-[130px] leading-8 p-5 hover:border-blue-500">
                    
                    <h1>NRI Account</h1>
                    <p>Invests in equity ,mutual funds,more</p>
                </Link>
                <Link className="border-2 border-gray-400 rounded-2xl w-[320px] h-[130px] leading-8 p-5 hover:border-blue-500">
                    
                    <h1>Minor Account</h1>
                    <p>Teach you little ones about money & invest for their future with them</p>
                </Link>
                <Link className="border-2 border-gray-400 rounded-2xl w-[320px] h-[130px] leading-8 p-5 hover:border-blue-500" >
                    
                    <h1>Corporate/LLP/Partnership</h1>
                    <p>
                        Manage your business surplus and investments easily
                    </p>
                </Link>

            </div>
             
        </div>
    )
}