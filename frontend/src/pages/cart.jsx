import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ItemCard } from "../components/itemcard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(Number);
    const [totalProducts, setTotalProducts] = useState(Number);

    async function getCartItems() {
        try {
            const response = await axios.get("http://localhost:3000/brandname/profile/", {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            setCartItems(response.data.cart);
            setTotalProducts(cartItems.length)
            const total = cartItems.reduce((total, item) => total + item.price, 0)
            setTotalAmount(total)
        } catch(error) {    
            console.log(error);
        }
    }

    useEffect(() => {
        getCartItems()
    }, [userData])

    return <>
    <Navbar />
    <div className="px-2 pt-14 h-[92vh]">
        <div className="p-6 font-bold text-xl border-b">
            Your Cart
        </div>
        <div className="flex justify-between">
            <div className="p-6 w-2/3 grid grid-cols-4 gap-5">
                {cartItems.map((product, index) => <ItemCard key={index} product={product} page="cart" />)}
            </div>
            <div className="m-6 pl-3 font-mono font-bold text-xl border-l items-start w-1/3">
                <div className="m-2 p-2 border-b">
                    Amount
                </div>
                <div className="m-2 p-2 text-gray-800">
                    <div className="flex justify-between font-light text-lg font-mono">
                        <div>
                            Total Products:
                        </div>
                        <div>
                            {totalProducts}
                        </div>
                    </div>
                    <div className="flex justify-between font-light text-lg font-mono">
                        <div>
                            Delivery Charges:
                        </div>
                        <div className="text-gray-400">
                            ----
                        </div>
                    </div>
                    <div className="flex justify-between font-light text-lg font-mono">
                        <div>
                            Total Amount: 
                        </div>
                        <div>
                            ₹.{totalAmount}
                        </div>
                    </div>
                </div>
                <div className="items-center">
                    <button title="Dummy button" className="m-2 px-2 py-1 w-full rounded-xl border font-light text-md hover:bg-black hover:text-white">
                        Checkout
                    </button>
                    <div className="mx-4 my-2 border border-gray-200"></div>
                    <button className="m-2 px-2 py-1 w-full rounded-xl border font-light text-md hover:bg-black hover:text-white"
                            onClick={() => navigate("/explore")}
                    >
                        Continue shopping
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
}
