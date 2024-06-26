import { useNavigate } from "react-router-dom";
import { User, ShoppingCart,Search } from "react-feather";



export function Navbar() {
    const navigate = useNavigate();

    function userButtonHandler() {
        navigate("/profile")
    }

    return (
        <div className="shadow-md">
            <div className="flex items-center md:justify-between max-w-screen-xl mx-auto">
                <div className="flex justify-between gap-3">
                    <a className="btn btn-ghost text-xl font-extrabold">Brandname</a>
                    <div className="btn btn-ghost text-xl font-semibold"> | </div>
                    <button className="btn btn-ghost text-l font-semibold items-baseline p-1" onClick={() => {navigate("/explore")} }>Explore</button>
                </div>
                <div className="flex items-center form-control w-1/2 justify-center">
                    <Search />
                    <input type="text" placeholder={`Search`} className="input input-bordered p-2 m-2 w-full rounded-xl bg-slate-100" />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <button className="" onClick={() => { navigate("/profile/cart") }}>
                        <ShoppingCart className="" size={25} />
                    </button>
                    <button onClick={userButtonHandler}>
                        <User size={30}/>
                    </button>
                </div>
            </div>
        </div>
  
    )
};


