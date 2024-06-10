import img from "../assets/1564534_customer_man_user_account_profile_icon.svg"
import { ShoppingCart, Heart, ShoppingBag, Package, LogOut } from "react-feather";
import { Navbar } from "../components/navbar";
import { Button } from "../components/button";

export function Profile() {

    function logoutHandler() {
        return
    }

    function redirectToExplore() {
        null
    }

    return (
        <div>
            <Navbar />
            <div className="p-5 h-full">
                    <div className="flex justify-between">
                        <div className="flex justify-center">
                            <div className="w-40 h-40">
                                <img className="rounded-full" src={img} alt="" />
                            </div>
                            <div className="pl-8 rounded-md drop-shadow-lg text-lg">
                                <div>
                                    User: Jon Jones
                                </div>
                                    Username: jon@gmail.com
                                <div>
                                    Address: ABC Street, XYZ City, Postal Code
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button className="flex flex-col justify-center items-center rounded-md border border-transparent p-2 hover:shadow-xl hover:bg-zinc-200">
                                        <ShoppingCart size={35}/>
                                        Your Cart
                                    </button>
                                    <button className="flex flex-col justify-center items-center rounded-md border border-transparent p-2 hover:shadow-xl hover:bg-zinc-200">
                                        <Heart size={35} />
                                        Your Wishlist
                                    </button>
                                    <button className="flex flex-col justify-center items-center rounded-md border border-transparent p-2 hover:shadow-xl hover:bg-zinc-200">
                                        <Package size={35} />
                                        Your Orders
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <Button label={"Continue shopping"} onClick={redirectToExplore}/>
                            <div className="flex gap-2 justify-center items-center text-lg text-gray-600 hover:text-black">
                                <LogOut />
                                <button onClick={logoutHandler}>Logout</button>
                            </div>    
                        </div>
                    </div>
                    <div className="m-6 p-6">
                        <div className=" p-2 flex gap-2 text-lg font-semibold text-stone-700 border-b">
                            <ShoppingBag size={30}/>
                            Your Pruchases
                        </div>
                        <div className="p-4 flex flex-col justify-center text text-center text-gray-500 bg-gray-100 h-40">
                            No purchased made yet.
                        </div>
                    </div>
            </div>
        </div>
    )
}