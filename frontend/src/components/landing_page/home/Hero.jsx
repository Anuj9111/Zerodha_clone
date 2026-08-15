import homeHero from "../../../assets/homeHero.png";
import { useNavigate } from "react-router-dom";

export function Hero() {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-auto flex flex-col items-center">

            <img
                src={homeHero}
                alt="stats"
                className="h-[500px] w-[900px]"
            />

            <h1 className="text-5xl font-medium mt-6">
                Invest in everything
            </h1>

            <p className="text-xl mt-3">
                Online platform to invest in stocks, derivatives,
                mutual funds, and more
            </p>

            <button
                className="bg-blue-500 w-40 h-12 text-[20px] text-white border rounded-2xl mt-3"
                onClick={() => navigate("/signup")}
            >
                Sign Up Now
            </button>

        </div>
    );
}