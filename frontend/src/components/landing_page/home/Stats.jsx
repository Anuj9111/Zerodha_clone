import StatsImage from "../../../assets/ecosystem.png"
export function Stats(){
    return(
        <div className="w-full p-20 grid grid-cols-12 gap-30 ">
            <div className="col-span-6">
                <h1 className="text-4xl font-bold ">Trust with confidence</h1>
                <br />
                <br />1
                <h2 className="text-2xl font-semibold ">Customer-first always</h2>
                <p className="text-gray-500">That's why 1.3+crore cusrtomers trust Zerodha with 3.5+ lakh crore worth of equaity investments</p>
                <br />
                <h2 className="text-2xl font-semibold">No spam or gimmicks</h2>
                <p className="text-gray-500">No gimmicks ,spam "gamification", or annoying push notifications .High quality apps that you use at your pace, the way you like.</p>
                <br />
                <h2 className="text-2xl font-semibold">The Zerodha universe</h2>
                <p className="text-gray-500">Not just an app, but a whole ecosystem.Out investements in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br />
                <h2 className="text-2xl font-semibold">Do better with money</h2>
                <p className="text-gray-500">With initiatives like Nudge and Kill Switch,we don't just facilitate transactions ,but actively help you do better with your money.'</p>
            </div>
            <div className="col-span-6">
                <img  className="h-[500px] w-[500px]"src={StatsImage} alt="statsImage" />
                <div className="flex gap-38">
                    < a className="text-blue-500 underline" href="http://">Explore our products</a>
                    <a className="text-blue-500 underline" href="http://">Try Kite demo</a>
                </div>

            </div>
            
        </div>
    )
}