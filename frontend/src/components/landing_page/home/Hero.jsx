import homeHero from"../../../assets/homeHero.png"

export function Hero(){
    return(
        // <div>hero</div>
        <div className="  w-screen h-auto   flex flex-col items-center ">
            <img src={homeHero} alt="stats" className="h-[500px] w-[900px] "></img> 
            <h1 className="text-5xl font-medium mt-6">Invest in everything</h1>
            <p className="text-1xl mt-3">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className="bg-blue-500 w-40 h-12 text-[20px] text-white border rounded-2xl mt-3">Sign Up Now</button>
        </div>
    )
}