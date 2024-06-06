import { Button } from "../components/button";
import img from "../assets/1564534_customer_man_user_account_profile_icon.svg"
import { ShoppingCart, Heart, ShoppingBag } from "react-feather";

export function Profile() {
    return (
        <div className="object-center w-1/2 h-screen bg-gray-400">
            <div className="flex gap-4 items-center">
                <div className="w-40 h-40 rounded-full bg-slate-500 ">
                    <img className="bg-slate-500 rounded-full" src={img} alt="" />
                </div>
                <div>
                    <div>
                        user: ADAEAFE
                    </div>
                        username: ASEDFWE@mail.com
                    <div>
                        Address: faeiofj aeifjj aofj;ds 
                    </div>
                </div>
            </div>

            <div className="p-5 flex justify-between">
                <div className="p-4 text-center">
                    {/* <img src={ShoppingCart} alt="" /> */}
                    <ShoppingCart size={50}/>
                    Your Cart
                </div>
                <div className="p-4 text-center">
                    <Heart size={50} />
                    Your Wishlist
                </div>
                <div className="p-4 text-center">
                    <ShoppingBag size={50}/>
                    Your Orders
                </div>
            </div>
        </div>
    )
}