import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ItemCard } from "../components/itemcard";

export function Cart() {

    const pro = {
        name: "Nike Court Vision Low Next Nature",
        img: "court_vision_low_next_nature_shoes.png",
        price: "20000",
        Category: "Shoes"
    }

    function cartItems() {
        return
    }

    return <>
    <Navbar />
    <div className="min-h-screen">
        <div className="p-6 font-bold text-xl border-b">
            Your Cart
        </div>
        <div className="flex justify-between">
            <div className="p-6 w-2/3 grid grid-cols-4 gap-5">
                <ItemCard product={pro} page="cart" />
                <ItemCard product={pro} page="cart" />
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
                            5
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
                            ₹.40000
                        </div>
                    </div>
                </div>
                <div className="items-center">
                    <button className="m-2 px-2 py-1 w-full rounded-xl border font-light text-md hover:bg-black hover:text-white">
                        Checkout
                    </button>
                    <div className="mx-4 my-2 border border-gray-200"></div>
                    <button className="m-2 px-2 py-1 w-full rounded-xl border font-light text-md hover:bg-black hover:text-white">
                        Continue shopping
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
}
