import axios from "axios";
import { ShoppingCart, Heart, ShoppingBag, Package, LogOut, User, Anchor } from "react-feather";
import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext";


export function Profile() {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);

    function logoutHandler() {
        localStorage.removeItem("token")
        navigate("/")
    }

    function redirectToExplore() {
        navigate("/explore")
    }

    return (
        <div className="flex flex-col min-h-screen pt-6">
        <Navbar />
        <div className="p-5 h-full">
                <div className="flex justify-between m-3 p-4 rounded-md">
                    <div className="flex gap-6 w-full">
                        <div className="w-40 h-40 flex justify-center items-center overflow-hidden text-neutral-700">
                            <User size={200}/>
                        </div>
                        <div className="rounded-md text-md w-1/2">
                            <div className="p-2 text text-black border-b">
                                <div className="p-0.5">
                                    {`${userData?.firstName } ${userData?.lastName}`}
                                </div>
                                <div className="p-0.5">
                                    Email: {userData?.email}
                                </div>
                                <div className="p-0.5">
                                    Address: {userData?.address}
                                </div>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <button className="flex flex-col justify-center items-center rounded-md border border-transparent py-2 w-1/3 box-content text-neutral-700 hover:scale-105"
                                        onClick={ () =>  navigate("/profile/cart") }
                                >
                                    <ShoppingCart size={35}/>
                                    Your Cart
                                </button>
                                <button className="flex flex-col justify-center items-center rounded-md border border-transparent py-2 w-1/3 box-content text-neutral-700 hover:scale-105"
                                        onClick={ () =>  navigate("/profile/wishlist") }
                                >
                                    <Heart size={35} />
                                    Your Wishlist
                                </button>
                                <button className="flex flex-col justify-center items-center rounded-md border border-transparent py-2 w-1/3 box-content text-neutral-700 hover:scale-105"
                                    onClick={ () =>  navigate("/profile/order") }
                                >
                                    <Package size={35} />
                                    Your Orders
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 border-l-2 p-5 w-1/3">
                        <Button label={"Continue shopping"} onClick={redirectToExplore}/>
                        <div className="flex gap-2 justify-center items-center text-lg text-gray-600 hover:text-black hover:scale-105">
                            <LogOut />
                            <button onClick={logoutHandler}>Logout</button>
                        </div>    
                    </div>
                </div>
                <div className="m-3 p-3 h-full">
                    <div className="m-2 p-2 flex gap-2 text-lg font-semibold text-stone-700 border-b">
                        <ShoppingBag size={30}/>
                        Your Pruchases
                    </div>
                    <div className="p-4 flex flex-col justify-center text text-center text-gray-500 bg-gray-300/60 h-[210px]">
                        No purchases made.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-400">
                    <Anchor size={30}/>
                    Brandname
                </div>
        </div>
        <Footer></Footer>
        </div>
    )
}