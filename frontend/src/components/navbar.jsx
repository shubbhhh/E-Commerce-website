import { useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingCart,Search } from "react-feather";
import "../App.css"



export function Navbar() {
    const navigate = useNavigate();
    const loction = useLocation();

    function userButtonHandler() {
        navigate("/profile")
    }

    return (
        <div className={`navbar ${loction.pathname == "/" ? "" : "shadow-sm"} ${loction.pathname == "/explore" ? "bg-[#f3f3f3]" : ""} flex justify-center h-[60px]`}>
            <div className="flex items-center w-full md:justify-between max-w-screen-xl mx-auto">
                <div className="flex justify-between gap-3">
                    <a href="/" className="btn btn-ghost text-2xl font-light">
                        BRANDNAME
                    </a>
                    <div className="btn btn-ghost text-xl font-semibold"> | </div>
                    <a href="/explore" className="btn btn-ghost text-l font-bold items-baseline p-1 hover:scale-105">
                        Explore
                    </a>
                </div>
                <div className="flex items-center gap-2 form-control w-1/2 justify-center">
                    <Search />
                    <input type="text" placeholder={`Search`} className="w-1/2 border-b border-blue-gray-200 bg-transparent py-1.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-black placeholder-black placeholder-opacity-60 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button className="hover:scale-105" onClick={() => { navigate("/profile/cart") }}>
                        <ShoppingCart className="" size={25} />
                    </button>
                    <button className="hover:scale-105" onClick={userButtonHandler}>
                        <User size={30}/>
                    </button>
                </div>
            </div>
        </div>
  
    )
};


